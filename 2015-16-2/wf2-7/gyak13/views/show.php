<style>
#sky {
  width: 500px;
  height: 300px;
  position: relative;
  overflow: hidden;
}

#sky div {
  position: absolute;
  cursor: pointer;
}

</style>
<div id="sky">
  <?php foreach ($stars ?? [] as $star) : ?>
  <div style="top: <?= $star['y'] ?>px; left: <?= $star['x'] ?>px" data-id="<?= $star['id'] ?>">
  <?php if ($star['type'] == 'Szupernova') : ?>
    X
  <?php elseif ($star['type'] == 'Hullócsillag') : ?>
    /
  <?php else : ?>
    *
  <?php endif; ?>
  </div>
  <?php endforeach; ?>
</div>

<form method="post" action="index.php?show">
	<select name="type" required>
		<option value="null"></option>
		<option>Nap</option>
		<option>Galaxis</option>
		<option>Szupernova</option>
		<option>Hullócsillag</option>
	</select>
	<input type="submit" value="Szűrés">
</form>

<div id="name"></div>
<div id="typedata"></div>
<div id="x"></div>
<div id="y"></div>
