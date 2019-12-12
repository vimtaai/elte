<?php
require_once("_init.php");

unset($_SESSION["user"]);
redirect("login.php");