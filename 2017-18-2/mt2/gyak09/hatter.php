<?php

// ha van megadva szín, akkor azt használom
// ha nincs, akkor meg alapértelmezetten fehér háttér
if (isset($_GET['szin'])) {
    $szin = $_GET['szin'];
} else {
    // alapértelmezett érték
    $szin = 'white';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    body {
        background-color: <?= $szin ?>;
    }
    </style>
</head>
<body>
    <a href="?szin=red">piros</a>
    <a href="?szin=green">zöld</a>
    <a href="?szin=blue">kék</a>
    <form>
        <input type="color" name="szin">
        <input type="submit" value="Küldés">
    </form>
</body>
</html>