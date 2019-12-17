<?php foreach ($errors ?? [] as $error) : ?>
<div style="color: maroon; background: pink; margin: 5px 0; padding: 5px;"><?= $error ?></div>
<?php endforeach; ?>

<?php foreach ($messages ?? [] as $message) : ?>
<div style="color: green; background: lightcyan; margin: 5px 0; padding: 5px;"><?= $message ?></div>
<?php endforeach; ?>