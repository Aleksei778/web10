function help() {

    console.log('createPhotoAlbum');
    const photoAlbum = $('#photoAlbum');

    // Создаем строки и ячейки таблицы с фотографиями
    for (let i = 0; i < photos.length; i++) {
        // Создаем div, в котором будут изображение и подпись

        // Описываем изображение
        let img = $('<img>', {
            src: `../imgs/album/compressed/${photos[i]}.jpg`,
            title: titles[i],
            alt: titles[i]
        });

        // Описываем подпись
        let caption = $('<p>').text(titles[i]);

        photoDiv.append(img).append(caption).on('click', () => openLargePhoto(i));
        photoAlbum.append(photoDiv);
    }
}

function openLargePhoto(index) {
    console.log('openLargePhoto');
    currentIndex = index;

    const overlay = $('<div>', {
        class: 'photo-album',
        id: 'photo-album'
    }).css({
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 99999,
        backgroundColor: "rgba(0, 0, 0, .3)",
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center'
    });

    const photo_container = $('<div>', {
        class: 'large-photo-container',
        id: 'large-photo-container',
    }).css({
        maxWidth: "700px",
        padding: "30px",
        zIndex: 1,
        backgroundColor: "white",
        borderRadius: "10px"
    });

    const prevBtn = $('<div>', {
        class: 'prev-btn',
        html: '&#8249'
    }).css({
        position: 'absolute',
        left: '800px',
        fontSize: '48px',
        color: '#000',
        cursor: 'pointer'
    });
    const nextBtn = $('<div>', {
        class: 'next-btn',
        html: '&#8250'
    }).css({
        position: 'absolute',
        right: '800px',
        fontSize: '48px',
        color: '#000',
        cursor: 'pointer'
    });

    const large_photo = $('<img>', {
        id: 'large-photo',
        src: `../imgs/album/full_sized/${photos[currentIndex]}.jpg`,
        title: titles[currentIndex],
        alt: titles[currentIndex]
    }).css({
        width: '600px',
        height: '600px'
    });

    const p_title = $('<p>', {
        id: 'p-title'
    }).css({
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '20px',
        textAlign: 'center'
    });
    p_title.text(titles[currentIndex]);

    const p_number = $('<p>', {
        id: 'p-number'
    }).css({
        fontSize: '12px',
        marginTop: '10px',
        textAlign: 'center'
    });
    p_number.text(`Photo ${currentIndex + 1} of ${photos.length}`);

    photo_container
        .append(large_photo)
        .append(nextBtn)
        .append(prevBtn)
        .append(p_title)
        .append(p_number);

    overlay.append(photo_container);

    $('body').append(overlay);

    overlay.on('click', (e) => {
        if (e.target === overlay[0]) {
            overlay.remove();
        }
    });

    prevBtn.on('click', () => {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;

        large_photo.attr('src', `../imgs/album/full_sized/${photos[currentIndex]}.jpg`);
        large_photo.attr('title', titles[currentIndex]);
        large_photo.attr('alt', titles[currentIndex]);

        p_title.text(titles[currentIndex]);
        p_number.text(`Photo ${currentIndex + 1} of ${photos.length}`);
    });
    nextBtn.on('click', () => {
        currentIndex = (currentIndex + 1) % photos.length;

        large_photo.attr('src', `../imgs/album/full_sized/${photos[currentIndex]}.jpg`);
        large_photo.attr('title', titles[currentIndex]);
        large_photo.attr('alt', titles[currentIndex]);

        p_title.text(titles[currentIndex]);
        p_number.text(`Photo ${currentIndex + 1} of ${photos.length}`);
    });
}

$(document).ready(createPhotoAlbum);