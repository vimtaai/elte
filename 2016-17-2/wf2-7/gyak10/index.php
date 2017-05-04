<?php
//define('DATAFILE', 'data.json');
const DATAFILE = 'data.json';
require_once 'functions.php';
allow('GET');
auth();

$expenses = load_from_file(DATAFILE);
$errors = load_from_flash();

require 'header.php';
?>
<div>
    Bejelentkezve: <?= $_SESSION['logged_in'] ?>
    <form method="post" action="logout.php">
        <input type="submit" value="Kijelentkezés">
    </form>
</div>
<div class="container">
    <form method="post" action="addentry.php" class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-2" for="inputDefault">Bevétel/Kiadás</label>
            <div class="col-sm-6">
                <input type="text" name="amount" class="form-control" id="inputDefault">
            </div>
            <div class="col-sm-2 control-label">HUF</div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="inputDefault">Leírás</label>
            <div class="col-sm-6">
                <input type="text" name="desc" class="form-control" id="inputDefault">
            </div>
            <div class="col-sm-2">
                <input class="btn btn-primary" type="submit" value="Rögzít">
            </div>
        </div>
    </form>

    <?php if ($errors) : ?>
      <?php foreach ($errors as $error) : ?>
        <div class="alert alert-danger"><?= $error ?></div>
      <?php endforeach;?>
    <?php endif ?>

    <table class="table table-striped table-hover ">
        <thead>
            <tr>
            <th>#</th>
            <th>Leírás</th>
            <th>Összeg</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ((array)$expenses as $key => $row) : ?>
            <tr>
                <td><?= $key ?></td>
                <td><?= $row['desc'] ?></td>
                <td><?= $row['amount'] ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table> 
</div>