<section class="cur_view-section">
    <h2>
        Список записей
    </h2>
    <?php if (count($posts) > 0): ?>
        <?php foreach ($posts as $post): ?>
            <div>
                <h3><?php echo htmlspecialchars($post->topic); ?></h3>
                <?php if ($post->image): ?>
                    <img src="<?php echo htmlspecialchars($post->image); ?>" alt="Изображение" width="200"><br>
                <?php endif; ?>
                <p><?php echo nl2br(htmlspecialchars($post->content_text)); ?></p>
                <small>Дата: <?php echo $post->created_at; ?></small>
            </div>
        <?php endforeach; ?>

        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=<?php echo $page - 1; ?>">Предыдущая</a>
            <?php endif; ?>
            <?php for ($i = 1; $i <= $model['totalPages']; $i++): ?>
                <a href="?page=<?php echo $i; ?>" <?php echo $i === $page ? 'style="font-weight: bold;"' : ''; ?>><?php echo $i; ?></a>
            <?php endfor; ?>
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page + 1; ?>">Следующая</a>
            <?php endif; ?>
        </div>
    <?php else: ?>
        <p>Записей пока нет</p>
    <?php endif; ?>
</section>