<?php
define("IS_PAGE", true);
require_once("utils.php");

$has_input = false;
$errors = [];

if (check_all_keys_in_post("a", "b", "c")) {
  $has_input = true;

  if (!is_numeric($_POST["a"])) {
    $errors[] = "'A' must be a number";
  } else if ($_POST["a"] === "0") {
    $errors[] = "'A' must not be 0";
  }

  if (!is_numeric($_POST["b"])) {
    $errors[] = "'B' must be a number";
  }

  if (!is_numeric($_POST["c"])) {
    $errors[] = "'C' must be a number";
  }

  if (count($errors) === 0) {
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

<?php include("partials/header.php"); ?>
<form method="post" action="quadratic.php">
  A: <input type="text" name="a"><br>
  B: <input type="text" name="b"><br>
  C: <input type="text" name="c"><br>
  <button type="submit">Send</button>
</form>

<?php if ($has_input): ?>
  <?php if (count($errors) === 0): ?>
    X1: <?= $x1 ?><br>
    X2: <?= $x2 ?><br>
  <?php else: ?>
    <?php foreach($errors as $error): ?>
      <div class="error"><?= $error ?></div>
    <?php endforeach; ?>
  <?php endif; ?>
<?php endif; ?>
<?php include("partials/footer.php"); ?>