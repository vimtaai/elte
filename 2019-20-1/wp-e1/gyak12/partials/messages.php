<?php foreach ($errors ?? [] as $error) : ?>
  <div class="ui negative message"><?= $error ?></div>
<?php endforeach; ?>

<?php foreach ($messages ?? [] as $message) : ?>
  <div class="ui info message"><?= $message ?></div>
<?php endforeach; ?>