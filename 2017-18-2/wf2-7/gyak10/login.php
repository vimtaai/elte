<?php

session_start();
//var_dump($_SESSION);
$dbConn = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost', 'wp1c0x', 'wp1c0x');

$errors = [];
if (count($_POST) > 0) {
    // hibaellenőrzés a bemenetre

    // megkeresem a felhasználót
    $q = 'SELECT * FROM `8-users` WHERE `username` = :u';
    $stmt = $dbConn->prepare($q);
    $stmt->execute([
        ':u' => $_POST['username']
    ]);

    // ellenőrzöm a jelszót
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if (count($result) === 0 || !password_verify($_POST['password'], 
                                                 $result[0]['password'])) {
        $errors[] = 'Hibás felhasználónév jelszó';
    } else {
        // bejelentkeztetés
        $_SESSION['user'] = $result[0];
    }
}

?>
<?php include 'includes/header.php'; ?>
<form method="post">
    Felhasználónév: <br>
    <input type="text" name="username">
    <br>
    Jelszó: <br>
    <input type="password" name="password">
    <br>
    <input type="submit" value="Bejelentkezés">
    <br>
    <a href="signup.php">Regisztráció</a>
    <ul>
        <?php foreach ($errors as $error) : ?>
            <li><?= $error ?></li>
        <?php endforeach; ?>
    </ul>
</form>
<?php include 'includes/footer.php'; ?>