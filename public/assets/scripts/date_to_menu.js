// Функция для добавления элемента даты и времени в меню
function addDateTimeToMenu() {
    const header = document.getElementById("main_header");
    if (header) {
        const divDate = document.createElement('div');
        
        divDate.id = "datetime";

        divDate.style.position = "absolute";
        divDate.style.top = "33px";
        divDate.style.right = "10px";
        divDate.style.fontSize = "12px";
        divDate.style.color = "#333";

        header.appendChild(divDate);
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
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = dateTimeString;
    } else {
        console.error("Element with id 'datetime' not found");
    }
}

function checkScreenWidth() {
    const datetime = document.getElementById("datetime");
    if (datetime) {
        if (window.innerWidth < "1564") {
            datetime.style.display = "none";
        } else {
            datetime.style.display = "block";
        }
    }
}

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
    addDateTimeToMenu(); // Выполняется один раз при загрузке страницы
    updateDateTime(); // Обновляем время сразу после создания элемента
    checkScreenWidth();

    // Устанавливаем интервал обновления на каждую секунду
    setInterval(updateDateTime, 1000);

    window.addEventListener('resize', checkScreenWidth);
});

console.log("Script loaded");