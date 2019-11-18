<?php 
require_once("utils.php");
require_once("filestorage.php");

$expenses_store = new FileStorage("storage/expenses.json");

if (verify_post("amount")) {
  $amount = $_POST["amount"];

  // ! Eltárolom egy fájlba (adatbázisba)
  $expenses_store->add([
    "timestamp" => time(),
    "amount" => $amount
  ]);
}

$balance = 0;
foreach ($expenses_store->getContents() as $expense) {
  $balance += $expense["amount"];
}

?>
<!doctype html>

<head>
  <title>Expense manager</title>
</head>

<body>
  <form action="index.php" method="post">
    <input type="number" name="amount">
    <button type="submit">Send</button>
  </form>

  <h1>Balance: <?= $balance ?></h1>
  
  <h2>Transaction history</h2>
  <table>
    <tr><th>Time</th><th>Amount</th></tr>
    <?php foreach ($expenses_store->getContents() as $expense) : ?>
      <tr>
        <td><?= date("Y. m. d. H:i:s", $expense["timestamp"]) ?></td>
        <td><?= $expense["amount"] ?></td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>