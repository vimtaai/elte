<?php

function save_to_file($filename, $data) {
    $jsonData = json_encode($data);
    file_put_contents($filename, $jsonData);
}

function load_from_file($filename) {
    $jsonData = file_get_contents($filename);
    return json_decode($jsonData, true);
}

$input = [];
$errors = [];
// Beolvassuk az adatokat a fájlból
$todos = load_from_file('todo.json');

// Ha volt elküldött adat
if ($_POST) {
    // Input validálás (ha van $_POST['todo'] és nem üres)
    if (isset($_POST['todo']) && strlen($_POST['todo']) > 0) {
        $input['todo'] = $_POST['todo'];
    } else {
        $errors[] = 'Nem adtál meg semmit!';
    }

    // Ha nem volt hiba
    if (!$errors) {
        // ... akkor hozzáfűzzük az új elemet
        $todos[] = $input['todo'];
        // ... és kimentjük az egészet egy fájlba
        save_to_file('todo.json', $todos);
    }
}

?>
<!doctype html>

<meta charset="utf-8">
<title>ToDo</title>
<link rel="stylesheet" href="http://bootswatch.com/flatly/bootstrap.min.css">

<div class="container col-xs-4 col-xs-offset-4">
    <form method="post" class="form vertical">
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
            <form method="post form-inline">
                <input type="hidden" name="delid" value="<?= $index ?>">
                <input type="button" value="×" class="btn btn-xs btn-danger pull-right">
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