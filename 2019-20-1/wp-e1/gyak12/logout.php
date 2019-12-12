<?php
require_once("_init.php");

unset($_SESSION["user"]);
unset($_SESSION["user_id"]);
redirect("login.php");

?>