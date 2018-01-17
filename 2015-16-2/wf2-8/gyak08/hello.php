<h1>Almakorte</h1>
<?php 

const EOL = "<br>\n";
//define('EOL', "<br>\n");

$nev = 'Elemér';

echo '<h1>' . $nev . '</h1>';
echo "<h1>${nev}nek</h1>";

for ($i = 0; $i < 10; $i++) { 
    if ($i & 1) {
        echo $i * $i . EOL;
    }
}

// function faktorialis($n) {
function faktorialis(int $n) : int {
    if ($n == 1) {
        return 1;
    } else {
        return $n * faktorialis($n - 1);
    }
}

echo faktorialis(5) . EOL;