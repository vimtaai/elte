<?php
require_once 'functions.php';
allow('POST');

$errors = [];
$input = [];

$users = load_from_file('users.json');

if (not_empty($_POST['username'])) {
    $input['username'] = $_POST['username'];
} else {
    $errors[] = 'Nem adtál meg felhasználónevet!';
}

if (not_empty($_POST['password'])) {
    $input['password'] = $_POST['password'];
} else {
    $errors[] = 'Nem adtál meg jelszót!';
}

if (!$errors) {
    // Autentikáció
    if (isset($users[$input['username']]) &&
        password_verify($input['password'], $users[$input['username']])) {
        $_SESSION['logged_in'] = $input['username'];
        redirect('index.php');
    } else {
        $errors[] = 'Hibás felhasználónév vagy jelszó!';
    }
}

save_to_flash($errors);
redirect('login.php');