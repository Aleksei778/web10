<section class="contactform-section">
    <h2>
        Редактор блога
    </h2>
    <div class="info-container">
        <div class="contact-form">
            <form action="/web/web9/main/validateRedactorBloga" method="POST" id="contactForm" style="position: sticky; z-index: 1000;" enctype="multipart/form-data">
                <!-- Фамилия -->
                <label for="msg_theme">Тема сообщения:</label>
                <input type="text" name="msg_theme" id="msg_theme" placeholder="Введите тему сообщения" class="contact_form-input">
                <?php if (isset($model['errors']['msg_theme'])): ?>
                    <?php echo $model['errors']['msg_theme']; ?>
                <?php endif; ?>

                <!-- Имя -->
                <label for="image">Изображение:</label>
                <input type="file" name="image" id="image" accept="image/*">

                <!-- Текст отзыва -->
                <label for="message">Текст отзыва:</label>
                <textarea name="message" id="message" rows="5" placeholder="Введите текст сообщения" class="contact_form-input"></textarea>
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

<section class="info-aboutme">
    <h2>
        Где посмотреть данные
    </h2>
    <div class="info-container">
        <div class="contact-form">
            <h3 class="highlight">Информация</h3>
            <p style="position: sticky; z-index: 1000;">Для просмотра данных перейдите на страницу <a href="/web/web9/main/actionMyBlog">"Мой Блог"</a></p>
        </div>
    </div>
</section>