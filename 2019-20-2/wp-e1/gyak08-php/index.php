<?php
/* Beolvasás/Adatok leírása/Feldolgozás */
/* Felhasználói felülettől (UI) független */
/* NINCS KIÍRÁS!!!!!! (kivéve debugging) */
// print("Hello world" . PHP_EOL);

// $name = "John";
$logged_in = true;

$errors = [
  "Invalid username or password",
  "Session expired",
  "You have no permission to access this resource"
];

$data = [];

// Feldolgozó program
for ($i = 0; $i < 5; $i++) {
  $data[$i] = rand(10, 100);
}

?>
<!-- HTML SABLON (KIÍRÁS) -->
<!doctype html>
<head>
  <meta charset="utf-8">
  <title>PHP demo</title>
</head>
<body>
  <h1>Hello <?= $name ?? "World" ?></h1>

  <?php if ($logged_in) : ?>
    <p>You are currently logged in.</p>
  <?php endif; ?> 

  <?php if (!empty($errors)) : ?>
    <ul>
    <?php foreach ($errors as $error) : ?>
      <li class="error"><?= $error ?></li>
    <?php endforeach; ?> 
    </ul>
  <?php endif; ?>

  <?php foreach ($data as $item) : ?>
    <span style="font-size: <?= $item ?>px">Hello</span>
  <?php endforeach; ?>
</body>
