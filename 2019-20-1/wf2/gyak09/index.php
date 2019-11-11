<?php

$name = "John";

print("<h1>Hello ${name}</h1><br>\n");
print 'Hello ${name}\n';

echo "Hello world";
echo("Hello world");

printf("Hello world");

$arr1 = [1, 6, 3, 4];
$arr2 = [
    0 => 1,
    1 => 6,
    2 => 3,
    3 => 4
];
$arr3 = [
    4 => "korte",
    "T" => FALSE,
    "alma" => 3
];


print("<br>{<br>");
foreach ($arr3 as $index => $value) {
    print("${index}: ${value},<br>");
    print($index . ": " . $value . ",<br>");
}
print("}<br>");


?>