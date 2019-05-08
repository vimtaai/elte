<?php

include "_auth.php";
unset($_SESSION["user"]);
redirect("login.php");