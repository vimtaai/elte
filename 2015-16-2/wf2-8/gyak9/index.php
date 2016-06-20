<?php

include 'adatok.php'; 

// echo '<pre>';
// var_dump($_GET);
// 
// echo $_GET['tipus'];
// echo '</pre>';

function is_empty($input, $key) {
  return !(isset($input[$key]) && 
           trim($input[$key]) !== '');
}

function validate($input, &$data, &$errors) {
    // Eredmény nullázása
    $data = [];
    $errors = [];
    if (is_empty($input, 'tipus')) {
        $errors[] = 'Nem választottál pizza típust!';
    } elseif (!isset(PIZZAK[$input['tipus']])) {
        $errors[] = 'Ilyen pizzánk sajnos nincs!';
    } else {
        $data['tipus'] = $input['tipus'];
    }
    
    if (is_empty($input, 'darab')) {
        $errors[] = 'Nem adtad meg, hogy hány db-ot kérsz!';
    } elseif (!is_numeric($input['darab'])) {
        $errors[] = 'Nem számot adtál meg darabszámnak!';
    } else {
        $data['darab'] = (int)$input['darab'];
    }
    
    if (is_empty($input, 'teszta')) {
        $errors[] = 'Nem adtad meg, hogy milyen tésztával kéred!';
    } elseif (!in_array($input['teszta'], ['vastag', 'vekony'])) {
        $errors[] = 'Sajnos ilyen tésztánk nincs!';
    } else {
        $data['teszta'] = $input['teszta'];
    }
    
    return !(bool)$errors;
}

$input  = $_POST;
$data   = [];
$errors = [];

if ($input && validate($input, $data, $errors)) {
    $fizet  = PIZZAK[$data['tipus']];
    $fizet *= $data['darab'];
    $fizet += $data['teszta'] == 'vekony' ? VEKONYTESZTA : 0;
    if ($fizet < 1500) {
        $fizet += KISZALLITAS;
    }
}

include 'sablon.php';