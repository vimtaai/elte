<?php
require_once("utils/_init.php");

// ! Kijelentkeztetés
unset($_SESSION["user"]);

redirect("login.php");