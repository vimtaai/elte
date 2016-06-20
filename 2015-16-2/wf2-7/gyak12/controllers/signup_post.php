<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    if (is_empty($input, 'name')) {
        $errors[] = 'Nem adtál meg nevet!';
    } else {
        $data['name'] = $input['name'];
    }
    
    if (is_empty($input, 'email')) {
        $errors[] = 'Nem adtál email címet!';
    } elseif (!preg_match('#[a-zA-Z0-9_\.]+\@[a-zA-Z0-9_\.]+\.[a-z]{2,}#', $input['email'])) {
        $errors[] = 'Az email cím formátuma nem megfelelő!';
    } else {
        $data['email'] = $input['email'];
    }
    
    if (is_empty($input, 'password')) {
        $errors[] = 'Nem adtál jelszót!';
    } elseif (is_empty($input, 'password_re')) {
        $errors[] = 'Nem adtál jelszót!';
    } elseif ($input['password'] !== $input['password_re']) {
        $errors[] = 'A két jelszó nem egyezik meg!';
    } else {
        $data['password'] = $input['password'];
    }
    
    if (is_empty($input, 'color')) {
        $errors[] = 'Nem adtad meg a kedvenc színedet!';
    } else {
        $data['color'] = $input['color'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    // Új felhasználó
    $user = [
        'name' => $data['name'],
        'email' => $data['email'],
        'password' => password_hash($data['password'], PASSWORD_DEFAULT),
        'color' => $data['color']
    ];
    $file = __DIR__ . '/../data/users.json';
    $users = file_load($file);
    $users[] = $user;
    file_save($file, $users);
    // Sikeres
    $messages[] = "Sikeres regisztráció";
    flash_set('messages', $messages);
    redirect('login');
} else {
    // Sikertelen
    
    flash_set('errors', $errors);
    flash_set('input', $input);
    redirect('signup');
}