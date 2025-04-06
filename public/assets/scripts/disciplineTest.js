export function validateForm(event) {
    event.preventDefault();

    const form = document.getElementById('testForm');
    
    if (!validateCheckBoxes()) {
        return false;
    }

    const inputs = form.querySelectorAll('input, select, textarea');

    for (let input of inputs) {
        if (!input.val()) {
            alert("Ошибка. Заполните форму полностью пожалуйста");
            input.focus();
            return false;
        }
    }

    alert ('Сообщение отправлено!');
    clearForm2();

    return true;
}

// валидация чек-боксов (должно быть установлено как минимум 3 переключателя)
function validateCheckBoxes() {
    const checkboxes = document.querySelectorAll('input[name="abiotic_factors"]');
    const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

    console.log(checkedCount);

    if (checkedCount < 3) {
        alert('Пожалуйста, выберите как минимум 3 абиотических фактора.');

        // находим первый невыбранный переключатель, чтобы установить фокус на нем
        const firstNotChoosed = Array.from(checkboxes).find(checkbox => !checkbox.checked);
        if (firstNotChoosed) {
            firstNotChoosed.focus();
        }
        return false;
    }

    return true;
}

// Очистка формы (кнопка "Очистить форму")
export function clearForm2() {
    document.getElementById('testForm').reset();
}