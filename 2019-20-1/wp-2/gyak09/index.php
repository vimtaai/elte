<?php

print($_SERVER["REMOTE_ADDR"]);
print("<br>");
print($_SERVER["REQUEST_URI"]);
print("<br>");
var_dump($_GET); // ! összetett típusok kiírása debuggoláshoz
print("Hello " . $_POST["username"]);

?>
<form action="index.php" method="post">
    <input type="text" name="username">
    <button type="submit">Send</button>
</form>