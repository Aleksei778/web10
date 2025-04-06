const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

let selectedDate = null;
let currentYear;
let currentMonth;

$(document).ready(function() {
    const birthDateInput = $('#birth_date');
    const calendar = $('#calendar');
    const monthSelect = $('#monthSelect');
    const yearSelect = $('#yearSelect');

    initMonthSelect();
    initYearSelect();

    // Установка текущей даты
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    monthSelect.val(currentMonth + 1);
    yearSelect.val(currentYear);

    generateCalendar();

    birthDateInput.on('click', function(e) {
        e.stopPropagation();
        calendar.toggle();
    });

    monthSelect.on('change', function() {
        currentMonth = parseInt(monthSelect.val()) - 1; // корректировка значения месяца
        generateCalendar();
    });

    yearSelect.on('change', function() { // исправлено с 'click' на 'change'
        currentYear = parseInt(yearSelect.val());
        generateCalendar();
    });
});

function initMonthSelect() {
    const monthSelect = $('#monthSelect');
    
    months.forEach((month, index) => {
        $('<option>').val(index + 1).text(month).appendTo(monthSelect);
    });
}

function initYearSelect() {
    const yearSelect = $('#yearSelect');
    const date = new Date();
    const currYear = date.getFullYear();

    for (let year = currYear - 100; year <= currYear; year++) {
        $('<option>').val(year).text(year).appendTo(yearSelect);
    }
}

function generateCalendar() {
    const daysContainer = $('#calendar-days');
    daysContainer.empty();

    const firstDate = new Date(currentYear, currentMonth, 1);
    const lastDate = new Date(currentYear, currentMonth + 1, 0);

    let firstDayOfWeek = firstDate.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

    for (let i = 1; i < firstDayOfWeek; i++) {
        $('<div>', {
            class: 'empty'
        }).appendTo(daysContainer);
    }

    for (let day = 1; day <= lastDate.getDate(); day++) {
        const dayDiv = createDayElement(day);
        daysContainer.append(dayDiv);
    }
}

function createDayElement(day) {
    const dayDiv = $('<div>', {
        class: 'calendar-day'
    }).text(day);

    dayDiv.on('click', function() {
        $('.calendar-day').removeClass('selected'); // удаляет класс 'selected' с других дней
        dayDiv.addClass('selected'); // добавляет класс 'selected' выбранному дню

        const calendar = $('#calendar');
        calendar.hide();

        const birthDateInput = $('#birth_date');
        const dayString = (day > 9) ? day.toString() : ('0' + day.toString());
        const monthString = (currentMonth + 1 > 9) ? (currentMonth + 1).toString() : ('0' + (currentMonth + 1).toString());
        const yearString = currentYear.toString();
        birthDateInput.val(`${dayString}.${monthString}.${yearString}`);
    });

    return dayDiv;
}