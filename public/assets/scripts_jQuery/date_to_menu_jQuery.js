// Функция для добавления элемента даты и времени в меню
function addDateTimeToMenu() {
    const header = $('#main_header');
    if (header) {
        const divDate = $('<div>', {
            id: "datetime",
            css: {
                position: "absolute",
                top: "33px",
                right: "10px",
                fontSize: "12px",
                color: "#333"
            }
        });

        header.append(divDate);
        console.log("Date and time element added to the menu");
    } else {
        console.error("Element with id 'main_header' not found");
    }
}

// Функция для обновления даты и времени
function updateDateTime() {
    const date = new Date();
    
    let dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'long',
        timeZone: 'Europe/Moscow',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const dateTimeString = date.toLocaleString("ru", dateOptions);
    const datetimeElement = $('#datetime');
    if (datetimeElement) {
        datetimeElement.text(dateTimeString);
    } else {
        console.error("Element with id 'datetime' not found");
    }
}

function checkScreenWidth() {
    const datetimeElement = $('#datetime');
    if (datetime) {
        if ($(window).width() < "1564") {
            datetimeElement.hide();
        } else {
            datetimeElement.show();
        }
    }
}

// Инициализация при загрузке DOM
$(document).ready(function() {
    addDateTimeToMenu(); // Выполняется один раз при загрузке страницы
    updateDateTime(); // Обновляем время сразу после создания элемента
    checkScreenWidth();

    // Устанавливаем интервал обновления на каждую секунду
    setInterval(updateDateTime, 1000);

    $(window).resize(checkScreenWidth);
});

console.log("Script loaded");