  <?php if (!defined('TOKEN')) die ('Ejnyebejnye!'); ?>
  <form class="form-horizontal container panel" action="index.php?regisztral" method="post">
    <fieldset class="well col-lg-6">
        <legend>Regisztráció</legend>
        <div class="form-group">
            <label for="inputName" class="col-lg-2 control-label">Név</label>
            <div class="col-lg-10">
                <input type="text" class="form-control" id="inputName" name="nev" placeholder="pl. Kiss Elemér">
            </div>
        </div>
        <div class="form-group">
            <label for="inputEmail" class="col-lg-2 control-label">Email</label>
            <div class="col-lg-10">
                <input type="email" class="form-control" id="inputEmail" name="email" placeholder="pl. kiss.elemer@example.com">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="col-lg-2 control-label">Jelszó</label>
            <div class="col-lg-10">
                <input type="password" class="form-control" id="inputPassword" name="jelszo" placeholder="pl. almakorte">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPasswordRe" class="col-lg-2 control-label">Még 1x</label>
            <div class="col-lg-10">
                <input type="password" class="form-control" id="inputPasswordRe" name="jelszo_re" placeholder="pl. almakorte">
            </div>
        </div>
        <div class="form-group">
            <label for="inputColor" class="col-lg-2 control-label">Kedvenc szín</label>
            <div class="col-lg-10">
                <input type="color" class="form-control" id="inputColor" name="szin">
            </div>
        </div>
        <div class="form-group">
            <div class="col-lg-10 col-lg-offset-2">
                <button type="reset" class="btn btn-default">Mégse</button>
                <button type="submit" class="btn btn-primary">Küldés</button>
            </div>
        </div>
    </fieldset>
  </form>
  <?php foreach ($messages ?? [] as $message) : ?>
  <div class="alert alert-info"><?= $message ?></div>
  <?php endforeach; ?>
  <?php foreach ($errors ?? [] as $error) : ?>
  <div class="alert alert-danger"><?= $error ?></div>
  <?php endforeach; ?>
