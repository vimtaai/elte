<?php

require_once 'functions.php';
allow('POST');

unset($_SESSION['logged_in']);

redirect('login.php');