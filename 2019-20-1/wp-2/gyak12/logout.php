<?php
session_start();

require_once("utils.php");

// ! Kijelentkeztetés
unset($_SESSION["user"]);

redirect("login.php");