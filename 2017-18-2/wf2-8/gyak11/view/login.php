<?php

require_once '../model/message.php';

session_start();

?>
<!doctype html>

<meta charset="utf-8">
<title>Üzenőfal</title>
<link rel="stylesheet" href="https://tinyurl.com/wf2semantic">

<div class="ui secondary pointing menu">
  <a class="item" href="index.php">Messages</a>
  <div class="right menu">
    <a class="ui item" href="login.php">Login</a>
  </div>
</div>


<main class="ui main container text">
  <h1 class="ui horizontal divider">
    Login
  </h1>

  <!-- BEJELENTKEZŐ ŰRLAP -->
  <form class="ui form" method="post" action="../controller/auth.php">
    <div class="field">
      <label>Username</label>
      <input type="text" name="username" placeholder="Username">
    </div>
    <div class="field">
      <label>Password</label>
      <input type="password" name="password" placeholder="Password">
    </div>
    <div class="field">
      <button type="submit" class="ui button">Login</button>
      <a href="signup.php">Sign up for a new account</a>
    </div>
    <?php foreach (Message::getMessages() as $message) : ?>
      <?= $message ?>
    <?php endforeach; ?>
  </form>
  <!-- ŰRLAP VÉGE -->
</main>