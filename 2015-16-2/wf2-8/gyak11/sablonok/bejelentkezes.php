<?php if (!defined('TOKEN')) die ('Ejnyebejnye!'); ?>
<form method="post" action="?bejelentkezes">
  <fieldset class="container col-md-4 col-md-offset-4">
    <legend class="text-center">Bejelentkezés</legend>
    <div class="form-group col-md-8 col-md-offset-2">
      <label for="email" class="control-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Add meg az e-mail címedet">
    </div>
    <div class="form-group col-md-8 col-md-offset-2">
      <label for="jelszo" class="control-label">Jelszó</label>
      <input type="password" class="form-control" id="jelszo" name="jelszo" placeholder="Add meg a jelszavadat">
    </div>
    <div class="form-group col-md-8 col-md-offset-2">
        <a href="?signup" class="btn btn-default">Regisztráció</a>
        <button type="submit" class="btn btn-primary pull-right">Bejelentkezés</button>
    </div>
  </fieldset>
</form>
<?php foreach ($messages ?? [] as $message) : ?>
<div class="alert alert-info"><?= $message ?></div>
<?php endforeach; ?>
<?php foreach ($errors ?? [] as $error) : ?>
<div class="alert alert-danger"><?= $error ?></div>
<?php endforeach; ?>
