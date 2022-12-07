<?php foreach ($messages as $error): ?>
  <div class="alert alert-<?= $error["type"] ?>">
    <?= $error["text"] ?>
  </div>
<?php endforeach; ?>