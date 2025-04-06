<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo $title ?> </title>

    <link rel="shortcut icon" href="/web/web9/public/assets/imgs/icons_for_menu2/aboutMe2.svg" type="image/x-icon" />
    <link rel="stylesheet" href="/web/web9/public/assets/css/styles.css">
    <link rel="stylesheet" href="/web/web9/public/assets/css/about_me.css">
    <link rel="stylesheet" href="/web/web9/public/assets/css/main_page.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="/web/web9/public/assets/scripts_jQuery/date_to_menu_jQuery.js"></script>
    <script src="/web/web9/public/assets/scripts_jQuery/history_jQuery.js"></script>
    <script src="/web/web9/public/assets/scripts_jQuery/menu_jQuery.js"></script>

    <link rel="stylesheet" href="/web/public/assets/css/contact.css">
    <!-- <script src="/web/public/assets/scripts_jQuery/popover_jQuery.js"></script> -->
    <!-- <script type="module" src="/web/public/assets/scripts_jQuery/sureWindow_jQuery.js"></script> -->
    <script src="/web/web9/public/assets/scripts_jQuery/calendar_jQuery.js"></script>
    <!-- <script src="/web/public/assets/scripts_jQuery/contacts_jQuery.js"></script> -->

    <link rel="stylesheet" href="/web/web9/public/assets/css/discipline_test.css">
    <!-- <script src="/web/public/assets/scripts_jQuery/disciplineTest_jQuery.js"></script> -->

    <link rel="stylesheet" href="/web/web9/public/assets/css/history.css">

    <link rel="stylesheet" href="/web/web9/public/assets/css/my_hobbies.css">


    <link rel="stylesheet" href="/web/web9/public/assets/css/photo_album.css">


    <link rel="stylesheet" href="/web/web9/public/assets/css/study.css">

</head>
<body>
    <header class="dec-lines" id="main_header">
        <!-- Меню, содержащее гиперссылки на все страницы сайта -->
        <nav>
            <div class="container">
                <ul id="main_menu">
                    <li><a href="/web/web9/main/index"></a></li>
                    <li><a href="/web/web9/main/actionAboutMe"></a></li>
                    <li><a href="/web/web9/main/actionMyHobbies"></a></li>
                    <li><a href="/web/web9/main/actionStudy"></a></li>
                    <li><a href="/web/web9/main/actionPhotoAlbum"></a></li>
                    <li><a href="/web/web9/main/actionContact"></a></li>
                    <li><a href="/web/web9/main/actionDisciplineTest"></a></li>
                    <li><a href="/web/web9/main/actionHistory"></a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main class="main-content">
        <?php
            $content_view_path = __DIR__ . '/' . $content_view;
            include $content_view_path;
        ?>
    </main>

    <footer class="contact-info">
        <h2 class="footer-title">Contact Me</h2>
        <div class="footer-content">
            <p class="contact-text">My email is <span class="highlight">aleksejparhomenko14192@gmail.com</span></p>
            <p class="copy"><span class="highlight">&copy</span> 2024 My Personal Website</p>
        </div>
    </footer>
</body>
</html>