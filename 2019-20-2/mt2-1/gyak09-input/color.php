<?php
// 2: Keret a hibák kezelésére
$errors = [];

// 3: Beolvasás / feldolgozás
function verify_post(...$indexes) {
  foreach ($indexes as $index) {
    if (!isset($_POST[$index])) {
      return FALSE;
    }
  }

  return TRUE;
}

if (verify_post("color", "format")) {
  // Beolvasás
  $color = $_POST["color"];
  $format = $_POST["format"];
  // Feldolgozás
  // var_dump($color);  // DEBUGGING
  // var_dump($format); // DEBUGGING

  if ($format === "hex") {
    $output_color = strtoupper($color);
  } else if ($format === "rgb") {
    $r = hexdec(substr($color, 1, 2));
    $g = hexdec(substr($color, 3, 2));
    $b = hexdec(substr($color, 5, 2));
    
    $output_color = "rgb(${r},${g},${b})";
  } else {
    $errors[] = "Unknown color format";
  }
}

?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Color picker</title>
  </head>
  <body style="background: <?= $color ?? "#ffffff" ?>;">
    <!-- 1: statikus HTML / űrlap -->
    <form method="post" action="color.php">
      <input type="color" name="color" value="<?= $color ?? "#000000" ?>">
      <select name="format">
        <option value="hex"<?= ($format ?? "") === "hex" ? " selected" : "" ?>>Hex</option>
        <option value="rgb"<?= ($format ?? "") === "rgb" ? " selected" : "" ?>>RGB</option>
      </select>
      <button type="submit">Send</button>
    </form>

    <!-- 4: Kiírás -->
    <?php if (isset($output_color)): ?>
    <strong><?= $output_color ?></strong>
    <?php endif; ?>

    <!-- 2: Keret a hibák kezelésére -->
    <?php foreach ($errors as $error): ?>
    <div><?= $error ?></div>
    <?php endforeach; ?>
  </body>
</html>