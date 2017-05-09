<?php

require 'functions.php';
allow('GET');
auth();

$todos = load_from_file('todo.json');
$errors = load_from_flash();

?>
<!doctype html>

<meta charset="utf-8">
<title>ToDo</title>
<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">

<div>
    Helló, <?= $_SESSION['logged_in'] ?>
    <form action="logout.php" method="post">
        <input type="submit" value="Kijelentkezés">
    </form>
</div>

<div class="container col-xs-4 col-xs-offset-4">
    <form method="post" action="addtodo.php" class="form vertical">
        <div class="form-group">
            <label class="control-label">TODO felvétele</label>
            <div class="input-group">
                <input type="text" class="form-control" name="todo">
                <span class="input-group-btn">
                <button class="btn btn-default" type="submit">Felvétel</button>
                </span>
            </div>
        </div>
    </form>

    <?php foreach ((array)$todos as $index => $todo) : ?>
        <div class="well well-sm">
            <form method="post" action="deltodo.php">
                <input type="hidden" name="delid" value="<?= $index ?>">
                <input type="submit" value="×" class="btn btn-xs btn-danger pull-right">
                <?= $todo ?>
            </form>
        </div>
    <?php endforeach; ?>

    <?php if ($errors) : ?>
        <?php foreach ($errors as $error) : ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endforeach; ?>
    <?php endif; ?>
</div>