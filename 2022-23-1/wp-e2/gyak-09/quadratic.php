<?php
// 1. Check if input exists
if (isset($_POST["a"]) && isset($_POST["b"]) && isset($_POST["c"])) {
	$has_input = true;

	// 2. Validate input
	if (is_numeric($_POST["a"]) && is_numeric($_POST["b"]) && is_numeric($_POST["c"])) {
		// 3. Convert input to desired format
		$a = (float)$_POST["a"];
		$b = (float)$_POST["b"];
		$c = (float)$_POST["c"];

		// 4. Process input
		$d = $b * $b - 4 * $a * $c;
		$has_solution = $d >= 0;

		if ($has_solution) {
			$x1 = (-$b + sqrt($d)) / (2 * $a);
			$x2 = (-$b - sqrt($d)) / (2 * $a);			
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

<?php if (isset($has_input)): ?>
	<?php if (!$has_solution): ?>
		No solution
	<?php else: ?>
		Solution: x1 = <?= $x1 ?>, x2 = <?= $x2 ?>
	<?php endif; ?>
<?php endif; ?>