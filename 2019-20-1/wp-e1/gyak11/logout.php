<?php

session_start();
require_once("utils.php");

unset($_SESSION["user"]);
redirect("login.php");