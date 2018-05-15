<?php 

session_start();

// oldal levédése
if (!isset($_SESSION['felhasznalo'])) {
    header('HTTP/1.1 403');
    exit;
}

include 'seged/adatbazis.php';

$adatbazis = kapcsolodas('mysql:host=localhost;dbname=wf2_wp1c0x', 'wp1c0x', 'wp1c0x');

if (count($_POST) > 0) {
    if ($_POST['kiadas'] == 'true' && $_POST['bevetel'] == 'true') {
        $where = '1 = 1';
    } else {
        if ($_POST['kiadas'] == 'true') {
            $where = '`osszeg` < 0';
        } else if ($_POST['bevetel'] == 'true') {
            $where = '`osszeg` > 0';
        } else {
            $where = '1 = 0';
        }
    }
    $sql = 'SELECT * FROM `tranzakciok` WHERE ' . $where;
    $tranzakciok = lekerdezes($adatbazis, $sql);
    echo json_encode($tranzakciok);
}