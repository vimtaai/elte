<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

require_once __DIR__ . '/../common/validation.php';
require_once __DIR__ . '/../common/file.php';

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    if (is_empty($input, 'nev')) {
        $errors[] = 'Nem adtál meg nevet!';
    } else {
        $data['nev'] = $input['nev'];
    }
    
    if (is_empty($input, 'email')) {
        $errors[] = 'Nem adtál email címet!';
    } else {
        $data['email'] = $input['email'];
    }
    
    if (is_empty($input, 'jelszo')) {
        $errors[] = 'Nem adtál jelszót!';
    } elseif (is_empty($input, 'jelszo_re')) {
        $errors[] = 'Nem adtál jelszót!';
    } elseif ($input['jelszo'] !== $input['jelszo_re']) {
        $errors[] = 'A két jelszó nem egyezik meg!';
    } else {
        $data['jelszo'] = $input['jelszo'];
    }
    
    if (is_empty($input, 'szin')) {
        $errors[] = 'Nem adtad meg a kedvenc színedet!';
    } else {
        $data['szin'] = $input['szin'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    // Új felhasználó
    $user = [
        'nev' => $data['nev'],
        'email' => $data['email'],
        'jelszo' => password_hash($data['jelszo'], PASSWORD_DEFAULT),
        'szin' => $data['szin']
    ];
    $file = __DIR__ . '/../data/users.json';
    $users = fajlbol_betolt($file);
    $users[] = $user;
    fajlba_ment($file, $users);
}

header('Location: ?login');