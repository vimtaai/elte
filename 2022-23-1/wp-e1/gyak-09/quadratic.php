<?php
$has_input = false;

if (isset($_POST["a"]) && isset($_POST["b"]) && isset($_POST["c"])) {
  $has_input = true;
  $is_input_valid = is_numeric($_POST["a"]) && is_numeric($_POST["b"]) && is_numeric($_POST["c"]);

  if ($is_input_valid) {
    $a = (float)$_POST["a"];
    $b = (float)$_POST["b"];
    $c = (float)$_POST["c"];

    $d = $b ** 2 - 4 * $a * $c;

    if ($a !== 0 && $d >= 0) {
      $x1 = -$b + sqrt($d) / (2 * $a);
      $x2 = -$b + sqrt($d) / (2 * $a);
    } else {
      $x1 = "Not exists";
      $x2 = "Not exists";
    }
  }
}

?>

<form method="post" action="quadratic.php">
  A: <input type="text" name="a"><br>
  B: <input type="text" name="b"><br>
  C: <input type="text" name="c"><br>
  <button type="submit">Send</button>
</form>

<?php if ($has_input): ?>
  <?php if ($is_input_valid): ?>
    X1: <?= $x1 ?><br>
    X2: <?= $x2 ?><br>
  <?php else: ?>
    Invalid input
  <?php endif; ?>
<?php endif; ?>