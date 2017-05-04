<?php

require 'functions.php';
allow('GET');
$errors = load_from_flash();

?>
<!doctype html>

<meta charset="utf-8">
<title>ToDo</title>
<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">

<div class="container col-xs-4 col-xs-offset-4">
    <form method="post" action="adduser.php" class="form vertical">
        <div class="form-group">
            <label class="control-label">Felhasználónév</label>
            <div class="input-group">
                <input type="text" class="form-control" name="username">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">Jelszó</label>
            <div class="input-group">
                <input type="password" class="form-control" name="password">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label">Jelszó még1x</label>
            <div class="input-group">
                <input type="password" class="form-control" name="password2">
                <span class="input-group-btn">
                    <button class="btn btn-default" type="submit">Felvétel</button>
                </span>
            </div>
        </div>
    </form>

    <?php if ($errors) : ?>
        <?php foreach ($errors as $error) : ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>