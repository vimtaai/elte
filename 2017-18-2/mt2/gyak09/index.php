<?php
ini_set('display_errors', 'on');

//echo $_SERVER['QUERY_STRING'];
//var_dump($_GET);

$hibak = [];

// ha van bemenet
if (count($_GET) > 0) {
    $sugar = filter_var($_GET['sugar'], 
                        FILTER_VALIDATE_FLOAT);
    if ($sugar === FALSE) {
        $hibak[] = 'A megadott sugár nem szám!';
    } else if ($sugar <= 0) {
        $hibak[] = 'A sugár nem lehet negatív!';
    } else {
        $eredmeny = pi() * 2 * $sugar;
    }
    //echo $eredmeny;
}

if (count($_POST) > 0) {
    $a = filter_var($_POST['a'], FILTER_VALIDATE_FLOAT);
    $b = filter_var($_POST['b'], FILTER_VALIDATE_FLOAT);
    if ($a === FALSE || $b === FALSE) {
        $hibak[] = 'Valamelyik paraméter nem szám!';
    } else if (!in_array($_POST['muvelet'], ['+', '-', '*', '/'])) {
        $hibak[] = 'Helytelen műveleti jel!';
    } else if ($_POST['muvelet'] == '/' && $b == 0) {
        $hibak[] = 'Nullával nem osztunk!';
    } else {
        switch ($_POST['muvelet']) {
            case '+': 
                $eredmeny = $a + $b;
                break;
            case '-': 
                $eredmeny = $a - $b;
                break;
            case '*': 
                $eredmeny = $a * $b;
                break;
            case '/': 
                $eredmeny = $a / $b;
                break;
        }
    }
}

?>
<meta charset="utf-8">
<link rel="stylesheet" href="https://bit.do/wf2css">

<form>
    <fieldset>
        <legend>Kerület számítás</legend>
        Sugár = <input name="sugar">
        <input type="submit" value="Számol">
    </fieldset>
</form>

<form method="post">
    <fieldset>
        <legend>Számológép</legend>
        <input type="number" name="a">
        <select name="muvelet">
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number" name="b">
        <input type="submit" value="Számol">
    </fieldset>
</form>

<output>
    <?php foreach ($hibak as $hiba) : ?>
        <div><?= $hiba ?></div>
    <?php endforeach; ?>
    <?= $eredmeny ?? '' ?>
    <?php //echo isset($eredmeny) ? $eredmeny : '' ?>
</output>