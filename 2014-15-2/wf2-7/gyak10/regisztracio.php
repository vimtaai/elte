<?php
require_once 'functions.php';
require_once 'user.php';

// Ezáltal tudunk hozzáférni a $_SESSION változóhoz
session_start();

if (isset($_POST['username']) && 
    isset($_POST['password']) &&
    isset($_POST['password_re'])) {
    if ($_POST['password'] == $_POST['password_re']) {
        $users = load_from_file('user');
        //var_dump($users);
        $newUser = new User();
        $newUser->username = $_POST['username'];
        // $newUser->password = sha1($_POST['password']);
        $newUser->password = password_hash($_POST['password'], PASSWORD_DEFAULT);
        $users[] = $newUser;
        save_to_file('user', $users);
    }
}

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Regisztráció</title>
    </head>
    <body>
        <h1>Regisztráció</h1>
        <form method="post" action="regisztracio.php">
            <label for="username">Felhasználónév: </label>
            <br>
            <input type="text" name="username" id="username">
            <br>
            <label for="password">Jelszó: </label>
            <br>
            <input type="password" name="password" id="password">
            <br>
            <label for="password_re">Jelszó még egyszer: </label>
            <br>
            <input type="password" name="password_re" id="password_re">
            <br>
            <input type="submit" value="Regisztráció">
        </form>
    </body>
</html>
