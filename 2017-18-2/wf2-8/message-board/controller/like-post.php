<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(USER);

if (count($_POST) > 0) {

}