<?php

class Router {
    static function route() {
        // -- РАБОТА С КОНТРОЛЛЕРАМИ --
        $controller_name = $_REQUEST["controller"] ? $_REQUEST["controller"] : "main";

        $action_name = $_REQUEST["action"] ? $_REQUEST["action"] : "page";

        $controller_file = __DIR__ . '/../controllers/' . $controller_name . '_controller.php';
        
        if (file_exists($controller_file)) {
            include $controller_file;
        } else {
            die ("ОШИБКА! Файл контроллера $controller_file не найден!");
        }

        $controller_class_name = ucfirst($controller_name) . 'Controller';

        $controller = new $controller_class_name;

        // -- РАБОТА С МОДЕЛЯМИ --
        $model_name = $controller_name;

        $model_file = __DIR__ . '/../models/' . $model_name . '_model.php';
        
        if (file_exists($model_file)) {
            include $model_file;
        } else {
            die("Ошибка! Файл модели $model_name не найден!");
        }

        $model_class_name = ucfirst($model_name) . 'Model';
        
        $model = new $model_class_name;
        $controller->model = $model;
        
        if (method_exists($controller, $action_name)) {
            $controller->$action_name();
        } else {
            die("ОШИБКА! Отсутствует метод $action_name контроллера $controller_class_name");
        }
    }
}