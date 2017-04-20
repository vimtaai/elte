<?php

# Ez is komment
// Ez is komment
/* Ez is komment */

$kerdesek = [
    [
        "kerdes" => "Hány lába van a lónak?",
        "valaszok" => [
            ["szoveg" => "1", "helyes-e" => FALSE],
            ["szoveg" => "2", "helyes-e" => FALSE],
            ["szoveg" => "3", "helyes-e" => FALSE],
            ["szoveg" => "4", "helyes-e" => TRUE]
        ]
    ],
    [
        "kerdes" => "Hány lába van a embernek?",
        "valaszok" => [
            ["szoveg" => "1", "helyes-e" => FALSE],
            ["szoveg" => "2", "helyes-e" => TRUE],
            ["szoveg" => "3", "helyes-e" => FALSE],
            ["szoveg" => "4", "helyes-e" => FALSE]
        ]
    ],
    [
        "kerdes" => "Milyen atom található egy vízmolekulában?",
        "valaszok" => [
            ["szoveg" => "H", "helyes-e" => TRUE],
            ["szoveg" => "N", "helyes-e" => FALSE],
            ["szoveg" => "K", "helyes-e" => FALSE],
            ["szoveg" => "O", "helyes-e" => TRUE]
        ]
    ]
];

//for ($i = 0; $i < count($kerdesek); $i++) {}
foreach ($kerdesek as $index => $kerdes) {
    echo '<h1>' . ($index + 1) . '. kérdés</h1>';
    echo '<p>' . $kerdes['kerdes'] . '</p>';
    //$i = $index + 1; 
    //echo "<h1>${i}. kérdés</h1>";
    $c = 0;
    foreach ($kerdes['valaszok'] as $valasz) {
        $c += $valasz['helyes-e'] ? 1 : 0;
    }
    foreach ($kerdes['valaszok'] as $valasz) {
        if ($c > 1) {
            echo '<input type="checkbox"> ' . $valasz['szoveg'];
        } else {
            echo '<input type="radio" name="k' . $index . '"> ' . $valasz['szoveg'];
        }
    }
}
// SHELL script futtatás
//echo `cat /etc/passwd`;

echo '<pre>';
$cmd = 'ls -lha';
eval('echo `' . $cmd . '`;');
echo '</pre>';

$hibak = [
    '404 Not found',
    '500 Internal Server Error'
];

echo '<ul>';
foreach ($hibak as $hiba) {
    echo '<li>' . $hiba . '</li>'
}
echo '</ul>';