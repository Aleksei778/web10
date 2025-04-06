import { clearCurrSession } from '../scripts_jQuery/history_jQuery.js';
// import { clearForm } from '../scripts_jQuery/contacts_jQuery.js';
// import { clearForm2, validateForm } from '../scripts_jQuery/disciplineTest_jQuery.js';

function createSureWindow(callback, message) {
    const overlay = $('<div>', {
        class: 'spec_window',
        id: 'spec_window'
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

    const spec_window_container = $('<div>', {
        class: 'spec-window-container',
        id: 'spec-window-container',
    }).css({
        maxWidth: "500px",
        padding: "30px",
        zIndex: 1,
        backgroundColor: "white",
        borderRadius: "10px"
    });

    const p_title = $('<p>', {
        id: 'p-title'
    }).css({
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '20px',
        textAlign: 'center'
    });
    p_title.text(message);

    const yesBtn = $('<div>', {
        class: 'yes-btn'
    }).css({
        position: 'absolute',
        left: '800px',
        fontSize: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        color: '#1a73e8',
        borderRadius: '5px',
        borderColor: '#1a73e8',
        padding: '10px 20px',
        border: '1px solid #1a73e8',
        display: 'block',
        zIndex: '999'
    });
    yesBtn.text('Да');

    const noBtn = $('<div>', {
        class: 'no-btn'
    }).css({
        position: 'absolute',
        right: '800px',
        fontSize: '25px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: '#ffffff',
        color: '#1a73e8',
        borderRadius: '5px',
        borderColor: '#1a73e8',
        padding: '10px 20px',
        border: '1px solid #1a73e8',
        display: 'block',
        zIndex: '999'
    });
    noBtn.text('Нет');

    yesBtn.on('click', () => {
        if (callback) {
            callback(true);
        }
        overlay.remove();
    });
    noBtn.on('click', () => {
        if (callback) callback(false);
        overlay.remove();
    });

    spec_window_container.append(p_title, yesBtn, noBtn);
    overlay.append(spec_window_container);
    $('body').append(overlay);

    overlay.on('click', (e) => {
        if (e.target === overlay[0]) {
            overlay.remove();
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Очистка текущего сеанса "История просмотра"
    $('#clear_session-btn').click(function(e) {
        e.preventDefault();
        
        createSureWindow(function(result) {
            if (result) {
                // Ваш код здесь
                clearCurrSession();
                console.log('Действие подтверждено');
            } else {
                console.log('Отмена действия');
            }
        }, 'Вы уверены, что хотите очистить данные текущего сеанса?');
    });

    // Очистка формы "Контакт"
    $('#clear_contactform-btn').click(function(e) {
        e.preventDefault();
        
        createSureWindow(function(result) {
            if (result) {
                // Ваш код здесь
                clearForm();
                console.log('Действие подтверждено');
            } else {
                console.log('Отмена действия');
            }
        }, 'Вы уверены, что хотите очистить форму?');
    });
    // Очистка формы "Тест по дисциплине"
    $('#clear_testform-btn').click(function(e) {
        e.preventDefault();
        
        createSureWindow(function(result) {
            if (result) {
                // Ваш код здесь
                clearForm2();
                console.log('Действие подтверждено');
            } else {
                console.log('Отмена действия');
            }
        }, 'Вы уверены, что хотите очистить форму?');
    });

    // Отправка формы "Контакт"
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const form = this;

        createSureWindow(function(result) {
            if (result) {
                // Ваш код здесь
                form.submit();
                console.log('Действие подтверждено');
            } else {
                console.log('Отмена действия');
            }
        }, 'Вы уверены, что хотите отправить форму?');
    });
    // Отправка формы "Тест по дисциплине"
    $('#testForm').on('submit', function(event) {
        event.preventDefault();
        const form = this;

        createSureWindow(function(result) {
            if (result) {
                // Ваш код здесь
                validateForm(event);
                console.log('Действие подтверждено');
            } else {
                console.log('Отмена действия');
            }
        }, 'Вы уверены, что хотите отправить форму?');
    });
});