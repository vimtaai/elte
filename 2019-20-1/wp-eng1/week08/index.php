<h1>Hello world</h1>
<?php 

$name = "John";

print("<p>Hello world</p>");

// print "Hello";
# echo "Hello";

echo("Hello ${name}!\n");
echo('Hello ${name}\n!');
// echo 'Hello ' . $name . '!' . PHP_EOL;

$bool = FALSE;

$fn = function () {};

$arr = [
    // ! DON'T DO THIS
    // TRUE => "apples",
    // FALSE => "pears",
    // NULL => "oranges",
    // function () {} => "bananas"
    // ! DO THIS
    1 => "apples",
    5 => "pears",
    "a" => "oranges",
    "b" => "bananas"
];

$arr2 = array(1, 2, 3, "a", TRUE, []);
$arr3 = [1, 2, 3, "a", TRUE, []];
$arr4 = [
    0 => 1,
    1 => 2,
    2 => 3,
    3 => "a",
    4 => TRUE,
    5 => "b"
];

foreach ($arr as $index => $item) {
    print("<h1>${index} : ${item}</h1>");
}

class Person {
    public static $race = "human";
    public $age;
    public $height;
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function talk() {
        print("Hello, I'm {$this->name} and I'm a " . self::$race . "!");
    }
}

$john = new Person("Mary");
$john->talk();

$a = "b";
$b = "c";
$c = "d";

print($$$a);

?>