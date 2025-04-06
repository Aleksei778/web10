<?php

class FormValidation {
    protected $rules = [];
    protected $errors = [];

    public function isNotEmpty($data) {
        if (!empty(trim($data))) {
            return "";
        } else {
            return "Поле не должно быть пустым";
        }
    }

    public function isInteger($data) {
        if (empty(trim($data))) {
            return "Значение не может быть пустым";
        }

        if (!preg_match("/^-?\d+$/", $data)) {
            return "Значение должно являться целым числом";
        }
        if (intval($data) > PHP_INT_MAX || intval($data) < PHP_INT_MIN) {
            return "Значение выходит за рамки допустимого предела";
        }
        return "";
    }

    public function isLess($data, $value) {
        if ($this->isInteger($data) !== "") { 
            return "Значение должно являться строковым представлением целого числа";
        }

        return (intval($data) >= $value) ? "Значение должно быть меньше $value": "";
    }

    public function isGreater($data, $value) {
        if ($this->isInteger($data) !== "") {
            return "Значение должно являться строковым представлением целого числа";
        }

        return (intval($data) <= $value) ? "Значение должно быть больше $value": "";
    }
    
    public function isEmail($data) {
        if (empty($data)) {
            return "Значение не должно быть пустым";
        }
        
        if (!is_string($data)) {
            return "Значение должно быть строкой";
        }
        
        if (!filter_var($data, FILTER_VALIDATE_EMAIL)) {
            return "Значение не является корректным email'ом";
        }

        return "";
    }

    public function SetRule($field_name, $validator_name, $compared_value = null) {
        $this->rules[] = [
            'field' => $field_name,
            'validator' => $validator_name,
            'compared_value' => $compared_value
        ];
    }

    public function Validate($post_array) {
        $this->errors = [];

        foreach ($this->rules as $rule) {
            $field = $rule['field'];
            $validator = $rule['validator'];
            $compared_value = $rule['compared_value'] ?? null;

            $data = $post_array[$field] ?? '';

            switch ($validator) {
                case 'isNotEmpty':
                    $error = $this->isNotEmpty($data);
                    break;
                case 'isInteger':
                    $error = $this->isInteger($data);
                    break;
                case 'isLess':
                    $error = $this->isLess($data, $compared_value);
                    break;
                case 'isGreater':
                    $error = $this->isGreater($data, $compared_value);
                    break;
                case 'isEmail':
                    $error = $this->isEmail($data);
                    break;
            }

            if ($error) {
                $this->errors[$field] = $error;
            }
        }

        return empty($this->errors);
    }

    public function ShowErrors($field) {
        if (empty($this->errors)) {
            return "";
        }
        
        $msg = $this->errors[$field];
        $html = "<div class='error-message'>$msg</div>";
        return $html;
    }
}