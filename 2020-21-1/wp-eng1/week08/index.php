<?php 

$name = "Marton";

print("<h1>Hello ${name}\n</h1>"); // c style
print('<h1>Hello ${name}\n</h1>');
// echo("Hello world");
// print "Hello world";
// echo "Hello world"; # Perl style ~ Bash, Python 2
// echo '<h1>Hello ' . $name . '</h1>';

for ($i = 0; $i <= 6; $i++) {
  print("<h${i}>Hello</h${i}>");
}

$arr = ["Tony", "Steve", "Bruce", "Natasha"];
// $arr = array("Tony", "Steve", "Bruce", "Natasha");
// JS
// for (let name of arr) {}
foreach ($arr as $name) {
  print("Hello, ${name}! ");
}

print("<br>");

foreach ($arr as $index => $name) {
  print("Avenger No ${index}: ${name}! ");
}

?>