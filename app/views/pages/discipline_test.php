<section class="test-section">
    <h2>
        Тест по дисциплине<br>
        "Основы экологии"
    </h2>
    <div class="info-container">
        <div class="test-form">
            <form action="/web/web9/main/validateTest" method="POST" id="testForm" style="position: sticky; z-index: 1000;">
                <!-- Отдельный раздел "Информация о пользователе" -->
                <fieldset>
                    <legend>Информация о пользователе</legend>

                    <label for="fullName">ФИО:</label>
                    <input type="text" name="fullName" id="fullName" placeholder="Введите ФИО" 
                           value="<?php echo isset($_POST['fullName']) ? htmlspecialchars($_POST['fullName']) : ''; ?>">
                    <?php if (isset($model['errors']['fullName'])): ?>
                        <?php echo $model['errors']['fullName']; ?>
                    <?php endif; ?>

                    <label for="group">Группа:</label>
                    <select name="group" id="group">
                        <optgroup label="Курс 1">
                            <option value="group1" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group1') ? 'selected' : ''; ?>>ИТ/б-24-1-о</option>
                            <option value="group2" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group2') ? 'selected' : ''; ?>>ИТ/б-24-2-о</option>
                            <option value="group3" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group3') ? 'selected' : ''; ?>>ИТ/б-24-3-о</option>
                            <option value="group4" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group4') ? 'selected' : ''; ?>>ИТ/б-24-4-о</option>
                            <option value="group5" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group5') ? 'selected' : ''; ?>>ИТ/б-24-5-о</option>
                            <option value="group6" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group6') ? 'selected' : ''; ?>>ИТ/б-24-6-о</option>
                            <option value="group7" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group7') ? 'selected' : ''; ?>>ИТ/б-24-7-о</option>
                            <option value="group8" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group8') ? 'selected' : ''; ?>>ИТ/б-24-8-о</option>
                        </optgroup>
                        <!-- Аналогично для остальных optgroup -->
                        <optgroup label="Курс 2">
                            <option value="group1" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group1') ? 'selected' : ''; ?>>ИТ/б-23-1-о</option>
                            <!-- Повторите для всех -->
                        </optgroup>
                        <optgroup label="Курс 3">
                            <option value="group1" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group1') ? 'selected' : ''; ?>>ИВТ/б-22-1-о</option>
                            <!-- Повторите для всех -->
                        </optgroup>
                        <optgroup label="Курс 4">
                            <option value="group1" <?php echo (isset($_POST['group']) && $_POST['group'] === 'group1') ? 'selected' : ''; ?>>ИВТ/б-21-1-о</option>
                            <!-- Повторите для всех -->
                        </optgroup>
                    </select>
                </fieldset>

                <!-- Отдельный раздел "Тест по дисциплине" -->
                <fieldset>
                    <legend>Тест по дисциплине</legend>
                    <!-- Вопрос 1 -->
                    <label for="firstQ">Вопрос 1. В какой экосистеме обитает тушканчик?</label>
                    <select name="Ecosystem" id="Ecosystem">
                        <optgroup label="Наземные экосистемы">
                            <option value="forest" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'forest') ? 'selected' : ''; ?>>Леса</option>
                            <option value="desert" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'desert') ? 'selected' : ''; ?>>Пустыни</option>
                            <option value="grassland" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'grassland') ? 'selected' : ''; ?>>Степи</option>
                        </optgroup>
                        <optgroup label="Водные экосистемы">
                            <option value="freshwater" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'freshwater') ? 'selected' : ''; ?>>Пресноводные</option>
                            <option value="marine" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'marine') ? 'selected' : ''; ?>>Морские</option>
                            <option value="wetlands" <?php echo (isset($_POST['Ecosystem']) && $_POST['Ecosystem'] === 'wetlands') ? 'selected' : ''; ?>>Водно-болотные угодья</option>
                        </optgroup>
                    </select>
                    <?php if (isset($model['errors']['Ecosystem'])): ?>
                        <?php echo $model['errors']['Ecosystem']; ?>
                    <?php endif; ?>

                    <br><br>
                    <!-- Вопрос 2 -->
                    <label for="secondQ">Вопрос 2. Как называется наука, изучающая взаимоотношения живых организмов между собой и с окружающей средой?</label>
                    <input type="text" id="Science" name="Science" placeholder="Введите ответ" 
                           value="<?php echo isset($_POST['Science']) ? htmlspecialchars($_POST['Science']) : ''; ?>">
                    <?php if (isset($model['errors']['Science'])): ?>
                        <?php echo $model['errors']['Science']; ?>
                    <?php endif; ?>

                    <!-- Вопрос 3 -->
                    <label for="thirdQ">Вопрос 3. Какие из перечисленных факторов являются абиотическими? (несколько вариантов ответа)</label><br>
                    <input type="checkbox" name="AbioticFactors[]" id="sunlight" value="sunlight" 
                           <?php echo (isset($_POST['AbioticFactors']) && in_array('sunlight', $_POST['AbioticFactors'])) ? 'checked' : ''; ?>>
                    <label id="not-label" for="sunlight">Солнечный свет</label><br>
                    <input type="checkbox" name="AbioticFactors[]" id="temperature" value="temperature" 
                           <?php echo (isset($_POST['AbioticFactors']) && in_array('temperature', $_POST['AbioticFactors'])) ? 'checked' : ''; ?>>
                    <label id="not-label" for="temperature">Температура</label><br>
                    <input type="checkbox" name="AbioticFactors[]" id="humidity" value="humidity" 
                           <?php echo (isset($_POST['AbioticFactors']) && in_array('humidity', $_POST['AbioticFactors'])) ? 'checked' : ''; ?>>
                    <label id="not-label" for="humidity">Влажность</label><br>
                    <input type="checkbox" name="AbioticFactors[]" id="predators" value="predators" 
                           <?php echo (isset($_POST['AbioticFactors']) && in_array('predators', $_POST['AbioticFactors'])) ? 'checked' : ''; ?>>
                    <label id="not-label" for="predators">Хищники</label><br><br>
                    <?php if (isset($model['errors']['AbioticFactors'])): ?>
                        <?php echo $model['errors']['AbioticFactors']; ?>
                    <?php endif; ?>
                </fieldset>

                <!-- Кнопки "Отправить" и "Очистить форму" -->
                <div class="button-group">
                    <button type="submit" onclick="validateForm(event)">Отправить</button>
                    <button type="button" id="clear_testform-btn">Очистить форму</button>
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
        Таблица результатов
    </h2>
    <?php if (!empty($model['results'])): ?>
    <div class="cur_view-table">
        <table id="cur_view-table">
            <thead>
                <tr>
                    <th>Дата сообщения</th>
                    <th>ФИО</th>
                    <th>Ответы</th>
                    <th>Верно/неверно</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($model['results'] as $result): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($result->created_at); ?></td>
                        <td><?php echo htmlspecialchars($result->full_name); ?></td>
                        <td><?php echo htmlspecialchars(json_encode(json_decode($result->answers, true), JSON_UNESCAPED_UNICODE)); ?></td>
                        <td><?php echo $result->is_correct ? 'Верно' : 'Неверно'; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <?php else: ?>
        <p>Результатов пока нет.</p>
    <?php endif; ?>
</section>