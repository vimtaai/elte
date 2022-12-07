<?php
require_once("utils/init.php");
unset($_SESSION["user"]);
redirect("login.php");