<?php

// csatlakozás az adatbázishoz
// kapcsolódási szöveg: típus, host, adatbázis neve           felhasználó jelszó
$kapcsolat = new PDO('mysql:host=localhost;dbname=wf2_wp1c0x;charset=utf8', 'wp1c0x', 'wp1c0x');