<?php
require_once("utils/_init.php");

$auth->logout();
redirect("login.php");