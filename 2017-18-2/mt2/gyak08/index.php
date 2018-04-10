<?php
ini_set('display_errors', 'on');

//echo $_SERVER['QUERY_STRING'];
//var_dump($_GET);

// ha van bemenet
if (count($_GET) > 0) {
    $eredmeny = pi() * 2 * $_GET['sugar'];
    //echo $eredmeny;
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

<form>
    <fieldset>
        <legend>Számológép</legend>
        <input type="number">
        <select>
            <option>+</option>
            <option>-</option>
            <option>*</option>
            <option>/</option>
        </select>
        <input type="number">
        <input type="submit" value="Számol">
    </fieldset>
</form>

<output>
    <?= $eredmeny ?? '' ?>
    <?php //echo isset($eredmeny) ? $eredmeny : '' ?>
</output>