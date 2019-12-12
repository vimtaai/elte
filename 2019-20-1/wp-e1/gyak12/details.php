<?php
require_once("_init.php");
authorize(LOGGED_IN);

$user_id = $_SESSION["user_id"];

$expenses_store = new FileStorage("storage/expenses/${user_id}.json");

if (!verify_get("id")) {
  redirect("index.php");
}

$expense = $expenses_store->find($_GET["id"]);
?>
<?php require("partials/header.php"); ?>

<h1>Transaction details</h1>

<dl>
  <dt>Transaction id</dt>
  <dd><?= $_GET["id"] ?></dd>
</dl>
<dl>
  <dt>Transaction time</dt>
  <dd><?= date("Y. m. d. H:i:s", $expense["timestamp"]) ?></dd>
</dl>
<dl>
  <dt>Balance change</dt>
  <dd><?= $expense["amount"] ?></dd>
</dl>

<a href="index.php" class="ui button">Back</a>

<?php require("partials/footer.php"); ?>