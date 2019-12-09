<?php foreach ($errors ?? [] as $error) : ?>
<div class="error"><?= $error ?></div>
<?php endforeach; ?>

<?php foreach ($messages ?? [] as $message) : ?>
<div class="message"><?= $message ?></div>
<?php endforeach; ?>