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

<form method="post">
    <input type="text" name="todo">
    <input type="submit">
</form>

<ul>
<?php foreach ((array)$todos as $index => $todo) : ?>
    <li>
        <form method="post">
            <input type="hidden" name="delid" value="<?= $index ?>">
            <input type="button" value="×">
        </form>
        <?= $todo ?>
    </li>
<?php endforeach; ?>
</ul>

<?php if ($errors) : ?>
    <ul>
    <?php foreach ($errors as $error) : ?>
        <li><?= $error ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>