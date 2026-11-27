<?php
include("includes/init.php");

?>
<?php include("partials/header.php"); ?>

<form action="login.php" method="post">
  <h2>Log in</h2>
  <label>
    Email
    <input type="email" name="email" required>
  </label>
  <label>
    Password
    <input type="password" name="password" required>
  </label>
  <button type="submit">Log in</button>
</form>

<?php include("partials/footer.php"); ?>
