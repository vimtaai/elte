<?php if (!defined('TOKEN')) die('A fájl közvetlenül nem elérhető!') ?>
<!DOCTYPE html>
<meta charset="UTF-8">
<title>ToDo App</title>
<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">
<script src="scripts/app.js"></script>
<style>body{padding-top: 60px;}</style>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">ToDo app</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li>
                <?php if (isset($_SESSION['logged_in'])) : ?>
                <a href="?logout">Kijelentkezés</a>
                <?php else : ?>
                <a href="?login">Bejelentkezés</a>
                <?php endif; ?>
            </li>
        </ul>
    </div>
</nav>
