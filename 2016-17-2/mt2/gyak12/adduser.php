<?php

require 'functions.php';
allow('POST');

$errors = [];
$input = [];

$users = load_from_file('users.json');

if (!empty($_POST['username'])) {
    if (strpbrk($_POST['username'], ' ') === FALSE) {
        if (!isset($users[$_POST['username']])) {
            $input['username'] = $_POST['username'];
        } else {
            $errors[] = 'Az adott felhasználónév foglalt!';
        }
    } else {
        $errors[] = 'A felhasználónév nem tartalmazhat szóközt!';
    }
} else {
    $errors[] = 'Nem adtál meg felhasználónevet!';
}

if (!empty($_POST['password'])) {
    if ($_POST['password'] === $_POST['password2']) {
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