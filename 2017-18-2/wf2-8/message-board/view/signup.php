<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(GUEST);

?>
<?php include '../template/header.php' ?>

  <h1 class="ui horizontal divider">
    Sign up
  </h1>

  <!-- BEJELENTKEZŐ ŰRLAP -->
  <form class="ui form" method="post" action="../controller/register.php">
    <div class="field">
      <label>Username</label>
      <input type="text" name="username" placeholder="Username">
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="password" placeholder="Password">
    </div>
    <div class="field">
      <label>Password Again</label>
      <input type="password" name="password-re" placeholder="Password again">
    </div>
    <div class="field">
      <button type="submit" class="ui button">Login</button>
      <a href="login.php">Sign in</a>
    </div>
    <?php foreach (Message::getMessages() as $message) : ?>
      <?= $message ?>
    <?php endforeach; ?>
  </form>
  <!-- ŰRLAP VÉGE -->

<?php include '../template/footer.php' ?>
