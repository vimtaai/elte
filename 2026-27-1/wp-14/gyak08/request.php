<?php

// $username = isset($_GET["name"]) ? $_GET["name"] : "semmi";
$username = $_POST["username"] ?? "semmi";

var_dump($username);

?>
<form action="request.php?foo=bar" method="post">
  <input type="text" name="username">
  <button type="submit">Send</button>
</form>