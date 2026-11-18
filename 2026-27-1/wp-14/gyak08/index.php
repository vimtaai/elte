<?php
class Transaction {
  public $vendor;
  public $amount;
  private $currency;

  public function __construct(string $vendor, int $amount, string $currency) {
    $this->vendor = $vendor;
    $this->amount = $amount;
    $this->currency = $currency;
  }

  public function getAmount(): string {
    return $this->amount . " " . $this->currency;
  }
}

$creditCards = [
  "1234-1234-1234-1234",
  "2345-2345-2345-2345"
];

$transactions = [
  new Transaction("Gyros Master", "-42353", "HUF"),
  new Transaction("CBA", "-1234", "USD")
];

// Input
$inputs = [];
$errors = [];

if (isset($_GET["creditcard"])) {
  $inputs["creditCardNumber"] = htmlentities($_GET["creditcard"]);
}

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
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Hello User</h1>

  <form action="index.php" method="get">
    <select name="creditcard">
      <?php foreach ($creditCards as $creditCard): ?>
        <option <?= ($inputs["creditCardNumber"] ?? "") === $creditCard ? "selected" : "" ?>>
          <?= $creditCard ?>
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