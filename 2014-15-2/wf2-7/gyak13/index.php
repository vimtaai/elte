<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Simple todo list</title>
        <script type="text/javascript" src="script.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <h1>Send new message</h1>
        <input type="text" id="newitem">
        <input type="button" value="Send" id="send">
        <ul id="items">
<?php include 'loaditems.php' ?>
        </ul>
    </body>
</html>
