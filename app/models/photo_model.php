<?php

class Photo {
    public static $IMG_PATH = "/web/public/assets/imgs/album/compressed/";
    public static $photos = [
        [
            'filename' => 'surikat.jpg',
            'caption'  => 'Сурикат'
        ],
        [
            'filename' => 'croll.jpg',
            'caption'  => 'Кролик'
        ],
        [
            'filename' => 'mouse.jpg',
            'caption'  => 'Мышь'
        ],
        [
            'filename' => 'cat.jpg',
            'caption'  => 'Кот'
        ],
        [
            'filename' => 'dog.jpg',
            'caption'  => 'Собака'
        ],
        [
            'filename' => 'enot.jpg',
            'caption'  => 'Енот'
        ],
        [
            'filename' => 'monkey.jpg',
            'caption'  => 'Обезьяна'
        ],
        [
            'filename' => 'koala.jpg',
            'caption'  => 'Коала'
        ],
        [
            'filename' => 'fenek.jpg',
            'caption'  => 'Фенек'
        ],
        [
            'filename' => 'hamster.jpg',
            'caption'  => 'Хомяк'
        ],
        [
            'filename' => 'panda.jpg',
            'caption'  => 'Панда'
        ],
        [
            'filename' => 'piggy.jpg',
            'caption'  => 'Свинка'
        ],
        [
            'filename' => 'vudra.jpg',
            'caption'  => 'Выдра'
        ],
        [
            'filename' => 'shinshilla.jpg',
            'caption'  => 'Шиншилла'
        ],
        [
            'filename' => 'kosula.jpg',
            'caption'  => 'Косуля'
        ],
        [
            'filename' => 'kvokka.jpg',
            'caption'  => 'Квокка'
        ]
    ];

    public static function getAllPhotos()
    {
        return ["full_path" => self::$IMG_PATH, "photos" => self::$photos];
    }
}