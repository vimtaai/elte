<?php foreach($errors as $error) : ?>
  <div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>

<?php foreach($successes as $success) : ?>
  <div class="alert alert-success"><?= $success ?></div>
<?php endforeach; ?>