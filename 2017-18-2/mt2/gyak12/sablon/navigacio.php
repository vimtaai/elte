<!-- FEJLÉC -->
<div class="ui fixed inverted menu">
  <div class="ui container">
    <a href="index.php" class="header item">
    <h1>👛</h1>
    </a>
    <a href="index.php" class="item">Nyilvántartás</a>
    <?php if (!isset($_SESSION['felhasznalo'])) : ?>
      <a href="bejelentkezes.php" class="right floated item">Bejelentkezés</a>
    <?php else : ?>
      <span class="right floated item">
        <?= $_SESSION['felhasznalo']['vezeteknev'] ?>
        <?= $_SESSION['felhasznalo']['keresztnev'] ?>
      </span>
      <a href="kijelentkezes.php" class="right floated item">Kijelentkezés</a>
    <?php endif; ?>
  </div>
</div>
<!-- FEJLÉC VÉGE -->