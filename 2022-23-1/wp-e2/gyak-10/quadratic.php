<?php
require_once("utils.php");

$inputs = [];
$errors = [];
$required_inputs = ["a", "b", "c"];

function is_a_valid($a) {
    return is_numeric($a) && $a !== "0";
}

// 1. Check if input exists
if (array_all_keys_exist($required_inputs, $_POST)) {    
	// 2. Validate input
    if (!is_a_valid($_POST["a"])) {
        $errors["a"] = "A is not OK.";
    }

    if (!is_numeric($_POST["b"])) {
        $errors["b"] = "B is not OK.";
    }

    if (!is_numeric($_POST["c"])) {
        $errors["c"] = "C is not OK.";
    }

	if (empty($errors)) {
		// 3. Convert input to desired format
		$inputs["a"] = (float)$_POST["a"];
		$inputs["b"] = (float)$_POST["b"];
		$inputs["c"] = (float)$_POST["c"];

		// 4. Process input
		$d = $inputs["b"] * $inputs["b"] - 4 * $inputs["a"] * $inputs["c"];
		$has_solution = $d >= 0;

		if ($has_solution) {
			$x1 = (-$inputs["b"] + sqrt($d)) / (2 * $inputs["a"]);
			$x2 = (-$inputs["b"] - sqrt($d)) / (2 * $inputs["a"]);			
		}
	}
}
?>
<form method="post" action="quadratic.php">
	A: <input type="number" name="a">
	B: <input type="number" name="b">
	C: <input type="number" name="c">
	<button type="submit">Solve</button>
</form>

<?php if (!empty($inputs)): ?>
	<?php if (!$has_solution): ?>
		No solution
	<?php else: ?>
		Solution: x1 = <?= $x1 ?>, x2 = <?= $x2 ?>
	<?php endif; ?>
<?php else: ?>
    <ul>
    <?php foreach($errors as $error): ?>
        <li><?= $error ?></li>
    <?php endforeach; ?>
    </ul>
<?php endif; ?>