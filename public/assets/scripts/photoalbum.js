const photos = [
    'surikat',
    'croll',
    'mouse',
    'cat',
    'dog',
    'enot',
    'monkey',
    'koala',
    'fenek',
    'hamster',
    'panda',
    'piggy',
    'vudra',
    'shinshilla',
    'kosula',
    'kvokka'
];

const titles = [
    'Сурикат',
    'Кролик',
    'Мышь',
    'Кот',
    'Собака',
    'Енот',
    'Обезьяна',
    'Коала',
    'Фенек',
    'Хомяк',
    'Панда',
    'Морская свинка',
    'Выдра',
    'Шиншилла',
    'Косуля',
    'Квокка'
];

function createPhotoAlbum() {
    const photoAlbum = document.getElementById('photoAlbum');

    // Создаем строки и ячейки таблицы с фотографиями
    for (let i = 0; i < photos.length; i++) {
        // Создаем div, в котором будут изображение и подпись
        let photoDiv = document.createElement('div');
        photoDiv.className = 'photo-item';

        // Описываем изображение
        let img = document.createElement('img');
        img.src = `../imgs/album/compressed/${photos[i]}.jpg`;
        img.title = titles[i];
        img.alt = titles[i];

        // Описываем подпись 
        let caption = document.createElement('p');
        caption.textContent = titles[i];

        // Добавляем изображение и подпись в div
        photoDiv.appendChild(img);
        photoDiv.appendChild(caption);

        photoDiv.addEventListener('click', () => openLargePhoto(photos[i], titles[i]));

        // Добавляем div в ячейку
        photoAlbum.appendChild(photoDiv);
    }
}

function openLargePhoto(photo, title) {
    const overlay = document.createElement('div');
    
    overlay.className = "photo-album";
    overlay.id = "photo-album";

    overlay.innerHTML = `
        <div class="large-photo-container" id="large-photo-container">
            <img id="large-photo" src="../imgs/album/full_sized/${photo}.jpg" alt="${title}" title="${title}">
            <p id="p-title">${title}</p>
        </div>
    `;

    overlay.style.position = "fixed";
    overlay.style.left = 0;
    overlay.style.top = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "99999";
    overlay.style.backgroundColor = "rgba(0, 0, 0, .3)";
    overlay.style.display = "grid";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    const photo_container = overlay.querySelector("#large-photo-container");
    if (!photo_container) {
        console.log("there is no photo container");
    } else {
        photo_container.style.maxWidth = "700px";
        photo_container.style.padding = "30px";
        photo_container.style.zIndex = "1";
        photo_container.style.backgroundColor = "white";
        photo_container.style.borderRadius = "10px";
    }

    const large_photo = overlay.querySelector("#large-photo");
    if (!large_photo) {
        console.log("there is no large photo");
    } else {
        large_photo.style.width = "600px";
        large_photo.style.height = "600px";
    }

    const p_title = overlay.querySelector("#p-title");
    if (!p_title) {
        console.log("there is no p_title");
    } else {
        p_title.style.fontSize = "24px";
        p_title.style.fontWeight = "bold";
        p_title.style.marginTop = "20px";
        p_title.style.textAlign = "center";
    }

    document.body.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}

document.addEventListener('DOMContentLoaded', createPhotoAlbum);