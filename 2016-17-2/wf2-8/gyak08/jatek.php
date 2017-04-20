<?php

if ($_POST) {
    $szam = $_POST['szam'];
    $tipp = $_POST['tipp'];
    $hiba = FALSE;
    if ($tipp < 0) {
        $valasz = '0 alatt nem lehet';
        $hiba = TRUE;
    } else if ($tipp > 100) {
        $valasz = '100 felett nem lehet';
        $hiba = TRUE;
    } elseif ($tipp > $szam) {
        $valasz = 'Ennél kisebb';
    } else if ($tipp < $szam) {
        $valasz = 'Ennél nagyobb';
    } else {
        $valasz = 'Eltaláltad!';
        $szam = rand(0, 100);
    }
} else {
    $szam = rand(0, 100);
    $valasz = '';
}
?>
<!doctype html>
<meta charset="utf-8">
<title>Gondoltam egy számra</title>

<h1>Gondoltam egy számra, tippelj</h1>
<strong>0-100 között</strong>
<!--<form method="post">
    <input type="submit" value="Új játék">
</form>-->
<form method="post">
    <input type="hidden" name="szam"
           value="<?= $szam ?>">
    <input type="number" name="tipp">
    <input type="submit" value="Tippelek">
</form>
<output style="<?= ($hiba ? 'color: red;' : '') ?>">
    <?= $valasz; ?>
</output>

<?php if ($hiba) : ?>
    <output style="color: red">
<?php else : ?>
    <output>
<?php endif; ?>

        <?= $valasz; ?>
    </output>