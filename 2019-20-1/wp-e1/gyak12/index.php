<?php
require_once("_init.php");
authorize(LOGGED_IN);

$user_id = $_SESSION["user_id"];

$expenses_store = new FileStorage("storage/expenses/${user_id}.json");

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
<?php require("partials/header.php"); ?>

<form action="index.php" method="post" class="ui form">
  <div class="field">
    <input type="number" name="amount">
  </div>
  <button type="submit" class="ui button primary">Send</button>
</form>

<h1>Balance: <?= $balance ?></h1>

<h2>Transaction history</h2>
<table class="ui celled table">
  <thead>
    <tr><th>Time</th><th>Amount</th><th>Actions</th></tr>
  </thead>
  <tbody>
    <?php foreach ($expenses_store->getContents() as $id => $expense) : ?>
      <tr>  
        <td><?= date("Y. m. d. H:i:s", $expense["timestamp"]) ?></td>
        <td><?= $expense["amount"] ?></td>
        <td>
          <button data-id="<?= $id ?>" class="ui red button">×</button>
          <a href="details.php?id=<?= $id ?>" class="ui button">Details</a>
        </td>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>

<script type="module">
import { delegate } from "./utils.js";

async function handleDeleteClick(event) {
  const id = this.dataset.id;

  const response = await fetch("api/delete_expense.php?expense_id=" + id);

  if (response.ok) {
    const row = this.closest("tr");
    row.parentNode.removeChild(row);
  }
}
delegate(document.querySelector("table"), "click", "button", handleDeleteClick);
</script>

<?php require("partials/footer.php"); ?>