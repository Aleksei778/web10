<?php

require_once 'models/validators/form_validation.php';
require_once 'models/validators/results_form_validation.php';

class Model {
    public $validator;
    public $results_validator;

    function __construct() { 
        $this->validator = new FormValidation();
        $this->results_validator = new ResultsVerification();
    }
}