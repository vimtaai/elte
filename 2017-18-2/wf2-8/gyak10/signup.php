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
    Sign up
  </h1>

  <!-- BEJELENTKEZŐ ŰRLAP -->
  <form class="ui form" method="post">
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
  </form>
  <!-- ŰRLAP VÉGE -->
</main>