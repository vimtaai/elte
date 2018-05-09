<?php

include 'includes/auth.php';
session_start();
auth(USER_ONLY);

// létrehozom az adatbázis kapcsolatot
$dbConn = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost', 'wp1c0x', 'wp1c0x');

// ha volt bemenet...
if (count($_POST) > 0) {
    // ha a bemenet üres vagy 0
    if (!$_POST['amount']) {
        // hiba
    } else {
        // beszúrás az adatbázisba
        $q = 'INSERT INTO `7_transactions` (`amount`, `expense`, `user_id`) VALUES (:a, :e, :u)';
        $stmt = $dbConn->prepare($q);
        // $stmt->bindParam(':a', $_POST['amount']);
        // $stmt->bindParam(':e', isset($_POST['isExpense']) ? true : false);
        // $stmt->execute();
        $stmt->execute([
            ':a' => $_POST['amount'],
            ':e' => isset($_POST['isExpense']) ? true : false,
            ':u' => $_SESSION['user']['id']
        ]);
    }
}

// lekérdezzük az adatokat
$stmt = $dbConn->prepare('SELECT * FROM `7_transactions` WHERE `user_id` = :u');
$stmt->execute([
    ':u' => $_SESSION['user']['id']
]);
$transactions = $stmt->fetchAll(PDO::FETCH_ASSOC);

$balance = 0;
foreach ($transactions as $t) {
    $balance += ($t['expense'] ? -1 : 1) * $t['amount'];
}


?>
<?php include 'includes/header.php'; ?>
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
        <th>Művelet</th>
    </tr>
    <?php foreach ($transactions as $t) : ?>
    <tr>
        <td><?= $t['id'] ?></td>
        <td><?= $t['date'] ?></td>
        <td style="color: <?= $t['expense'] == 1 ? 'red' : 'green' ?>">
            <?= $t['expense'] == 1 ? '-' : '' ?><?= $t['amount'] ?>&nbsp;Ft
        </td>
        <td>
            <button data-id="<?= $t['id'] ?>">Törlés</button>
        </td>
    </tr>
    <?php endforeach; ?>
</table>
<script src="script.js"></script>
<?php include 'includes/footer.php'; ?>