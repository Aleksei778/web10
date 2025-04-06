const months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

let selectedDate = null;
let currentYear;
let currentMonth;

document.addEventListener('DOMContentLoaded', function() {
    const birthDateInput = document.getElementById('birth_date');
    const calendar = document.getElementById('calendar');
    const monthSelect = document.getElementById('monthSelect');
    const yearSelect = document.getElementById('yearSelect');

    initMonthSelect();
    initYearSelect();
    
    // Установка текущей даты
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();

    monthSelect.value = currentMonth + 1;
    yearSelect.value = currentYear;

    generateCalendar();

    birthDateInput.addEventListener('click', function(e) {
        e.stopPropagation();
        calendar.style.display = (calendar.style.display === 'none') ? 'block' : 'none';
    });

    monthSelect.addEventListener('change', function(e) {
        currentMonth = parseInt(monthSelect.value);
        generateCalendar();
    });
    yearSelect.addEventListener('change', function(e) {
        currentYear = parseInt(yearSelect.value);
        generateCalendar();
    });
});

function initMonthSelect() {
    const monthSelect = document.getElementById('monthSelect');
    
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.textContent = month;
        option.value = index + 1;
        monthSelect.appendChild(option);
    });
}

function initYearSelect() {
    const yearSelect = document.getElementById('yearSelect');
    const date = new Date();
    const currYear = date.getFullYear();

    for (let year = currYear - 100; year <= currYear; year++) {
        const option = document.createElement('option');
        option.textContent = year;
        option.value = year;
        yearSelect.appendChild(option);
    }
}

function generateCalendar() {
    const daysContainer = document.getElementById("calendar-days");
    daysContainer.innerHTML = '';

    const firstDate = new Date(currentYear, currentMonth, 1);
    const lastDate = new Date(currentYear, currentMonth + 1, 0);

    let firstDayOfWeek = firstDate.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

    for (let i = 1; i < firstDayOfWeek; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty';
        daysContainer.appendChild(emptyDiv);
    }

    for (let day = 1; day <= lastDate.getDate(); day++) {
        const dayDiv = createDayElement(day);
        daysContainer.appendChild(dayDiv);
    }
}

function createDayElement(day) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    dayDiv.className = 'calendar-day';

    dayDiv.addEventListener('click', function() {
        dayDiv.className += ' selected';

        const calendar = document.getElementById('calendar');
        calendar.style.display = 'none';

        const birthDateInput = document.getElementById('birth_date');
        const dayString = (day > 9) ? day.toString() : ('0' + day.toString());
        const monthString = (currentMonth > 9) ? currentMonth.toString() : ('0' + currentMonth.toString());
        const yearString = currentYear.toString();
        birthDateInput.value = `${dayString}.${monthString}.${yearString}`;
    });

    return dayDiv;
}