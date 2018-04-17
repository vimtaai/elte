<?php

//if (substr($_SERVER['REMOTE_ADDR'], 0, 7) != '157.181') 
if (!preg_match('/^157\.181/', $_SERVER['REMOTE_ADDR'])) {
    //exit(1);
    header('HTTP/1.1 403 Forbidden');
    die('Hozzáférés megtagadva!');
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Hello világ!</h1>
</body>
</html>