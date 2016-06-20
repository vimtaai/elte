<?php if (!defined('TOKEN')) die('A fájl közvetlenül nem elérhető!') ?>
<form method="post" action="?login">
  <fieldset class="container col-lg-4 col-lg-offset-4">
    <legend class="text-center">Bejelentkezés</legend>
    <div class="form-group col-lg-8 col-lg-offset-2">
      <label for="email" class="control-label">Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Add meg az e-mail címedet">
    </div>
    <div class="form-group col-lg-8 col-lg-offset-2">
      <label for="password" class="control-label">Jelszó</label>
      <input type="password" class="form-control" id="password" name="password" placeholder="Add meg a jelszavadat">
    </div>
    <div class="form-group col-lg-8 col-lg-offset-2">
        <a href="?signup" class="btn btn-default">Regisztráció</a>
        <button type="submit" class="btn btn-primary pull-right">Bejelentkezés</button>
    </div>
    <div class="form-group col-lg-8 col-lg-offset-2">
        <?php foreach ($errors ?? [] as $error) : ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endforeach; ?>
        <?php foreach ($messages ?? [] as $message) : ?>
            <div class="alert alert-info"><?= $message ?></div>
        <?php endforeach; ?>
    </div>
  </fieldset>
</form>     