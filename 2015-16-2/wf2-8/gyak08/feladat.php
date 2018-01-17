<?php

// Adat

$kerdesek = [
    [
        'kerdes' => 'Hány lába van a lónak?',
        'valaszok' => [
            1 => '2',
            2 => '3',
            3 => '4',
            4 => '6'
        ]
    ],
    [
        'kerdes' => 'Hány lába van a békának?',
        'valaszok' => [
            1 => '2',
            2 => '8',
            3 => '4',
            4 => '6'
        ]
    ],
];

// Adatfeldolgozás

// Tömb elemeinek keverése
shuffle($kerdesek);
foreach ($kerdesek as $azon => $kerdes) {
    shuffle($kerdesek[$azon]['valaszok']);
}


// Megjelenítés
?>
<!DOCTYPE html>
<meta charset="utf-8">
<title>Kérdezgetős</title>

<form>
    <?php foreach ($kerdesek as $azon => $kerdes) : ?>
    <fieldset>
        <strong><?= $kerdes['kerdes'] ?></strong><br>
        <?php foreach ($kerdes['valaszok'] as $sorszam => $valasz) : ?>
        <input type="radio" name="valasz<?= $azon ?>" 
               value="<?= $valasz ?>" 
               id="valasz<?= $azon ?>_<?= $sorszam ?>">
        <label for="valasz<?= $azon ?>_<?= $sorszam ?>">
            <?= $valasz ?>
        </label><br>
        <?php endforeach; ?>
    </fieldset>
    <?php endforeach; ?>
</form>