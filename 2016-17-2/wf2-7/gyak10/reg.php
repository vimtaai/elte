<?php
require_once 'functions.php';
allow('GET');
$errors = load_from_flash();
require 'header.php';
?>
<form action="adduser.php" method="post">
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
    <div>
        <input type="submit" value="Regisztráció">
    </div>
    <a href="login.php">Bejelentkezés</a>
</form>

<?php if ($errors) : ?>
    <?php foreach ($errors as $error) : ?>
    <div class="alert alert-danger"><?= $error ?></div>
    <?php endforeach;?>
<?php endif ?>