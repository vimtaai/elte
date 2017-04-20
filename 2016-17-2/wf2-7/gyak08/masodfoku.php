<?php

$errors = [];
if ($_POST) {
    $a = $_POST['a'];
    $b = $_POST['b'];
    $c = $_POST['c'];

    // Diszkrimináns < 0
    if (($b * $b - 4 * $a * $c) < 0) {
        $errors[] = 'Nincs valós megoldás, te butuska!';
    } else {
        $x1 = (- $b + sqrt($b * $b - 4 * $a * $c)) / 2 * $a;
        $x2 = (- $b - sqrt($b * $b - 4 * $a * $c)) / 2 * $a;
    }

}
//var_dump($errors);
?>

<form method="post">
    Másodfokú egyenlet: ax^2 + bx + c <br>
    a = <input type="number" name="a">
    b = <input type="number" name="b">
    c = <input type="number" name="c">
    <input type="submit" value="Számolj">
</form>

<?php if ($errors) : ?>
<?php foreach ($errors as $error) : ?>
<strong><?= $error ?></strong>
<?php endforeach;?>
<?php elseif(isset($x1) || isset($x2)) : ?>
X1 = <?= $x1 ?><br>
X2 = <?= $x2 ?><br>
<?php endif; ?>

