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
        allPages.forEach(page => {
            currentSession[page] = 0;
        });

        localStorage.setItem('currentViewingHistory', JSON.stringify(currentSession));
    }

    let allTimeHistory = JSON.parse(getCookie('allTimeViewingHistory'));
    if (!allTimeHistory) {
        allTimeHistory = {};
        allPages.forEach(page => {
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
    allPages.forEach(page => {
        currentSession[page] = 0;
    });
    localStorage.setItem('currentViewingHistory', JSON.stringify(currentSession));

    const currViewTable = document.getElementById("cur_view-table");
    const currViewTableBody = currViewTable.getElementsByTagName('tbody')[0];
    
    // Очистка существующих данных в таблице
    currViewTableBody.innerHTML = '';

    updateCurrViewTable();
}

function updateCurrViewTable() {
    const currViewTable = document.getElementById("cur_view-table");
    const currViewTableBody = currViewTable.getElementsByTagName('tbody')[0];
    let i = 1;
    const currentSession = JSON.parse(localStorage.getItem('currentViewingHistory')) || {};
    
    // Очистка существующих данных в таблице
    currViewTableBody.innerHTML = '';

    for (let page in currentSession) {
        let row = currViewTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = i;
        cell2.textContent = page;
        cell3.textContent = currentSession[page];

        i++;
    }
}

function updateAllTimeViewTable() {
    const allTimeViewTable = document.getElementById("all_time-table");
    const allTimeViewTableBody = allTimeViewTable.getElementsByTagName('tbody')[0];
    let i = 1;
    const allTimeHistory = JSON.parse(getCookie('allTimeViewingHistory')) || {};
    
    // Очистка существующих данных в таблице
    allTimeViewTableBody.innerHTML = '';

    for (let page in allTimeHistory) {
        let row = allTimeViewTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = i;
        cell2.textContent = page;
        cell3.textContent = allTimeHistory[page];

        i++;
    }
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
    const currPage = document.title.split(". ")[1];
    return currPage;
}

document.addEventListener('DOMContentLoaded', function() {
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