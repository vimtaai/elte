<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <?php foreach ($GLOBALS["messages"] as $message): ?>
  <div class="toast show align-items-center text-bg-<?= $message["type"] ?> border-0">
    <div class="d-flex">
      <div class="toast-body">
        <?= $message["message"] ?>
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
  <?php endforeach; ?>
</div>