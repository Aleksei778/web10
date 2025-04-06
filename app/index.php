<?php
require_once 'core/router.php';
require_once 'core/controller.php';
require_once 'models/visit_model.php';

$current_page = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") .
                "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
VisitModel::createVisit($current_page);

$router = new Router();
$router->route();