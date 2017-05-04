<?php
require_once 'functions.php';
allow('POST');

$errors = [];
$input = [];

$users = load_from_file('users.json');

if (not_empty($_POST['username'])) {
    if (!isset($users[$_POST['username']])) {
        $input['username'] = $_POST['username'];
    } else {
        $errors[] = 'Ez a felhasználó már létezik!';
    }    
} else {
    $errors[] = 'Nem adtál meg felhasználónevet!';
}

if (not_empty($_POST['password'])) {
    if (not_empty($_POST['password2']) && 
        $_POST['password'] === $_POST['password2']) {
        $input['password'] = $_POST['password'];
    } else {
        $errors[] = 'A két jelszó nem egyezik meg!';
    }
} else {
    $errors[] = 'Nem adtál meg jelszót!';
}

if (!$errors) {
    $users[$input['username']] = password_hash($input['password'], 
                                               PASSWORD_DEFAULT);
    save_to_file('users.json', $users);
    redirect('login.php');
} else {
    save_to_flash($errors);
    redirect('reg.php');
}




