<?php

// létrehozom az adatbázis kapcsolatot
$dbConn = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost',
                  'wp1c0x', 'wp1c0x');

// ha volt bemenet...
if (count($_POST) > 0) {
    // ha a bemenet üres vagy 0
    if (!$_POST['amount']) {
        // hiba
    } else {
        // beszúrás az adatbázisba
        $q = 'INSERT INTO `transactions` (`amount`, `expense`) VALUES (:a, :e)';
        $stmt = $dbConn->prepare($q);
        // $stmt->bindParam(':a', $_POST['amount']);
        // $stmt->bindParam(':e', isset($_POST['isExpense']) ? true : false);
        // $stmt->execute();
        $stmt->execute([
            ':a' => $_POST['amount'],
            ':e' => isset($_POST['isExpense']) ? true : false
        ]);
    }
}

// lekérdezzük az adatokat
$stmt = $dbConn->prepare('SELECT * FROM `transactions`');
$stmt->execute();
$transactions = $stmt->fetchAll(PDO::FETCH_ASSOC);

$balance = 0;
foreach ($transactions as $t) {
    $balance += ($t['expense'] ? -1 : 1) * $t['amount'];
}

//var_dump($transactions);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Családi pénznyilvántartás</title>
</head>
<body>
    <form method="post">
        Összeg: 
        <input type="number" name="amount">
        <br>
        Kiadás: 
        <input type="checkbox" name="isExpense">
        <br>
        <input type="submit" value="Mentés">
    </form>
    <table>
        <caption style="color: <?= $t['expense'] == 1 ? 'red' : 'green' ?>">
            <?= $balance ?> Ft
        </caption>
        <tr>
            <th>Tranzakció azon.</th>
            <th>Dátum</th>
            <th>Összeg</th>
        </tr>
        <?php foreach ($transactions as $t) : ?>
        <tr>
            <td><?= $t['id'] ?></td>
            <td><?= $t['date'] ?></td>
            <td style="color: <?= $t['expense'] == 1 ? 'red' : 'green' ?>">
                <?= $t['expense'] == 1 ? '-' : '' ?><?= $t['amount'] ?>&nbsp;Ft
            </td>
        </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>