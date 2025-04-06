<?php

require_once 'core/base_active_record.php';

class BlogModel extends BaseActiveRecord {
    protected $tableName = 'blog';

    public function __construct() {
        parent::__construct();
    }

    public static function createPost($topic, $content, $created_at, $image = null) {
        $post = new self();
        $post->topic = $topic;
        $post->image = $image;
        $post->content_text = $content;
        $post->created_at = $created_at; // date('Y-m-d H:i:s');

        return $post->save();
    }

    public static function getTotalPosts() {
        $instance = new self();
        $perPage = 5;
        $sql = "SELECT COUNT(*) FROM {$instance->tableName}";
        $stmt = $instance->pdo->prepare($sql);
        $result = $stmt->fetchColumn();

        $totalPages = ceil($result / $perPage);

        return $totalPages;
    }

    public static function getPostsWithPagination($page, $perPage = 5) {
        $instance = new self();

        $offset = ($page - 1) * $perPage;

        $sql = "SELECT * FROM {$instance->tableName} ORDER BY created_at DESC LIMIT $1 OFFSET $2";
        $stmt = $instance->pdo->prepare($sql);
        $stmt->execute([$perPage, $offset]);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $posts = [];
        foreach ($results as $result) {
            $post = new self();

            $post->id = $result['id'];
            unset($result['id']);
            $post->attributes = $result;

            $posts[] = $post;
        }

        return $posts;
    }
};