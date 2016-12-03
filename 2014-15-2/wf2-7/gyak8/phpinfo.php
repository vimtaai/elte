<?php

// phpinfo();

// String
$apple = 'This is an apple.';
$apple = "This is an apple.";

// Numbers
$num = 1;
$num = 1.0;
$num = 0x11;

echo $apple;
echo($apple);

print $apple;
print($apple);

$var = 'apple';

echo '<h1>$apple</h1><br>';
echo "<h1>$apple</h1><br>";
echo "Apple: ${apple}s<br>";
echo "Apple: {$apple}s<br>";
echo "Apple: {$$var}s<br>";

echo '<h1>' . $apple . '</h1><br>';

function f($x) {
    echo $x * $x;
}

f($num);

function inc(&$x) {
    $x += 1;
}

echo '<br>';
echo $num;
echo '<br>';
inc($num);
echo $num;
echo '<br>';

$arr = array('a', 'b', 'c');
var_dump($arr);
echo '<br>';
$arr['apple'] = 'pear';
var_dump($arr);
echo '<br>';
$arr[] = 'banana';
var_dump($arr);
echo '<br>';

foreach ($arr as $key => $value) {
    echo "[$key : $value]";
    echo ', ';
}
echo '<br>';

echo $_GET['fruit'];

echo 'Is it running?';
