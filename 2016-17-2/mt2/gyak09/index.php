<?php
// "üzleti logika"
function megoldokeplet($a, $b, $c) {
    $megoldasok = [];
    $d = $b*$b-4*$a*$c;

    if ($d >= 0) {
        $megoldasok[1] = (-$b + sqrt($d))/(2*$a);
        $megoldasok[2] = (-$b - sqrt($d))/(2*$a);
    }

    return $megoldasok;
}

/////////////
// debuggolás
//var_dump($_POST);

if ($_POST) { // Ha érkezett bármilyen adat
    $input = []; // Helyes input
    $errors = []; // Hibaüzenetek

    // Validálás
    if (is_numeric($_POST['a']) && $_POST['a'] != 0) {
        $input['a'] = (float)$_POST['a'];
    } else {
        $errors[] = 'Az `a` értéke nem szám vagy 0!';
    }

    if (is_numeric($_POST['b'])) {
        $input['b'] = (float)$_POST['b'];
    } else {
        $errors[] = 'Az `b` értéke nem szám!';
    }

    if (is_numeric($_POST['c'])) {
        $input['c'] = (float)$_POST['c'];
    } else {
        $errors[] = 'Az `c` értéke nem szám!';
    }

    if (!$errors) {
        $megoldasok = megoldokeplet($input['a'], 
                                    $input['b'], 
                                    $input['c']);
    }
}
?>
<!doctype html>

<meta charset="utf-8">
<title>Másodfokú</title>

<form method="post">
    a = <input type="text" name="a" value="<?= $_POST['a'] ?? '' ?>">
    b = <input type="text" name="b" value="<?= $_POST['b'] ?? '' ?>">
    c = <input type="text" name="c" value="<?= $_POST['c'] ?? '' ?>">
    <input type="submit">
</form>
<?php if (isset($megoldasok)) : ?>
    <?php if (!empty($megoldasok)) : ?>
        <output>x1 = <?= $megoldasok[1] ?></output>
        <output>x2 = <?= $megoldasok[2] ?></output>
    <?php else : ?>
        <output>Nincs valós megoldás!</output>
    <?php endif; ?>
<?php endif; ?>

<?php if (isset($errors) && count($errors)) : ?>
    <ul>
    <?php foreach ($errors as $error) : ?>
        <li><?= $error ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>