<?php foreach ($messages ?? [] as $message) : ?>
  <div class="ui message <?= $message->type ?>"><?= $message->message ?></div>
<?php endforeach; ?>