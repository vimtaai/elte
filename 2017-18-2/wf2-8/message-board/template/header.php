<!doctype html>

<meta charset="utf-8">
<title>Üzenőfal</title>
<link rel="stylesheet" href="https://tinyurl.com/wf2semantic">

<div class="ui secondary pointing menu">
  <a class="item" href="list-posts.php">Messages</a>
  <div class="right menu">
    <?php if (isLoggedIn()) : ?>
      <span class="ui item">
        <i class="ui user icon"></i>
        <strong><?= $_SESSION['user']['username'] ?></strong>
      </span>
      <a class="ui item" href="../controller/logout.php">Logout</a>
    <?php else : ?>
      <a class="ui item" href="signup.php">Register</a>
      <a class="ui item" href="login.php">Login</a>
    <?php endif; ?>
  </div>
</div>

<main class="ui main container text">