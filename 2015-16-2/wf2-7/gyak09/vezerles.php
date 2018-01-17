<?php

// echo '<pre>';
// var_dump($_POST);
// echo '</pre>';

// ÜZLETI LOGIKA
function arat_szamol($input) {
    $ar = PIZZAK[$input['tipus']]['ar'] * $input['darab'];
    // if ($_POST['teszta'] == 'vekony') {
    //     $ar += VEKONY_AR * $_POST['darab'];
    // }
    $ar += (($input['teszta'] == 'vekony') ? VEKONY_AR * $input['darab'] : 0);
    $ar += (($ar < KISZALLITAS_MIN) ? KISZALLITAS_AR : 0);
    return $ar;
}

function is_empty($input, $key) {
    return (!isset($input[$key])) || (trim($input[$key]) === '');
}

function validate($input, &$data, &$errors) {
    $data   = [];
    $errors = [];
    
    if (is_empty($input, 'tipus')) {
        $errors[] = 'Nem adtál meg pizza típust!';
    } elseif (!isset(PIZZAK[$input['tipus']])) {
        $errors[] = 'Nincs sajnos ilyen pizzánk!';
    } else {
        $data['tipus'] = (int)$input['tipus'];
    }
    
    if (is_empty($input, 'darab')) {
        $errors[] = 'Nem adtál meg darabszámot!';
    } elseif (!is_numeric($input['darab'])) {
        $errors[] = 'A darabszám nem szám!';
    } elseif (0 >= (int)$input['darab'] || (int)$input['darab'] > 1000) {
        $errors[] = 'A darabszám 1 és 1000 között kell hogy legyen';
    } else {
        $data['darab'] = (int)$input['darab'];
    }
    
    if (is_empty($input, 'teszta')) {
        $errors[] = 'Nem adtál meg tésztafajtát!';
    } elseif (!in_array($input['teszta'], ['vekony', 'vastag'])) {
        $errors[] = 'Ilyen tésztánk sajnos nincs!';
    } else {
        $data['teszta'] = $input['teszta'];
    }
    
    return !(bool)$errors;
}

// ADATOK BEOLVASÁSA
$input  = $_POST;

// VEZÉRLÉS (TÉNYLEGES SZÁMOLÁS / MŰVELETVÉGZÉS)
$osszeg = NULL;
$data   = [];
$errors = [];

if ($input) {
    if (validate($input, $data, $errors)) {
        $osszeg = arat_szamol($data);
    } else {
        // Ha hiba volt
    }
}