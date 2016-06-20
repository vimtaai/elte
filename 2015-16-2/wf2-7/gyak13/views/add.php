<form method="post" action="?add">
	<label for="name">Csillag neve</label>
	<input type="text" name="name" id="name" required>
	<br>
	<label for="type">Csillag típusa</label>
	<select name="type" id="type" required>
		<option>Nap</option>
		<option>Galaxis</option>
		<option>Szupernova</option>
		<option>Hullócsillag</option>
	</select>
	<br>
	<label for="x">X</label>
	<input type="number" name="x" id="x" min="0" max="500" required>
	<br>
	<label for="y">Y</label>
	<input type="number" name="y" id="y" min="0" max="300" required>
	<br>
	<input type="submit" value="Küldés">
</form>

<?php foreach ($errors ?? [] as $error) : ?>
	<?= $error ?>
<?php endforeach; ?>
