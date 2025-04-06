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
    const form = document.getElementById('contactForm');
    form.reset();
    const fields = form.querySelectorAll('input:not([type="radio"]), select, textarea');
    fields.forEach(field => {
        removeErrorMessage(field);
        field.style.borderColor = '';
        fieldValidity[field.id] = false;
    });
    fieldValidity.gender = false;
    validateForm();
}

function checkFio(fioValue) {
    const fioValueParts = fioValue.trim().split(/\s+/);
    return ((fioValueParts.length === 3) && (fioValueParts.every(part => part.length > 0)));
}

function checkPhone(phoneValue) {
    const phoneRegex = /^(\+7|\+3)\d{8,11}$/;
    return phoneRegex.test(phoneValue);
}

function checkEmail(emailValue) {
    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return emailRegex.test(emailValue);
}

function checkAge(ageValue) {
    if (ageValue <= 15) {
        return false;
    }
    return true;
}

function validateField(field) {
    let error = '';
    let isValid = true;

    switch (field.id) {
        case 'fullName':
            isValid = checkFio(field.value);
            error = 'ФИО должно состоять из трех слов, разделенных пробелами';
            break;
        case 'mobilePhone':
            isValid = checkPhone(field.value);
            error = 'Пожалуйста, введите корректный номер телефона (начинается с +7 или +3, содержит от 9 до 11 цифр, без пробелов)';
            break;
        case 'Email':
            isValid = checkEmail(field.value);
            error = 'Пожалуйста, введите корректный email';
            break;
        case 'age':
            isValid = checkAge(field.value);
            error = 'Отправлять данные можно только при достижении 16 лет';
            break;
        case 'msg':
            isValid = (field.value.trim() !== '');
            error = 'Пожалуйста, введите текст в сообщение';
            break;
    }

    fieldValidity[field.id] = isValid;

    if (isValid) {
        field.style.borderColor = '#e6ffe6';
        field.style.borderWidth = '2px';
        removeErrorMessage(field);
    } else {
        field.style.borderColor = '#ffe6e6';
        field.style.borderWidth = '2px';
        addErrorMessage(field, error);
    }

    validateForm(); 
}

function removeErrorMessage(field) {
    const existingError = field.nextElementSibling;
    if (existingError && existingError.className === 'error-message') {
        existingError.remove();
    }
}

function addErrorMessage(field, error) {
    removeErrorMessage(field);
    const errorSpan = document.createElement('div');
    errorSpan.className = 'error-message';
    errorSpan.style.color = 'white';
    errorSpan.style.fontWeight = 'bold';
    errorSpan.textContent = error;
    errorSpan.style.backgroundColor = 'red';
    errorSpan.style.borderRadius = '10px';
    errorSpan.style.marginBottom = '20px';
    field.parentNode.insertBefore(errorSpan, field.nextSibling);
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const isValid = Object.values(fieldValidity).every(value => value === true);
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = !isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const fields = form.querySelectorAll('input:not([type="radio"]), select, textarea');
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    
    fields.forEach(field => {
        field.addEventListener('input', function() {
            validateField(this);
        });
        field.addEventListener('blur', function() {
            validateField(this);
        });
    });
    validateForm();
    
    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            fieldValidity.gender = true;
            validateForm();
        });
    });

    validateForm();
});