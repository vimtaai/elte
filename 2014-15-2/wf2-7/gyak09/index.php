<?php
# így lehet redirectet csinálni
//header('Location: http://www.google.com');

# kimenet típusának beállítása
header('Content-Type: text/plain');

if (file_exists('input.txt')) {
    $file = @fopen('input.txt', 'r');
    if (!$file) {
        die('Could not open file.');
    }
} else {
    die('Input file does not exist.');
}

//var_dump($file);

# adott számú bájt olvasása a fájlból
//echo fread($file, 1000000);
//
//while (!feof($file) {
//  echo fread($file, 1);
//}

# egy sor olvasása a fájlból 
//echo fgets($file);

//echo '<pre>';
# fájl olvasása soronként
while (!feof($file)) {
    //echo fgets($file) . "\n";
    //echo fgets($file) . PHP_EOL;
    echo fgets($file);
}
//echo '</pre>';

fclose($file);

echo file_get_contents('input.txt');

/*$file = @fopen('output.txt', 'a');
if (!$file) {
    die('Could not open file.');
}

# írunk a fájlba
fwrite($file, 'Hello World' . PHP_EOL);
fputs($file, 'Hello World');

fclose($file);*/

$data = 'Everything is awesome';
$data = '';
if (@file_put_contents('output.txt', $data) === false) {
    die('Could not write file');
}
