<?php

include("utils/init.php");

$creditCards = $database
  ->query("SELECT * FROM `creditcards`;")
  ->fetchAll(PDO::FETCH_CLASS, "CreditCard");

$transactions = $database
  ->query("SELECT `id`, `vendor`, `amount`, `currency` FROM `transactions`;")
  ->fetchAll(PDO::FETCH_CLASS, "Transaction");

// Read input
if (isset($_GET["creditcard"])) {
  $inputs["creditCardNumber"] = htmlentities($_GET["creditcard"]);
}

// Validate input
if (isset($inputs["creditCardNumber"])) {
  if (!preg_match("/^[0-9-]+$/", $inputs["creditCardNumber"])) {
    $errors[] = "Credit card number may only contain numbers and the '-' symbol";
  }

  $parts = explode("-", $inputs["creditCardNumber"]);

  if (count($parts) !== 4) {
    $errors[] = "The credit card must be 4 '-' separated sections";
  }
}

?>
<!doctype html>
<html>
<head>
  <link rel="stylesheet" href="styles/index.css">
</head>

<body>
  <nav class="menubar">
    <a href="index.php" class="active">Transactions</a>
    <a href="new-transaction.php">New transaction</a>

    <!--
    <div class="user-menu">
      <span>Logged in as <strong>User</strong></span>
      <a href="login.php">Logout</a>
    </div>
    -->

  </nav>

  <h1>Hello User</h1>

  <form action="index.php" method="get">
    <select name="creditcard">
      <?php foreach ($creditCards as $creditCard): ?>
        <option <?= ($inputs["creditCardNumber"] ?? "") === $creditCard->cardnumber ? "selected" : "" ?>>
          <?= $creditCard->cardnumber ?>
        </option>
      <?php endforeach; ?>
    </select>
    <button type="submit">Search</button>
  </form>

  <?php if (isset($inputs["creditCardNumber"])): ?>
    <?php if (count($errors)): ?>
    <ul>
      <?php foreach ($errors as $error) : ?>
      <li class="error"><?= $error ?></li>
      <?php endforeach; ?>
    </ul>
    <?php else: ?>
    <div class="success">Credit card number valid</div>
    <?php endif; ?>
  <?php endif; ?>

  <?php if (isset($inputs["creditCardNumber"]) && count($errors) === 0) : ?>
    <h2>Transactions for <?= $inputs["creditCardNumber"] ?></h2>
    <table>
      <tr>
        <th>Vendor</th>
        <th>Amount</th>
      </tr>
      <?php foreach ($transactions as $transaction): ?>
      <tr>
        <td><?= $transaction->vendor ?></td>
        <td><?= $transaction->getAmount() ?></td>
      </tr>
      <?php endforeach; ?>
    </table>
  <?php endif; ?>
</body>
</html>