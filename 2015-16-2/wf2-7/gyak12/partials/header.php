<?php if (!defined('TOKEN')) die ('Ejnyebejnye!'); ?>
<!DOCTYPE html>
<meta charset="UTF-8">
<title>TODO App</title>
<link rel="stylesheet" href="http://bootswatch.com/united/bootstrap.min.css">
<style>body{padding-top: 60px;}</style>
<script src="scripts/script.js"></script>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">TODO App</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <?php if (isset($_SESSION['logged_in'])) : ?>
                <li><a href="#"><?= $_SESSION['logged_in']['name'] ?></a></li>
                <li><a href="?logout">Kijelentkezés</a></li>
            <?php else : ?>
                <li><a href="?login">Bejelentkezés</a></li>
            <?php endif; ?>
        </ul>
    </div>
</nav>