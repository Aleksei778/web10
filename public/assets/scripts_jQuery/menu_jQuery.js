$(document).ready(function() {
    const $mainMenu = $('#main_menu');
    const mainMenuItems = $mainMenu.find('li');
    console.log(mainMenuItems);
    const menuImages = {
        '/web/web9/main/index': ['/web/web9/public/assets/imgs/icons_for_menu1/mainPage.svg', '/web/web9/public/assets/imgs/icons_for_menu2/mainPage2.svg', 'Главная страница'],
        '/web/web9/main/actionAboutMe': ['/web/web9/public/assets/imgs/icons_for_menu1/aboutMe.svg', '/web/web9/public/assets/imgs/icons_for_menu2/aboutMe2.svg', 'Обо мне'],
        '/web/web9/main/actionMyHobbies': ['/web/web9/public/assets/imgs/icons_for_menu1/myHobbies.svg', '/web/web9/public/assets/imgs/icons_for_menu2/myHobbies2.svg', 'Мои интересы'],
        '/web/web9/main/actionStudy': ['/web/web9/public/assets/imgs/icons_for_menu1/study.svg', '/web/web9/public/assets/imgs/icons_for_menu2/study2.svg', 'Учеба'],
        '/web/web9/main/actionPhotoAlbum': ['/web/web9/public/assets/imgs/icons_for_menu1/photoAlbum.svg', '/web/web9/public/assets/imgs/icons_for_menu2/photoAlbum2.svg', 'Фотоальбом'],
        '/web/web9/main/actionContact': ['/web/web9/public/assets/imgs/icons_for_menu1/contact.svg', '/web/web9/public/assets/imgs/icons_for_menu2/contact2.svg', 'Контакты'],
        '/web/web9/main/actionDisciplineTest': ['/web/web9/public/assets/imgs/icons_for_menu1/disciplineTest.svg', '/web/web9/public/assets/imgs/icons_for_menu2/disciplineTest2.svg', 'Тест по дисциплине'],
        '/web/web9/main/actionHistory': ['/web/web9/public/assets/imgs/icons_for_menu1/history.svg', '/web/web9/public/assets/imgs/icons_for_menu2/history2.svg', 'История просмотра']
    };
    

    // Определяем текущую страницу
    const currPage = $(window.location).attr('pathname').split('/').pop();
    console.log(`currPage: ${currPage}`);

    mainMenuItems.each(function() {
        const item = $(this);
        console.log(item);
        const link = item.find('a');
        const href = link.attr('href');
        console.log(href);

        if (menuImages[href]) {
            const img = $('<img>', {
                class: 'main_menu-image',
                src: menuImages[href][0],
                css: {
                    marginLeft: '10px'
                }
            });
            link.append(img);

            const text = $('<div>', {
                class: 'menu_content-text',
                css: {
                    top: '26px',
                    fontSize: '12px'
                }
            }).text(menuImages[href][2]);
            link.append(text);
        }

        if (currPage === href) {
            const img = item.find('.main_menu-image');
            img.attr('src', menuImages[href][1]);

            const text = item.find('.menu_content-text');
            text.css({
                color: '#1a73e8'
            });
        } else {
            item.on('mouseenter', function() {
                const img = $(this).find('.main_menu-image');
                img.attr('src', menuImages[href][1]);

                const text = $(this).find('.menu_content-text');
                text.css({
                    color: '#1a73e8'
                });
            });

            item.on('mouseleave', function() {
                const img = $(this).find('.main_menu-image');
                img.attr('src', menuImages[href][0]);

                const text = $(this).find('.menu_content-text');
                text.css({
                    color: '#000000'
                });
            });
        }
    });

    const $hobbiesMenu = $('a[href="/web/web9/main/actionMyHobbies"]').parent();
    const $submenu = $('<ul>', {
        class: 'submenu'
    });

    // Добавляем подпункты
    const subItems = [
        { text: 'Хобби', href: '/web/web9/main/actionMyHobbies#hobby' },
        { text: 'Фильмы', href: '/web/web9/main/actionMyHobbies#films' },
        { text: 'Музыка', href: '/web/web9/main/actionMyHobbies#music' },
        { text: 'Книги', href: '/web/web9/main/actionMyHobbies#books' }
    ];

    subItems.forEach(function(item) {
        const $li = $('<li>');
        const $a = $('<a>', {
            href: item.href
        }).text(item.text);
        $li.append($a);
        $submenu.append($li);
    });

    $hobbiesMenu.append($submenu);
    $submenu.hide();

    $hobbiesMenu.on('mouseenter', function() {
        $submenu.show();
    });

    $hobbiesMenu.on('mouseleave', function() {
        $submenu.hide();
    });
});