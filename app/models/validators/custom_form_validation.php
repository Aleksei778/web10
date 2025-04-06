<?php

require_once 'models/validators/form_validation.php';

class CustomFormValidation extends FormValidation {
    protected $testRules = [];

    public function SetTestsRule($field_name, $validator_name, $compared_value = null) {
        $this->testRules[] = [
            'field' => $field_name,
            'validator' => $validator_name
        ];
    }

    public function ValidateTest($post_array) {
        foreach ($this->testRules as $testRule) {
            $field = $testRule['field'];
            $validator = $testRule['validator'];

            $data = $post_array[$field] ?? '';

            switch ($validator) {
                case 'isValidFio':
                    $error = $this->isValidFio($data);
                    break;
                case 'isValidScience':
                    $error = $this->isValidScience($data);
                    break;
            }

            if ($error) {
                $this->errors[$field] = $error;
            }

        }

        return empty($this->errors);
    }

    public function isValidFio($data) {
        if (!is_string($data)) {
            return "Значение должно быть строкой";
        }
        if (!preg_match('/^[А-Я][а-я]+ [А-Я][а-я]+ [А-Я][а-я]+$/u', trim($data))) {
            return "Ответ должен содержать ровно три слова, каждое с заглавной русской буквы";
        }
        return "";
    }

    public function isValidScience($data) {
        if (!is_string($data)) {
            return "Значение должно быть строкой";
        }
        if (!preg_match('/^[А-Я][а-я]+$/u', trim($data))) {
            return "Ответ должен содержать одно слово, начинающееся с заглавной русской буквы";
        }
        return "";
    }
}