<section class="contactform-section">
    <h2>
        Форма для отзывов
    </h2>
    <div class="info-container">
        <div class="contact-form">
            <form action="/web/web9/main/validateGuestBook" method="POST" id="contactForm" style="position: sticky; z-index: 1000;">
                <!-- Фамилия -->
                <label for="second_name">Фамилия:</label>
                <input type="text" name="second_name" id="second_name" placeholder="Введите фамилию" class="contact_form-input" data-format="Пархоменко">
                <?php if (isset($model['errors']['second_name'])): ?>
                    <?php echo $model['errors']['second_name']; ?>
                <?php endif; ?>

                <!-- Имя -->
                <label for="first_name">Имя:</label>
                <input type="text" name="first_name" id="first_name" placeholder="Введите имя" class="contact_form-input" data-format="Алексей">
                <?php if (isset($model['errors']['first_name'])): ?>
                    <?php echo $model['errors']['first_name']; ?>
                <?php endif; ?>

                <!-- Отчество -->
                <label for="middle_name">Отчество:</label>
                <input type="text" name="middle_name" id="middle_name" placeholder="Введите отчество" class="contact_form-input" data-format="Александрович">
                <?php if (isset($model['errors']['middle_name'])): ?>
                    <?php echo $model['errors']['middle_name']; ?>
                <?php endif; ?>

                <!-- Email -->
                <label for="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Введите email" class="contact_form-input" data-format="*@gmail.com">
                <?php if (isset($model['errors']['email'])): ?>
                    <?php echo $model['errors']['email']; ?>
                <?php endif; ?>

                <!-- Текст отзыва -->
                <label for="message">Текст отзыва:</label>
                <textarea name="message" id="message" rows="5" placeholder="Введите текст отзыва" class="contact_form-input" data-format="Сообщение"></textarea>
                <?php if (isset($model['errors']['message'])): ?>
                    <?php echo $model['errors']['message']; ?>
                <?php endif; ?>
                
                <!-- Кнопки "Отправить" и "Очистить форму" -->
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

<section class="cur_view-section">
    <h2>
        Таблица отзывов
    </h2>
    <div class="cur_view-table">
        <table id="cur_view-table">
            <thead>
                <tr>
                    <th>Дата сообщения</th>
                    <th>ФИО</th>
                    <th>Email</th>
                    <th>Текст отзыва</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($model['messages'] as $msg): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($msg[0]) ?></td>
                        <td><?php echo htmlspecialchars($msg[1]) ?></td>
                        <td><?php echo htmlspecialchars($msg[2]) ?></td>
                        <td><?php echo htmlspecialchars($msg[3]) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</section>