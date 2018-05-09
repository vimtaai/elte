<?php

include 'includes/auth.php';
session_start();
auth(GUEST_ONLY);

$dbConn = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost', 'wp1c0x', 'wp1c0x');

$errors = [];
// Ha érkezett adat
if (count($_POST) > 0) {
    if ($_POST['username'] == '') {
        // hiba
        $errors[] = 'A felhasználónév nem lehet üres!';
    } else {
        // lekérdezzük, hogy van-e ilyen felhasználó
        $q = 'SELECT * FROM `7_users` WHERE `username` = :u';
        $stmt = $dbConn->prepare($q);
        $stmt->execute([
            ':u' => $_POST['username']
        ]);

        if ($stmt->rowCount() !== 0) {
            // hiba
            $errors[] = 'Az adott felhasználónév foglalt!';
        }
    }
    if ($_POST['password'] == '') {
        // hiba
        $errors[] = 'A jelszó nem lehet üres!';
    } else if ($_POST['password-re'] !== $_POST['password']) {
        // hiba
        $errors[] = 'A megadott két jelszó nem egyezik meg!';
    }

    // ha nem volt hiba, akkor beszúrás az adatbázisba
    if (count($errors) === 0) {
        $q = 'INSERT INTO `7_users` (`username`, `password`) ' .
             'VALUES (:u, :p)';
        $stmt = $dbConn->prepare($q);
        $stmt->execute([
            ':u' => $_POST['username'],
            ':p' => password_hash($_POST['password'], 
                                  PASSWORD_DEFAULT)
        ]);
        header('Location: login.php');
        exit;
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
    Jelszó mégegyszer: <br>
    <input type="password" name="password-re">
    <br>
    <input type="submit" value="Regisztráció">
    <br>
    <a href="login.php">Bejelentkezés</a>
    <ul>
        <?php foreach ($errors as $error) : ?>
            <li><?= $error ?></li>
        <?php endforeach; ?>
    </ul>
</form>
<?php include 'includes/footer.php'; ?>