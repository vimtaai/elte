<?php

include 'includes/auth.php';
session_start();
auth(USER_ONLY);

unset($_SESSION['user']);
header('Location: login.php');
