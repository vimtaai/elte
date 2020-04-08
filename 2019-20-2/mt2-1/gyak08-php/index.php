<?php
// BEOLVASÁS / FELDOLGOZÁS (HTML-től/UI-től független)

$name = "John";
$second_list_item = "ELTE";

$hellos = [];
for ($i = 0; $i < 5; $i++) {
  $hellos[] = $i + 1;
}

$errors = [
  "Invalid username or password",
  "Session timeout"
];

?>
<!-- HTML SABLON (UI - behelyettesítve a PHP adatait) -->
<?php if (isset($name)): ?>
  <h1>Hello <?= $name ?>!</h1>
<?php else: ?>
  I don't know who you are.
<?php endif; ?>

<ul>
  <li>Hello</li>
  <li><?= $second_list_item ?? "Default" ?></li>
</ul>
<?php foreach ($hellos as $i): ?>
  <span style="font-size: <?= $i ?>em">Hello</span>
<?php endforeach; ?>

<?php foreach ($errors ?? [] as $error): ?>
  <div class="error"><?= $error ?></div>
<?php endforeach; ?>