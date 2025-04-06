<?php

require_once 'core/base_active_record.php';

class TestModel extends BaseActiveRecord {
    protected $tableName = 'discipline_test';

    public function __construct() {
        parent::__construct();
    }

    public static function saveResult($fullName, $answers, $isCorrect) {
        $result = new self();
        $result->full_name = $fullName;
        $result->answers = json_encode($answers);
        $result->is_correct = $isCorrect;
        $result->created_at = date('Y-m-d H:i:s');
        
        return $result->save();
    }

    public static function getAllTestResults() {
        $instance = new self();
        $sql = "SELECT * FROM {$instance->tableName} ORDER BY created_at DESC";
        $stmt = $instance->pdo->prepare($sql);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $tests = [];
        foreach ($results as $result) {
            $test = new self();
            $test->id = $result['id'];
            unset($result['id']);
            $test->attributes = $result;
            $tests[] = $test;
        }
        echo $tests[0]->attributes['full_name'];
        return $tests;
    }
}