// Добавим объект для хранения состояния валидности полей
const fieldValidity = {
    fullName: false,
    mobilePhone: false,
    Email: false,
    age: false,
    msg: false,
    gender: false
};

// Очистка формы (кнопка "Очистить форму")
export function clearForm() {
    console.log('clearForm');

    const form = $('#contactForm');
    form.reset();
    const fields = form.find('input:not([type="radio"]), select, textarea');
    
    fields.each(function() {
        removeErrorMessage($(this));
        $(this).css('borderColor', '');
        fieldValidity[$(this).attr('id')] = false;
    });

    fieldValidity.gender = false;
    validateForm();
}

function checkFio(fioValue) {
    console.log('checkFio');
    const fioValueParts = fioValue.trim().split(/\s+/);
    return ((fioValueParts.length === 3) && (fioValueParts.every(part => part.length > 0)));
}

function checkPhone(phoneValue) {
    console.log('checkPhone');
    const phoneRegex = /^(\+7|\+3)\d{8,11}$/;
    return phoneRegex.test(phoneValue);
}

function checkEmail(emailValue) {
    console.log('checkEmail');
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return emailRegex.test(emailValue);
}

function checkAge(ageValue) {
    console.log('checkAge');
    if (ageValue <= 15) {
        return false;
    }
    return true;
}

function validateField(field) {
    console.log('validateField');
    const fieldElement = $(field);
    let error = '';
    let isValid = true;

    switch (fieldElement.attr('id')) {
        case 'fullName':
            isValid = checkFio(fieldElement.val());
            error = 'ФИО должно состоять из трех слов, разделенных пробелами';
            break;
        case 'mobilePhone':
            isValid = checkPhone(fieldElement.val());
            error = 'Пожалуйста, введите корректный номер телефона (начинается с +7 или +3, содержит от 9 до 11 цифр, без пробелов)';
            break;
        case 'Email':
            isValid = checkEmail(fieldElement.val());
            error = 'Пожалуйста, введите корректный email';
            break;
        case 'age':
            isValid = checkAge(fieldElement.val());
            error = 'Отправлять данные можно только при достижении 16 лет';
            break;
        case 'msg':
            isValid = (fieldElement.val().trim() !== '');
            error = 'Пожалуйста, введите текст в сообщение';
            break;
    }

    fieldValidity[fieldElement.attr('id')] = isValid;

    if (isValid) {
        fieldElement.css({
            borderColor: '#e6ffe6',
            borderWidth: '2px'
        });
        removeErrorMessage(fieldElement);
    } else {
        fieldElement.css({
            borderColor: '#ffe6e6',
            borderWidth: '2px'
        });
        addErrorMessage(fieldElement, error);
    }

    validateForm(); 
}

function removeErrorMessage(field) {
    console.log('removeErrorMessage');
    const errorElement = field.next('.error-message');
    if (errorElement.length) {
        errorElement.remove();
    }
}

function addErrorMessage(field, error) {
    console.log('addErrorMessage');
    removeErrorMessage(field);
    const errorSpan = $('div', {
        class: 'error-message',
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
        borderRadius: '10px',
        marginBottom: '20px'
    }).text(error);
    field.after(errorSpan);
}

function validateForm() {
    console.log('validateForm');
    const isValid = Object.values(fieldValidity).every(value => value === true);
    $('#contactForm').find('button[type="submit"]').prop('disabled', !isValid);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded');
    const form = $('#contactForm');
    const fields = form.find('input:not([type="radio"]), select, textarea');
    const radioButtons = form.find('input[type="radio"]');
    
    fields.on('input blur', function() {
        validateField(this);
    });
    
    radioButtons.on('change', function() {
        fieldValidity.gender = true;
        validateForm();
    });

    validateForm();
});