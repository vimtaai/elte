<?php
include_once("lib/_init.php");

$userStorage->logout();

redirect("login.php");