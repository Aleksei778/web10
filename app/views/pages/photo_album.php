<!-- Фотоальбом -->
<section class="photoalbum-section">
    <h2>
        Фотоальбом
    </h2>
    <div class="photo-album" id="photoAlbum">
        <?php foreach ($model['photos'] as $photo): ?>
            <div class="photo_item">
                <img src="<?php echo $model['full_path'] . $photo['filename']; ?>" alt="<?php echo $photo['caption']; ?>" title="<?php echo $photo['caption']; ?>"/>
            </div>
        <?php endforeach; ?>
    </div>
</section>