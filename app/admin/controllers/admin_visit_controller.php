<?php

require_once 'models/visit_model.php';

class AdminVisitController extends Controller {
    public function actionVisitsStat() {
        $perPage = 5;
        $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
        if ($page < 1) $page = 1;

        $totalPages = VisitModel::getTotalVisits();
        $visits = VisitModel::getVisitsWithPagination($page, $perPage);

        $model = [
            'page' => $page,
            'totalPages' => $totalPages,
            'visits' => $visits
        ];

        $this->view->render('pages/visits_stat.php', 'Статистика посещений', $model);
    }
}