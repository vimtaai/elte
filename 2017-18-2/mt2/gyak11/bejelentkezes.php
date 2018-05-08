<?php include 'sablon/fejlec.php'; ?>

  <?php include 'sablon/navigacio.php'; ?>

  <!-- TARTALOM -->
  <div class="ui main container">
    <!-- KÜLDÕ ÛRLAP -->
    <div class="ui large header">Bejelentkezés</div>
    <form method="post" class="ui form fields center">
      <div class="field"><input type="text" name="felhasznalo" placeholder="Felhasználónév"></div>
      <div class="field"><input type="password" name="jelszo" placeholder="Jelszó"></div>
      <div class="field"><input type="submit" value="Regisztrál" class="ui button three wide field primary"></div>
    </form>
    <!-- KÜLDÕ ÛRLAP VÉGE -->
    <br>
    <a href="regisztral.php" class="ui button right floated">Regisztráció</a>
  </div>
  <!-- TARTALOM VÉGE -->

<?php include 'sablon/lablec.php'; ?>