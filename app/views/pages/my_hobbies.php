<!-- Содержимое -->
<section class="content-list">
    <h2>
        Содержание
    </h2>
    <!-- ФОТО -->
    <div class="info-container">
        <div class="my_hobbies">
            <h3 class="highlight" id="list-header">Списочек</h3>
            <ul style="position: sticky; z-index: 1000;">
                <?php foreach ($model['categories'] as $category_ru => $category_en): ?>
                    <li><a href="#<?= $category_en ?>"><?= $category_ru ?></a></li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>
</section>

<!-- Хобби -->
<section id="hobby" class="hobby-section">
    <h2>
        Хобби
    </h2>
    <div class="info-container">
        <?php foreach ($model['hobby'] as $hobbyName => $hobbyData): ?>
            <div class="my_hobbies">
                <h3 class="highlight" id="<?= $hobbyData['en'] ?>-header">
                    <?= $hobbyName ?>
                </h3>
                <ul>
                    <?php foreach ($hobbyData['items'] as $item): ?>
                        <li><p><?= $item ?></p></li>
                    <?php endforeach; ?>
                </ul>
                <img src="<?= $hobbyData['image'] ?>" alt="<?= $hobbyData['alt'] ?>" class="<?= $hobbyData['alt'] ?>-photo">
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Фильмы -->
<?php foreach ($model['interests'] as $interestName => $interestData): ?>
    <section id="<?= $interestData['en'] ?>" class="<?= $interestData['en'] ?>-section">
        <h2>
            <?= $interestName ?>
        </h2>
        <div class="info-container">
            <?php foreach ($interestData['items'] as $interestName2 => $interestData2): ?>
                <div class="my_hobbies">
                    <h3 class="highlight"><?= $interestName2 ?></h3>
                    <img src="<?= $interestData2['image'] ?>" alt="<?= $interestData2['alt'] ?>" class="<?= $interestData2['alt'] ?>-photo">
                </div>
            <?php endforeach; ?>
        </div>
    </section>
<?php endforeach; ?>