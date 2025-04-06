<?php

class Interest {
    public static $CATEGORIES = [
        'Хобби' => 'hobby',
        'Фильмы' => 'films',
        'Музыка' => 'music',
        'Книги' => 'books'
    ];
    public static $HOBBY = [
        'Спорт' => [
            'en' => 'sport',
            'items' => [
                'Волейбол',
                'Баскетбол',
                'Футбол',
                'Плавание'
            ],
            'image' => '/web/web9/public/assets/imgs/basket.jpg',
            'alt' => 'basketball'
        ],
        'Кодинг' => [
            'en' => 'coding',
            'items' => [
                'C++',
                'Python',
                'PHP'
            ],
            'image' => '/web/web9/public/assets/imgs/fastapi.jpg',
            'alt' => 'fastapi'
        ],
    ];
    public static $INTERESTS = [
        'Фильмы' => [
            'en' => 'films',
            'items' => [
                'Дюна' => [
                    'image' => '/web/web9/public/assets/imgs/dune.jpeg',
                    'alt' => 'dune'
                ],
                'Гарри Поттер' => [
                    'image' => '/web/web9/public/assets/imgs/harry_potter.jpg',
                    'alt' => 'harry potter'
                ],
                'Джон Уик' => [
                    'image' => '/web/web9/public/assets/imgs/john.jpeg',
                    'alt' => 'john wick'
                ]
            ]
        ],
        'Музыка' => [
            'en' => 'music',
            'items' => [
                'Redda' => [
                    'image' => '/web/web9/public/assets/imgs/redda.jpg',
                    'alt' => 'Redda'
                ],
                'Dom Corleo' => [
                    'image' => '/web/web9/public/assets/imgs/dom_corleo.jpeg',
                    'alt' => 'dom corleo'
                ],
                'Kai Angel & 9mice' => [
                    'image' => '/web/web9/public/assets/imgs/kaiangel_9mice.jpg',
                    'alt' => 'Kai Angel & 9mice'
                ]
            ]
        ],
        'Книги' => [
            'en' => 'books',
            'items' => [
                'Дюна' => [
                    'image' => '/web/web9/public/assets/imgs/dune_book.jpg',
                    'alt' => 'Дюна'
                ],
                'Голодные игры' => [
                    'image' => '/web/web9/public/assets/imgs/games_book.jpg',
                    'alt' => 'Голодные игры'
                ],
                'Мастер и Маргарита' => [
                    'image' => '/web/web9/public/assets/imgs/master_book.jpg',
                    'alt' => 'Мастер и Маргарита'
                ]
            ]
        ]
    ];
    
    public static function getInterests() {
        return self::$INTERESTS;
    }

    public static function getHobby() {
        return self::$HOBBY;
    }

    public static function getCategories() {
        return self::$CATEGORIES;
    }
}