<?php

include("utils/init.php");

$creditCards = $database
  ->query("SELECT * FROM `creditcards`;")
  ->fetchAll(PDO::FETCH_CLASS, "CreditCard");

// Read input
if (isset($_GET["creditcard"])) {
  $inputs["creditcard_id"] = (int)$_GET["creditcard"];
}

if (isset($inputs["creditcard_id"])) {
  $statement = $database->prepare("SELECT `id`, `vendor`, `amount`, `currency` FROM `transactions` WHERE `creditcard_id` = :id");
  $statement->execute(["id" => $inputs["creditcard_id"]]);
  $transactions = $statement->fetchAll(PDO::FETCH_CLASS, "Transaction");
}

?>
<?php include(ROOT . "/partials/header.php"); ?>

<form action="index.php" method="get">
  <select name="creditcard">
    <?php foreach ($creditCards as $creditCard): ?>
      <option 
        value="<?= $creditCard->id ?>"
        <?= ($inputs["creditCardNumber"] ?? "") === $creditCard->cardnumber ? "selected" : "" ?>
      >
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

<?php if (isset($transactions)): ?>
  <h2>Transactions</h2>
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
<?php else: ?>
  <h2>Please select a credit card</h2>
<?php endif; ?>

<?php include(ROOT . "/partials/footer.php");