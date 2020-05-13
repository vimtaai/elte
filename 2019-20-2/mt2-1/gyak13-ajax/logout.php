<?php
include("utils/_init.php");
$userStorage->logout();
redirect("login.php");