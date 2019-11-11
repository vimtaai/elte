<?php

// Ha van már bemenet
if (count($_POST) > 0) {
    // "beolvasás"
    $number1 = $_POST["number1"];
    $number2 = $_POST["number2"];
    $operator = $_POST["operator"];

    // feldolgozás
    if ($operator === "+") {
        $result = $number1 + $number2;
    } else if ($operator === "-") {
        $result = $number1 - $number2;
    }
}

?>
<!-- 1. lépés: HTML űrlap -->
<!-- a form.php-nak küldöm get/post módszerrel -->
<form action="form.php" method="post">
    <input type="number" name="number1">
    <select name="operator">
        <option>+</option>
        <option>-</option>
    <select>
    <input type="number" name="number2">
    <button type="submit">Do MATH!</button>
    Result: <?= $result ?? "No result yet." ?>
</form>