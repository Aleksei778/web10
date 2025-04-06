<section class="contactform-section">
    <h2>Формочка для связи</h2>
    <div class="info-container">
        <div class="contact-form">
            <form action="/web/web9/main/validateContact" method="POST" id="contactForm" style="position: sticky; z-index: 1000;">
                <!-- ФИО -->
                <label for="fullName">ФИО:</label>
                <input type="text" name="fullName" id="fullName" placeholder="Введите ФИО" class="contact_form-input" 
                       value="<?php echo isset($_POST['fullName']) ? htmlspecialchars($_POST['fullName']) : ''; ?>" 
                       data-format="Пархоменко Алексей Александрович">
                <?php if (isset($model['errors']['fullName'])): ?>
                    <?php echo $model['errors']['fullName']; ?>
                <?php endif; ?>

                <!-- Телефон -->
                <label for="mobilePhone">Телефон:</label>
                <input type="text" name="mobilePhone" id="mobilePhone" placeholder="Введите телефон" class="contact_form-input" 
                       value="<?php echo isset($_POST['mobilePhone']) ? htmlspecialchars($_POST['mobilePhone']) : ''; ?>" 
                       data-format="+79785077529">
                <?php if (isset($model['errors']['mobilePhone'])): ?>
                    <?php echo $model['errors']['mobilePhone']; ?>
                <?php endif; ?>

                <!-- Пол -->
                <label for="gender">Пол:</label>
                <div class="radio-group">
                    <input type="radio" id="male" name="gender" value="male" class="contact_form-input" 
                           <?php echo (isset($_POST['gender']) && $_POST['gender'] === 'male') ? 'checked' : ''; ?> 
                           data-format="выбор пола М/Ж">
                    <label for="male">Мужской</label>

                    <input type="radio" id="female" name="gender" value="female" class="contact_form-input" 
                           <?php echo (isset($_POST['gender']) && $_POST['gender'] === 'female') ? 'checked' : ''; ?> 
                           data-format="выбор пола М/Ж">
                    <label for="female">Женский</label>
                </div>

                <!-- Возраст -->
                <label for="age">Возраст:</label>
                <select name="age" id="age" class="contact_form-input" data-format="возраст от 1 до 100">
                    <option value="">Выберите возраст</option>
                    <?php for ($i = 1; $i <= 100; $i++): ?>
                        <option value="<?php echo $i; ?>" 
                                <?php echo (isset($_POST['age']) && $_POST['age'] == $i) ? 'selected' : ''; ?>>
                            <?php echo $i; ?>
                        </option>
                    <?php endfor; ?>
                </select>
                <?php if (isset($model['errors']['age'])): ?>
                    <?php echo $model['errors']['age']; ?>
                <?php endif; ?>

                <!-- Дата рождения -->
                <label for="birth_date">Дата рождения:</label>
                <div class="data_picker-container">
                    <input type="text" id="birth_date" name="birth_date" class="contact_form-input" 
                           value="<?php echo isset($_POST['birth_date']) ? htmlspecialchars($_POST['birth_date']) : ''; ?>" 
                           data-format="**.**.****" readonly placeholder="Выберите дату">
                    <div id="calendar" class="calendar-dropdown">
                        <div class="calendar-header">
                            <select name="month" id="monthSelect">
                                <option value="">Месяц</option>
                            </select>
                            <select name="year" id="yearSelect">
                                <option value="">Год</option>
                            </select>
                        </div>
                        <div class="calendar-body">
                            <div class="weekdays">
                                <div>Пн</div><div>Вт</div><div>Ср</div><div>Чт</div><div>Пт</div><div>Сб</div><div>Вс</div>
                            </div>
                            <div id="calendar-days" class="days"></div>
                        </div>
                    </div>
                </div>

                <!-- Email -->
                <label for="email">Email:</label>
                <input type="email" name="Email" id="Email" placeholder="Введите email" class="contact_form-input" 
                       value="<?php echo isset($_POST['Email']) ? htmlspecialchars($_POST['Email']) : ''; ?>" 
                       data-format="*@gmail.com">
                <?php if (isset($model['errors']['Email'])): ?>
                    <?php echo $model['errors']['Email']; ?>
                <?php endif; ?>

                <!-- Сообщение -->
                <label for="message">Сообщение:</label>
                <textarea name="msg" id="msg" rows="5" placeholder="Введите текст сообщения" class="contact_form-input" 
                          data-format="Сообщение"><?php echo isset($_POST['msg']) ? htmlspecialchars($_POST['msg']) : ''; ?></textarea>
                <?php if (isset($model['errors']['msg'])): ?>
                    <?php echo $model['errors']['msg']; ?>
                <?php endif; ?>

                <!-- Кнопки -->
                <div class="button-group">
                    <button type="submit">Отправить</button>
                    <button type="button" id="clear_contactform-btn">Очистить форму</button>
                </div>
                <?php if (isset($model['message']) && $model['message'] !== ''): ?>
                    <div class="success-message"><?php echo $model['message']; ?></div>
                <?php endif; ?>
            </form>
        </div>
    </div>
</section>