<section class="contactform-section">
    <h2>
        Загрузка сообщений
    </h2>
    <div class="info-container">
        <div class="contact-form">
            <form action="/web/web9/main/validateUploadGuestBookFile" method="POST" enctype="multipart/form-data" id="contactForm" style="position: sticky; z-index: 1000;">
                <!-- Загрузка файла -->
                <label for="file">Загрузка файла:</label>
                <input type="file" name="message_file" accept=".inc" required>
                
                <!-- Кнопка "Загрузить" -->
                <button type="submit">Загрузить</button>

                <?php if (isset($model) && is_array($model)): ?>
                    <?php if (!empty($model['message'])): ?>
                        <div class="success-message"><?php echo htmlspecialchars($model['message']); ?></div>
                    <?php elseif (!empty($model['error'])): ?>
                        <div class="error-message"><?php echo htmlspecialchars($model['error']); ?></div>
                    <?php endif; ?>
                <?php endif; ?>
            </form>
        </div>
    </div>
</section>