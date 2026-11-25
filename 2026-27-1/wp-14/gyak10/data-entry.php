<?php

include("utils/init.php");

if (isset($_POST["action"])) {
  $inputs["action"] = $_POST["action"];
}

if (keys_exist($_POST, ["cardnumber", "name"])) {
  $inputs["cardnumber"] = htmlentities($_POST["cardnumber"]);
  $inputs["name"] = htmlentities($_POST["name"]);
}

if (keys_exist($_POST, ["creditcard_id", "vendor", "amount", "currency"])) {
  $inputs["creditcard_id"] = (int)$_POST["creditcard_id"];
  $inputs["vendor"] = htmlentities($_POST["vendor"]);
  $inputs["amount"] = (int)$_POST["amount"];
  $inputs["currency"] = htmlentities($_POST["currency"]);
}

if ( 
  keys_exist($inputs, ["action", "cardnumber", "name"]) &&
  $inputs["action"] === "new-card" 
) {
  if (!preg_match("/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/", $inputs["cardnumber"])) {
    $errors[] = "Credit card number may only contain numbers and the '-' symbol";
  }

  if (strlen($inputs["name"]) === 0) {
    $errors[] = "Name must not be empty";
  }

  if (count($errors) === 0) {
    $statement = $database->prepare("INSERT INTO `creditcards`
      (`cardnumber`, `name`) VALUES (:cardnumber, :name)
    ");

    $statement->execute([
      "cardnumber" => $inputs["cardnumber"],
      "name" => $inputs["name"]
    ]);

    $messages[] = "New card (" . $inputs["name"] . ") saved.";
  }
}

// Loaded after the card insert above so a new card is included
$creditCards = $database
  ->query("SELECT * FROM `creditcards`;")
  ->fetchAll(PDO::FETCH_CLASS, "CreditCard");

if (
  keys_exist($inputs, ["action", "creditcard_id", "vendor", "amount", "currency"]) &&
  $inputs["action"] === "new-transaction"
) {
  if (strlen(trim($inputs["vendor"])) === 0) {
    $errors[] = "Vendor must not be empty";
  }

  // (int) turns non-numeric input into 0, so 0 also catches invalid amounts
  if ($inputs["amount"] === 0) {
    $errors[] = "Amount must be a non-zero number";
  }

  if (!in_array($inputs["currency"], ["HUF", "USD", "EUR"])) {
    $errors[] = "Unknown currency";
  }

  if (!in_array($inputs["creditcard_id"], array_column($creditCards, "id"))) {
    $errors[] = "The selected credit card does not exist";
  }

  if (count($errors) === 0) {
    $statement = $database->prepare("INSERT INTO `transactions`
      (`creditcard_id`, `vendor`, `amount`, `currency`)
      VALUES (:creditcard_id, :vendor, :amount, :currency)
    ");

    $statement->execute([
      "creditcard_id" => $inputs["creditcard_id"],
      "vendor" => $inputs["vendor"],
      "amount" => $inputs["amount"],
      "currency" => $inputs["currency"]
    ]);

    $messages[] = "New transaction (" . $inputs["vendor"] . ") saved.";
  }
}

?>
<?php include(ROOT . "/partials/header.php"); ?>

<h2>New transaction</h2>

<form action="data-entry.php" method="post">
  <input type="hidden" name="action" value="new-transaction">
  <div class="form-row">
    <label>Credit card
      <select name="creditcard_id" required>
        <?php foreach ($creditCards as $creditCard): ?>
          <option value="<?= $creditCard->id ?>">
            <?= $creditCard->cardnumber ?>
          </option>
        <?php endforeach; ?>
      </select>
    </label>
    <label>Vendor
      <input type="text" name="vendor" required>
    </label>
  </div>
  <div class="form-row">
    <label>Amount
      <input type="number" name="amount" required>
    </label>
    <label>Currency
      <select name="currency" required>
        <option>HUF</option>
        <option>USD</option>
        <option>EUR</option>
      </select>
    </label>
    <button type="submit">Add transaction</button>
  </div>
</form>

<h2>New credit card</h2>

<form action="data-entry.php" method="post">
  <input type="hidden" name="action" value="new-card">
  <label>Card number
    <input type="text" name="cardnumber" placeholder="1234-1234-1234-1234" required>
  </label>
  <label>Name
    <input type="text" name="name">
  </label>
  <button type="submit">Add credit card</button>
</form>

<?php if (count($errors)): ?>
  <ul>
    <?php foreach ($errors as $error) : ?>
    <li class="error"><?= $error ?></li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>
<?php if (count($messages)): ?>
  <ul>
    <?php foreach ($messages as $message) : ?>
    <li class="success"><?= $message ?></li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>

<?php include(ROOT . "/partials/footer.php");
