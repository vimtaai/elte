<?php

require_once 'functions.php';
allow('GET');

$flashData = load_from_flash();
$errors = $flashData['errors'] ?: [];
$messages = $flashData['messages'] ?: [];

require 'header.tpl.php';
?>
<form method="post" action="adduser.php">
    <div>
        <label for="username">Felhasználónév</label>
        <input type="text" name="username" id="username">
    </div>
    <div>
        <label for="password">Jelszó</label>
        <input type="password" name="password" id="password">
    </div>
    <div>
        <label for="password2">Jelszó még1x</label>
        <input type="password" name="password2" id="password2">
    </div>
    <div><input type="submit" value="Regisztráció"></div>
    <a href="login.php">Bejelentkezés</a>
</form>

<?php foreach ($errors as $error) : ?>
    <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>
<?php foreach ($messages as $message) : ?>
    <div class="alert alert-info"><?= $message ?></div>
<?php endforeach; ?>

