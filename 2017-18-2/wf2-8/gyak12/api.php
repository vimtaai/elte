<?php

require_once 'database.php';

define('X', 20);
define('Y', 20);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Visszaadjuk az egész táblázatot
    $table = [];
    for ($i = 0; $i < X; $i++) {
        $table[$i] = [];
        for ($j = 0; $j < Y; $j++) {
            $query = 'SELECT `selected` FROM `8_table` WHERE `x` = :x AND `y` = :y';
            $isSelected = (bool)Database::selectValue($query, [
                ':x' => $i,
                ':y' => $j
            ]);
            $table[$i][$j] = $isSelected;
        }
    }
    echo json_encode($table);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Módosítunk egy cellát
    if (!isset($_POST['x']) || !isset($_POST['y'])) {
        header('HTTP/1.1 400');
        exit;
    }

    $query = 'SELECT `selected` FROM `8_table` WHERE `x` = :x AND `y` = :y';
    $isSelected = Database::selectValue($query, [
        ':x' => $_POST['x'],
        ':y' => $_POST['y']
    ]);

    var_dump($isSelected);

    // Ha nem szerepelt még az adatbázisban
    if ($isSelected === FALSE) {
        $query = 'INSERT INTO `8_table` (`x`, `y`, `selected`) VALUES (:x, :y, :s)';
        Database::execute($query, [
            ':x' => $_POST['x'],
            ':y' => $_POST['y'],
            ':s' => true
        ]);
    } else {
        $query = 'UPDATE `8_table` SET `selected` = :s WHERE `x` = :x AND `y` = :y';
        Database::execute($query, [
            ':x' => $_POST['x'],
            ':y' => $_POST['y'],
            ':s' => !(bool)$isSelected
        ]); 
    }
}