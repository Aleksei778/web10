<section class="cur_view-section">
    <h2>
        Статистика посещений
    </h2>
    <?php if (count($visits) > 0): ?>
        <table class="visits-table">
            <thead>
                <tr>
                    <th>Дата и время</th>
                    <th>Страница</th>
                    <th>IP-адрес</th>
                    <th>Хост</th>
                    <th>Браузер</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($visits as $visit): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($visit->visit_datetime); ?></td>
                        <td><?php echo htmlspecialchars($visit->page_url); ?></td>
                        <td><?php echo htmlspecialchars($visit->visitor_ip); ?></td>
                        <td><?php echo htmlspecialchars($visit->visitor_hostname); ?></td>
                        <td><?php echo htmlspecialchars($visit->visitor_browser); ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>

        <div class="pagination">
            <?php if ($page > 1): ?>
                <a href="?page=<?php echo $page - 1; ?>">Предыдущая</a>
            <?php endif; ?>
            <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                <a href="?page=<?php echo $i; ?>" <?php echo $i === $page ? 'style="font-weight: bold;"' : ''; ?>><?php echo $i; ?></a>
            <?php endfor; ?>
            <?php if ($page < $totalPages): ?>
                <a href="?page=<?php echo $page + 1; ?>">Следующая</a>
            <?php endif; ?>
        </div>
    <?php else: ?>
        <p>Записей о посещениях пока нет</p>
    <?php endif; ?>
</section>