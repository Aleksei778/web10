document.addEventListener('DOMContentLoaded', function() {
    const mainMenu = document.getElementById('main_menu');
    const mainMenuItems = mainMenu.querySelectorAll('li');
    console.log(mainMenuItems);

    const menuImages = {
        '/index': ['/web/web9/public/assets/imgs/icons_for_menu1/mainPage.svg', '/web/web9/public/assets/imgs/icons_for_menu2/mainPage2.svg', 'Главная страница'],
        '/actionAboutMe': ['/web/web9/public/assets/imgs/icons_for_menu1/aboutMe.svg', '/web/web9/public/assets/imgs/icons_for_menu2/aboutMe2.svg', 'Обо мне'],
        '/actionMyHobbies': ['/web/web9/public/assets/imgs/icons_for_menu1/myHobbies.svg', '/web/web9/public/assets/imgs/icons_for_menu2/myHobbies2.svg', 'Мои интересы'],
        '/actionStudy': ['/web/web9/public/assets/imgs/icons_for_menu1/study.svg', '/web/web9/public/assets/imgs/icons_for_menu2/study2.svg', 'Учеба'],
        '/actionPhotoAlbum': ['/web/web9/public/assets/imgs/icons_for_menu1/photoAlbum.svg', '/web/web9/public/assets/imgs/icons_for_menu2/photoAlbum2.svg', 'Фотоальбом'],
        '/actionContact': ['/web/web9/public/assets/imgs/icons_for_menu1/contact.svg', '/web/web9/public/assets/imgs/icons_for_menu2/contact2.svg', 'Контакты'],
        '/actionDisciplineTest': ['/web/web9/public/assets/imgs/icons_for_menu1/disciplineTest.svg', '/web/web9/public/assets/imgs/icons_for_menu2/disciplineTest2.svg', 'Тест по дисциплине'],
        '/actionHistory': ['/web/web9/public/assets/imgs/icons_for_menu1/history.svg', '/web/web9/public/assets/imgs/icons_for_menu2/history2.svg', 'История просмотра']
    };

    // Определяем текущую страницу
    const currPage = window.location.pathname.pop();
    console.log(currPage);

    mainMenuItems.forEach(item => {
        console.log(item);
        const link = item.querySelector('a');
        const href = link.getAttribute('href');
        console.log(href);

        if (menuImages[href]) {
            const img = document.createElement('img');
            img.className = 'main_menu-image';
            img.src = menuImages[href][0];
            img.style.marginLeft = '10px'
            link.appendChild(img);

            const text = document.createElement('div');
            text.textContent = menuImages[href][2];
            text.className = 'menu_content-text';
            text.style.top = '26px';
            text.style.fontSize = '12px'
            link.appendChild(text);
        }

        console.log(item);
        
        if (currPage === href) {
            const img = item.getElementsByClassName('main_menu-image')[0];
            img.src = menuImages[href][1];

            const text = item.getElementsByClassName('menu_content-text')[0];
            text.style.color = '#1a73e8';
        } else {
            item.addEventListener('mouseenter', () => {
                const img = item.getElementsByClassName('main_menu-image')[0];
                img.src = menuImages[href][1];

                const text = item.getElementsByClassName('menu_content-text')[0];
                text.style.color = '#1a73e8';
            });
    
            item.addEventListener('mouseleave', () => {
                const img = item.getElementsByClassName('main_menu-image')[0];
                img.src = menuImages[href][0];

                const text = item.getElementsByClassName('menu_content-text')[0];
                text.style.color = '#000000';
            });
        }
    });

    const hobbiesMenu = document.querySelector('a[href="my_hobbies.html"]').parentElement;
    const submenu = document.createElement('ul');
    submenu.className = 'submenu';
    
    // Добавляем подпункты
    const subItems = [
        { text: 'Хобби', href: 'my_hobbies.html#hobby' },
        { text: 'Фильмы', href: 'my_hobbies.html#films' },
        { text: 'Музыка', href: 'my_hobbies.html#music' },
        { text: 'Книги', href: 'my_hobbies.html#books' }
    ];

    subItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        submenu.appendChild(li);
    });

    hobbiesMenu.appendChild(submenu);

    submenu.style.display = 'none';
    hobbiesMenu.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
    });
    
    hobbiesMenu.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
    });
});