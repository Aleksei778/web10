<?php

class Router {
    static function route() {
        if ($_REQUEST['admin_area']) {
            $admin_path = 'admin/';
            $admin_file_prefix = 'admin_';
            $admin_class_prefix = 'Admin';
        } else {
            $admin_path = '';
            $admin_file_prefix = '';
            $admin_class_prefix = '';
        }

        // -- РАБОТА С КОНТРОЛЛЕРАМИ --
        $controller_name = $_REQUEST["controller"] ? $_REQUEST["controller"] : "main";

        $action_name = $_REQUEST["action"] ? $_REQUEST["action"] : "page";

        $controller_file = __DIR__ . "/../${admin_path}controllers/" . $admin_file_prefix . $controller_name . '_controller.php';
        
        if (file_exists($controller_file)) {
            include $controller_file;
        } else {
            die ("ОШИБКА! Файл контроллера $controller_file не найден!");
        }

        $controller_class_name = $admin_file_prefix . ucfirst($controller_name) . 'Controller';

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