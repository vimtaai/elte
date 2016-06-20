<?php

if (!defined('TOKEN')) 
    die('A fájl közvetlenül nem elérhető!');

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
    } elseif(!preg_match('#^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$.#', $input['email'])) {
        $errors[] = 'Az e-mail cím formátuma nem megfelelő!';
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
$messages = [];
$input = $_POST;

if (validate($input, $data, $errors)) {
    // Adatok mentése
    $fajl = __DIR__ . '/../adatok/felhasznalok.json';
    $felhasznalok = fajlbol_betolt($fajl);
    $felhasznalok[] = [
        'nev' => $data['nev'],
        'email' => $data['email'],
        'jelszo' => password_hash($data['jelszo'], PASSWORD_DEFAULT),
        'szin' => $data['szin']
    ];
    fajlba_ment($fajl, $felhasznalok);
    $messages[] = 'Regisztráció sikeres!';
}

flashbe_ment('data', $data);
flashbe_ment('errors', $errors);
flashbe_ment('messages', $messages);

atiranyit('regisztral');