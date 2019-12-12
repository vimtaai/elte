<?php
require_once("utils/_init.php");

unset($_SESSION["user"]);
redirect("login.php");