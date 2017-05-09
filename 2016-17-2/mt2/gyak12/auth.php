<?php

require 'functions.php';
allow('POST');

$errors = [];
$input = [];

$users = load_from_file('users.json');

if (!empty($_POST['username'])) {
    $input['username'] = $_POST['username'];
} else {
    $errors[] = 'Nem adtál meg felhasználónevet!';
}

if (!empty($_POST['password'])) {
    $input['password'] = $_POST['password'];
} else {
    $errors[] = 'Nem adtál meg jelszót!';
}

if (!$errors) {
    if (isset($users[$input['username']]) && 
        password_verify($input['password'], $users[$input['username']])) {
        // Ha minden OK
        $_SESSION['logged_in'] = $input['username'];   
        redirect('index.php'); 
    } else {
        $errors[] = 'Hibás felhasználónév vagy jelszó!';
    }
}

if ($errors) {
    save_to_flash($errors);
    redirect('login.php');
}