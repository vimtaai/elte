<?php

require_once 'functions.php';
allow('POST');

$input = [];
$errors = [];
$messages = [];

$users = load_from_file('users.json');

if (not_empty($_POST, 'username')) {
    if (!isset($users[$_POST['username']])) {
        $input['username'] = $_POST['username'];
    } else {
        $errors[] = 'Van már ilyen felhasználó!';
    }
} else {
    $errors[] = 'Nem adtál meg felhasználónevet!';
}

if (not_empty($_POST, 'password')) {
    if ($_POST['password'] === $_POST['password2']) {
        $input['password'] = $_POST['password'];
    } else {
        $errors[] = 'A két jelszó nem egyezik!';
    }
} else {
    $errors[] = 'Nem adtál meg jelszót!';
}

if (!$errors) {
    $users[$input['username']] = password_hash($input['password'],
                                               PASSWORD_DEFAULT);
    save_to_file('users.json', $users);

    $messages[] = 'Sikeres regisztráció!';
    
    save_to_flash([
        'errors' => $errors,
        'messages' => $messages
    ]);
    redirect('login.php');
}

save_to_flash([
    'errors'   => $errors,
    'messages' => $messages
]);
redirect('reg.php');