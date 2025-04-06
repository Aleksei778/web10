<?php

require_once 'core/base_active_record.php';

class VisitModel extends BaseActiveRecord {
    protected $tableName = 'visits';

    public function __construct() {
        parent::__construct();
    }

    public static function createVisit($page) {
        $visit = new self();
        $visit->page_url = $page;
        $visit->visitor_ip = $_SERVER['REMOTE_ADDR'];
        $visit->visitor_hostname = $gethostbyaddr($_SERVER['REMOTE_ADDR']);
        $visit->visitor_browser = $_SERVER['HTTP_USER_AGENT'];

        return $visit->save();
    }

    public static function getTotalVisits() {
        $instance = new self();
        $perPage = 5;
        $sql = "SELECT COUNT(*) FROM {$instance->tableName}";
        $stmt = $instance->pdo->prepare($sql);
        $result = $stmt->fetchColumn();

        $totalPages = ceil($result / $perPage);

        return $totalPages;
    }

    public static function getVisitsWithPagination($page, $perPage = 5) {
        $instance = new self();

        $offset = ($page - 1) * $perPage;

        $sql = "SELECT * FROM {$instance->tableName} ORDER BY visit_datetime DESC LIMIT $1 OFFSET $2";
        $stmt = $instance->pdo->prepare($sql);
        $stmt->execute([$perPage, $offset]);
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $posts = [];
        foreach ($results as $result) {
            $visit = new self();

            $visit->id = $result['id'];
            unset($result['id']);
            $visit->attributes = $result;

            $visits[] = $visit;
        }

        return $visit;
    }
}