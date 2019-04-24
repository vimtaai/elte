  <div class="my-2">
    <?php foreach ($errors ?? [] as $error) : ?>
      <div class="alert alert-danger"><?= $error ?></div>
    <?php endforeach; ?>

    <?php foreach ($messages ?? [] as $message) : ?>
      <div class="alert alert-success"><?= $message ?></div>
    <?php endforeach; ?>
  </div>

  <footer class="text-center text-muted">
    Az oldal a Modern technológiák II. kurzus keretében készült.
  </footer>
</div>