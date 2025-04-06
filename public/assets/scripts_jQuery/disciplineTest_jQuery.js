export function validateForm(event) {
    event.preventDefault();

    const $form = $('#testForm');
    
    if (!validateCheckBoxes()) {
        return false;
    }

    const $inputs = $form.find('input, select, textarea');

    const emptyInput = $inputs.filter(function() {
        return !$(this).val();
    }).first();

    if (emptyInput) {
        alert("Ошибка. Заполните форму полностью пожалуйста");
        emptyInput.focus();
        return false;
    }

    alert ('Сообщение отправлено!');
    clearForm2();

    return true;
}

// валидация чек-боксов (должно быть установлено как минимум 3 переключателя)
function validateCheckBoxes() {
    const $checkboxes = $('input[name="abiotic_factors"]');
    const checkedCount = $checkboxes.filter(':checked').length;

    console.log(checkedCount);

    if (checkedCount < 3) {
        alert('Пожалуйста, выберите как минимум 3 абиотических фактора.');

        // находим первый невыбранный переключатель, чтобы установить фокус на нем
        $checkboxes.not(':checked').first().focus();
        return false;
    }

    return true;
}

// Очистка формы (кнопка "Очистить форму")
export function clearForm2() {
    const $testForm = $('#testForm');
    $testForm[0].reset();
}