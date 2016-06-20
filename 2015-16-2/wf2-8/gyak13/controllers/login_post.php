<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');
    
function validate($input, &$data, &$errors) {
    $data = [];
    $errors = [];
    
    if (is_empty($input, 'email')) {
        $errors[] = 'Nem adtál email címet!';
    } elseif(!preg_match('#^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$#', $input['email'])) {
        $errors[] = 'Az e-mail cím formátuma nem megfelelő!';
    } else {
        $data['email'] = $input['email'];
    }
    
    if (is_empty($input, 'password')) {
        $errors[] = 'Nem adtál jelszót!';
    } else {
        $data['password'] = $input['password'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$messages = [];
$input = $_POST;

function array_lookup($tomb, $T_fv) {
    foreach ($tomb as $elem) {
        if ($T_fv($elem)) {
            return $elem;
        }
    }
    return FALSE;
}

if (validate($input, $data, $errors)) {
    $file = __DIR__ . '/../data/users.json';
    $users = file_load($file);
    
    if (($user = array_lookup($users, function ($f) use ($data) {
        return $f['email'] == $data['email'] && 
               password_verify($data['password'], $f['password']);
    })) === FALSE) {
        $errors[] = 'A megadott felhasználónév/jelszó helytelen!';
        
        flash_save('data', $data);
        flash_save('errors', $errors);
        
        redirect('login');
    } else {
        $_SESSION['logged_in'] = $user; 
        $messages[] = 'Bejelentkezés sikeres!';
        flash_save('messages', $messages);

        redirect('app');
    }
} else {
    flash_save('data', $data);
    flash_save('errors', $errors);

    redirect('login');
}