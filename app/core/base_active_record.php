<?php

class BaseActiveRecord {
    protected $pdo;
    protected $id;
    protected $tableName;
    protected $attributes = [];

    public function __construct() {
        try {
            $this->pdo = new PDO(
                "pgsql:host=localhost;dbname=LABA9",
                "postgres",
                "postgres"
            );
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            throw new Exception("Ошибка подключения к БД: " . $e->getMessage());
        }
    }

    public function __set($name, $value) {
        $this->attributes[$name] = $value;
    }

    public function __get($name) {
        return $this->attributes[$name] ?? null;
    }

    public function save() {
        if (isset($this->id)) {
            $fields = [];
            $values = [];

            foreach ($this->attributes as $key => $value) {
                $fields[] = "$key = :$key";
                $values[":$key"] = $value;
            }
            $values[":id"] = $this->id;

            $sql = "UPDATE {$this->tableName} SET " . implode(", ", $fields) . " WHERE id = :id";
            $stmt = $this->$pdo->prepare($sql);
            $stmt->execute($values);
        } else {
            $fields = array_keys($this->attributes);
            $placeholders = array_map(fn($field) => ":$field", $fields);
            $values = [];

            foreach ($this->attributes as $key => $value) {
                $values[":$key"] = $value;
            }

            $sql = "INSERT INTO {$this->tableName} (" .
                    implode(", ", $fields) . ") VALUES (" .
                    implode(", ", $placeholders) . ") RETURNING id";

            $stmt = $this->pdo->prepare($sql);
            $stmt->execute($values);
            $this->id = $stmt->fetchColumn();
        }

        return $this;
    }

    public function delete() {
        if (!$this->id) {
            throw new Exception("Cannot delete record without ID");
        }

        $sql = "DELETE FROM {$this->tableName} WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute([':id' => $this->id]);
        return $flag;
    }

    public function find($id) {
        $obj = new static(); // использование механизма позднего связывания
        // т.е. будет создаваться объект какого-го либа дочернего класса, вызвавшего метод,
        // а не класса BaseActiveRecord

        $sql = "SELECT * FROM {$obj->tableName} WHERE id = :id";
        $stmt = $obj->pdo->prepare($sql);
        $stmt->execute([':id' => $id]);
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($result) {
            // заполняем объект данными из БД
            $obj->id = $result['id'];
            unset($result['id']);
            $obj->attributes = $result;
            
            return $obj;
        }

        return null;
    }

    public function findAll() {
        $instance = new static();

        $sql = "SELECT * FROM {$instance->tableName}";
        $stmt = $instance->pdo->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO:FETCH_ASSOC);

        $objects = [];
        foreach ($results as $result) {
            $obj = new static();
            
            $obj->id = $result['id'];
            unset($result['id']);
            $obj->attributes = $result;

            $objects[] = $obj;
        }
        
        return $objects;
    }
}