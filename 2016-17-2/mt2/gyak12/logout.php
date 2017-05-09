<?php

require 'functions.php';
allow('POST');

unset($_SESSION['logged_in']);

redirect('login.php');