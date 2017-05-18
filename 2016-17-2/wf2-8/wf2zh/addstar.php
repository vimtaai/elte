<?php

require_once 'functions.php';

$errors = [];

if ($_POST) {
    if (!$_POST['name']) 
        $errors[] = 'Nem adtál meg nevet!';
    if (!$_POST['type'] || !in_array($_POST['type'], ['n', 'g', 's', 'h'])) 
        $errors[] = 'Helytelen típus!';
    if (!$_POST['x'] || $_POST['x'] < 0 || $_POST['x'] > 500) 
        $errors[] = 'Helytelen x koordináta!';
    if (!$_POST['y'] || $_POST['y'] < 0 || $_POST['y'] > 300) 
        $errors[] = 'Helytelen y koordináta!';

    if (!$errors) {
        $stars = load_from_file('star.json');
        $stars[] = [
            'id' => time(),
            'name' => $_POST['name'],
            'type' => $_POST['type'],
            'x'    => $_POST['x'],
            'y'    => $_POST['y']
        ];
        save_to_file('star.json', $stars);
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php foreach ((array)$errors as $error) : ?>
        <div><?= $error ?></div>
    <?php endforeach; ?>
    <form method="post">
        Név: <input type="text" name="name">
        Típus: <select name="type">
            <option value="n">nap</option>
            <option value="g">galaxis</option>
            <option value="s">szupernova</option>
            <option value="h">hullocsillag</option>
        </select>
        X: <input type="number" name="x">
        Y: <input type="number" name="y">
        <input type="submit">
    </form>
</body>
</html>