<?php

require_once 'functions.php';
allow('GET');
auth();

$expenses = load_from_file('data.json');
//var_dump($expenses);

$flashData = load_from_flash();
$errors = $flashData['errors'] ?: [];
$messages = $flashData['messages'] ?: [];

require 'header.tpl.php';
?>
<form method="post" action="logout.php">
    Szia, <?= $_SESSION['logged_in'] ?>
    <input type="submit" value="Kijelentkezés">
</form>
<div class="container">
    <div class="col-sm-6 col-sm-offset-3">
        <h1>Májmáni</h1>
        <form method="post" action="addentry.php">
            <div class="form-group">
                <label class="control-label">Leírás</label>
                <input type="text" name="desc" class="form-control">
            </div>
            <div class="form-group">
                <label class="control-label">Bevétel/Kiadás</label>
                <div class="input-group col-sm-4">
                    <input type="text" name="amount" class="form-control">
                    <span class="input-group-addon">HUF</span>
                </div>
            </div>
            <input type="submit" class="btn btn-primary" value="Rögzít">
        </form>

        <br>
        <?php foreach ($errors as $error) : ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endforeach; ?>
        <?php foreach ($messages as $message) : ?>
            <div class="alert alert-info"><?= $message ?></div>
        <?php endforeach; ?>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                <th>#</th>
                <th>Leírás</th>
                <th>Összeg</th>
                <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ((array)$expenses as $key => $row) : ?>
                <tr>
                    <td><?= ($key + 1) ?></td>
                    <td><?= $row['desc'] ?></td>
                    <td class="<?= $row['amount'] < 0 ? 'text-danger' : 'text-success' ?>">
                        <?= $row['amount'] ?> Ft
                    </td>
                    <td>
                        <form method="post" action="delentry.php">
                            <input type="hidden" name="delkey" value="<?= $key ?>">
                            <input type="submit" class="btn btn-xs btn-danger" value="Törlés">
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table> 
    </div>
</div>