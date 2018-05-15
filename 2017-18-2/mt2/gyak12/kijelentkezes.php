<?php

session_start();

unset($_SESSION['felhasznalo']);

header('Location: bejelentkezes.php');