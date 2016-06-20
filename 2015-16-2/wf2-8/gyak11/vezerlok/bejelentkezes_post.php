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
    
    if (is_empty($input, 'jelszo')) {
        $errors[] = 'Nem adtál jelszót!';
    } else {
        $data['jelszo'] = $input['jelszo'];
    }
    
    return !(bool)$errors;
}

$data = [];
$errors = [];
$messages = [];
$input = $_POST;

function tombben_keres($tomb, $T_fv) {
    foreach ($tomb as $elem) {
        if ($T_fv($elem)) {
            return $elem;
        }
    }
    return FALSE;
}

if (validate($input, $data, $errors)) {
    $fajl = __DIR__ . '/../adatok/felhasznalok.json';
    $felhasznalok = fajlbol_betolt($fajl);
    
    if (($felhasznalo = tombben_keres($felhasznalok, function ($f) use ($data) {
        return $f['email'] == $data['email'] && 
               password_verify($data['jelszo'], $f['jelszo']);
    })) === FALSE) {
        $errors[] = 'A megadott felhasználónév/jelszó helytelen!';
        
        flashbe_ment('data', $data);
        flashbe_ment('errors', $errors);
        
        atiranyit('bejelentkezes');
    } else {
        $_SESSION['bejelentkezve'] = $felhasznalo; 
        $messages[] = 'Bejelentkezés sikeres!';
        flashbe_ment('messages', $messages);
        
        // TODO: Bejelentkezett oldal
        atiranyit('bejelentkezes');
    }
}

flashbe_ment('data', $data);
flashbe_ment('errors', $errors);

atiranyit('bejelentkezes');