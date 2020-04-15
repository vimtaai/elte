<?php
// Beolvasás + Feldolgozás

// Szuperglobális változó
$name = $_GET["name"] ?? "Anonymus";
$page = $_GET["page"] ?? 1;

$names = [
  "Anne",
  "Blaise",
  "John",
  "Jack",
  "Tony",
  "Steve",
  "Bruce",
  "Natasha",
  "Nick",
  "Peter",
  "Jim",
  "Kate",
  "Penny",
  "Harry",
  "Igor",
  "Zack",
  "Chris"
];

$names_to_display = array_slice($names, ($page-1) * 5, 5);
$number_of_pages = ceil(count($names) / 5);

function verify_post(...$indexes) {
  foreach ($indexes as $index) {
    if (!isset($_POST[$index])) {
      return FALSE;
    }
  }

  return TRUE;
}

$errors = [];

if (verify_post("username", "password")) {}

if (verify_post("search")) {
  // Beolvasás / előfeldolgozás
  $search = trim($_POST["search"]);
  // Feldolgozás
  if (empty($search)) {
    $errors[] = "Name must not be empty";
  }

  $found_index = array_search($search, $names);

  if ($found_index === FALSE) {
    $errors[] = "Name not found";
  }
}

?>
<!-- Kiírás -->
<h1>Hello <?= $name ?></h1>

<form action="index.php" method="post">
  <label>Name</label>
  <input type="text" name="search">
  <button type="submit">Search</button>
</form>

<?php foreach ($errors as $error): ?>
<div><?= $error ?></div>
<?php endforeach; ?>

<?php if ($found_index ?? FALSE !== FALSE): ?>
<p><?= $search ?> is number <?= $found_index + 1 ?> in the list.</p>
<?php endif; ?>

<ul>
  <?php foreach ($names_to_display as $name): ?>
  <li><?= $name ?></li>
  <?php endforeach; ?>
</ul>
<?php for ($i = 1; $i <= $number_of_pages; $i += 1): ?>
  <a href="?page=<?= $i ?>"><?= $i ?></a>
<?php endfor; ?>