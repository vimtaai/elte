<?php
echo '<pre>';
var_dump($_SERVER);
var_dump($_POST);
echo '</pre>';
if (substr_compare($_SERVER['REMOTE_ADDR'], '157.181.', 0, 8) !== 0) {
    die('Hozzáférés megtagadva');
}
$r = (isset($_POST['r']) ? $_POST['r'] : 0);
?>
<!doctype html>
<meta charset="utf-8">
<title>8. gyak</title>

<form action="" method="post">
    R = <input type="number" name="r">
    <input type="submit" value="Számojj!">
</form>

<output>
<?= 2 * $r * M_PI ?>
</output>