<?php if (!defined('TOKEN')) die ('Ejnyebejnye!'); ?>
<form class="form-horizontal" action="?signup" method="post">
  <fieldset class="container col-md-4 col-md-offset-4">
    <legend class="row">
        <div class="col-lg-4">Regisztráció</div>
    </legend>
    <div class="form-group row">
      <label for="name" class="col-lg-3 control-label">Teljes név</label>
      <div class="col-lg-8">
        <input type="text" class="form-control" id="name" name="name" placeholder="pl. Kiss Elemér">
      </div>
    </div>
    <div class="form-group row">
      <label for="email" class="col-lg-3 control-label">Email</label>
      <div class="col-lg-8">
        <input type="email" class="form-control" id="email" name="email" placeholder="pl. kiss.elemer@example.com">
      </div>
    </div>
    <div class="form-group row">
      <label for="password" class="col-lg-3 control-label">Jelszó</label>
      <div class="col-lg-8">
        <input type="password" class="form-control" id="password" name="password" placeholder="pl. almakorte">
      </div>
    </div>
    <div class="form-group row">
      <label for="password_re" class="col-lg-3 control-label">Jelszó még egyszer</label>
      <div class="col-lg-8">
        <input type="password" class="form-control" id="password_re" name="password_re" placeholder="pl. almakorte">
      </div>
    </div>
    <div class="form-group row">
      <label for="color" class="col-lg-3 control-label">Kedvenc szín</label>
      <div class="col-lg-3">
        <input type="color" class="form-control" id="color" name="color" placeholder="pl. almakorte">
      </div>
    </div>
    <div class="form-group row">
      <div class="col-lg-10 col-lg-offset-3">
        <button type="reset" class="btn btn-default">Törlés</button>
        <button type="submit" class="btn btn-primary">Regisztráció</button>
      </div>
    </div>
    <?php foreach ($errors ?? [] as $error) : ?>
    <div class="alert alert-danger">
        <?= $error ?>
    </div>
    <?php endforeach; ?>
  </fieldset>
</form>