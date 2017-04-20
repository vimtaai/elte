<?php

function fact($n) {
    if ($n == 0) {
        return 1;
    } else {
        return $n * fact($n - 1);
    }
}

echo fact(5) . '<br>';
echo fact(0) . '<br>';
echo fact(200) . '.elte.hu';

$cmd = 'ls -lha`; echo time(); echo `';

echo '<pre>';
echo `ls -lha`;
eval('echo `' . $cmd . '`;');
echo '</pre>';

//$tomb = array(1, 2, array(2, 3));
//$tomb = [1, 2, [2, 3]];
$kerdesek = [
  [
      'kerdes' => 'Mennyi a Föld tömege?',
      'valaszok' => [
          ['szoveg' => '1000t', 'helyes-e' => false],
          ['szoveg' => '60000000kg', 'helyes-e' => false],
          ['szoveg' => '10dkg', 'helyes-e' => false],
          ['szoveg' => '6E24 kg', 'helyes-e' => true]
      ]
  ],
  [
      'kerdes' => 'A földi víz hány százaléka sós?',
      'valaszok' => [
          ['szoveg' => '1%', 'helyes-e' => false],
          ['szoveg' => '10%', 'helyes-e' => false],
          ['szoveg' => '97.5%', 'helyes-e' => true],
          ['szoveg' => '80%', 'helyes-e' => false]
      ]
  ]
];

//for ($i = 0; $i < count($kerdesek); $i++) {}
foreach ($kerdesek as $index => $kerdes) {
    echo '<h1>' . ($index + 1) . '. kérdés</h1>';
    // Mi lenne ha JS lenne?
    // console.log(`<h1>${index + 1}.kérdés</h1>`)
    //$i = $index + 1;
    //echo "<h1>${i}. kérdés</h1>";
    echo '<p>' . $kerdes['kerdes'] . '</p>';
    foreach ($kerdes['valaszok'] as $valasz) {
        echo '<input type="radio" name="k' . $index . '">' . $valasz['szoveg'];
    }
}