<?php
// Utility
function is_valid_color($color) {
  return preg_match("/#[0-9a-f]{6}/", $color);
}

// Input
$color = "#ffffff";

if (isset($_POST["my-color"])) {
  if (is_valid_color($_POST["my-color"])) {
    $color = $_POST["my-color"];
  }
}

// Process

?>
<body style="background-color: <?= $color ?>">
  <form method="post" action="color.php">
    <input type="color" name="my-color">
    <button type="submit">Send</button>
  </form>
  Your Color: <?= $color ?>
</body>