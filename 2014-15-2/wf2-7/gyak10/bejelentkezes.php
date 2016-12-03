<?php
require_once 'functions.php';
require_once 'user.php';

// Ezáltal tudunk hozzáférni a $_SESSION változóhoz
session_start();

// Ha már be vagyunk jelentkezve
if (isset($_SESSION['user'])) {
    //$currentUser = unserialize($_SESSION['user']);
    //var_dump($currentUser);
    header('Location: index.php');
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    $users = load_from_file('user');
    foreach((array)$users as $user) {
        if ($user->username == $_POST['username'] && 
            password_verify($_POST['password'], $user->password)) {
                $_SESSION['user'] = serialize($user);
                break;
        }
    }
}


?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Bejelentkezés</title>
    </head>
    <body>
        <h1>Bejelentkezés</h1>
        <form method="post" action="bejelentkezes.php">
            <label for="username">Felhasználónév: </label>
            <br>
            <input type="text" name="username" id="username">
            <br>
            <label for="password">Jelszó: </label>
            <br>
            <input type="password" name="password" id="password">
            <br>
            <input type="submit" value="Bejelentkezés">
        </form>
    </body>
</html>
