const allPages = [
    "Главная страница",
    "Обо мне",
    "Мои интересы",
    "Учеба",
    "Фотоальбом",
    "Контакт",
    "Тест по дисциплине",
    "История просмотра"
];

function initHistory() {
    let currentSession = JSON.parse(localStorage.getItem('currentViewingHistory'));
    if (!currentSession) {
        currentSession = {};
        $.each(allPages, function(_, page) {
            allTimeHistory[page] = 0;
        });

        localStorage.setItem('currentViewingHistory', JSON.stringify(currentSession));
    }

    let allTimeHistory = JSON.parse(getCookie('allTimeViewingHistory'));
    if (!allTimeHistory) {
        allTimeHistory = {};
        $.each(allPages, function(_, page) {
            allTimeHistory[page] = 0;
        });

        setCookie('allTimeViewingHistory', JSON.stringify(allTimeHistory), 365);
    }
}

function getCookie(name) {
    console.log('getCookie');
    const allCookies = document.cookie.split('; ');
    console.log(allCookies);

    for (let cookie of allCookies) {
       const [cookieName, cookieValue] = cookie.split("=");
        console.log(cookieName + "  " + name);
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null; 
}

function setCookie(name, value, expiration_days) {
    console.log('setCookie');
    const date = new Date();
    date.setTime(date.getTime() + (expiration_days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const path = "path=/";
    const encodedName = encodeURIComponent(name);
    const encodedValue = encodeURIComponent(value);
    const cookieString = `${encodedName}=${encodedValue};${expires};${path};SameSite=Lax`;
    document.cookie = cookieString;
    console.log(cookieString);
    console.log(document.cookie);
}

export function clearCurrSession() {
    const currentSession = {};
    $.each(allPages, function(_, page) {
        currentSession[page] = 0;
    });
    localStorage.setItem('currentViewingHistory', JSON.stringify(currentSession));

    const $currViewTableBody = $('#cur_view-table tbody');
    
    // Очистка существующих данных в таблице
    $currViewTableBody.empty();

    updateCurrViewTable();
}

function updateCurrViewTable() {
    const $currViewTableBody = $('#cur_view-table tbody');
    let i = 1;
    const currentSession = JSON.parse(localStorage.getItem('currentViewingHistory')) || {};
    
    $currViewTableBody.empty();

    $.each(currentSession, function(page, count) {
        const $row = $('<tr>');
        $row.append($('<td>').text(i));
        $row.append($('<td>').text(page));
        $row.append($('<td>').text(count));
        $currViewTableBody.append($row);
        i++;
    });
}

function updateAllTimeViewTable() {
    const $allTimeViewTableBody = $('#all_time-table tbody');
    let i = 1;
    const allTimeHistory = JSON.parse(getCookie('allTimeViewingHistory')) || {};
    
    $allTimeViewTableBody.empty();

    $.each(allTimeHistory, function(page, count) {
        const $row = $('<tr>');
        $row.append($('<td>').text(i));
        $row.append($('<td>').text(page));
        $row.append($('<td>').text(count));
        $allTimeViewTableBody.append($row);
        i++;
    });
}

function updateViewCount(pageName) {
    console.log("updateViewCount");
    // Обновление счетчика текущей сессии
    let currentSession = JSON.parse(localStorage.getItem('currentViewingHistory')) || {};
    currentSession[pageName] = (currentSession[pageName] || 0) + 1;
    localStorage.setItem('currentViewingHistory', JSON.stringify(currentSession));

    // Обновление счетчика за все время
    let allTimeHistory = JSON.parse(getCookie('allTimeViewingHistory')) || {};
    allTimeHistory[pageName] = (allTimeHistory[pageName] || 0) + 1;
    console.log(JSON.stringify(allTimeHistory));
    setCookie('allTimeViewingHistory', JSON.stringify(allTimeHistory), 365);
}

function getPageTitle() {
    return $('title').text().split(". ")[1];
}

$(document).ready(function() {
    initHistory();

    const currPage = getPageTitle();

    // Сначала обновляем счетчики просмотров, только если это НЕ страница истории
    updateViewCount(currPage);

    // Затем обновляем таблицы, если это страница истории
    if (currPage === "История просмотра") {
        updateCurrViewTable();
        updateAllTimeViewTable();   
    }
});