<?php

$database = new PDO("sqlite:" . ROOT . "/data/database.sqlite");
$database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

