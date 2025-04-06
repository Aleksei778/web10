<?php

class View {
    function render($content_view, $title, $model=NULL, $layout='layout.php') {
        // Используем абсолютный путь для подключения layout
        $layout_path = __DIR__ . '/../views/' . $layout;

        // Проверяем существование файла
        if (file_exists($layout_path)) {
            if ($model) {
                extract($model);
            }
            include $layout_path; // Подключаем layout
        } else {
            die("Ошибка: файл $layout не найден!");
        }
    }
}