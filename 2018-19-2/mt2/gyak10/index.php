<?php
include "_db.php";

$errors = [];
$messages = [];
// Törlés
if (count($_POST) > 0) {
  // Ellenőrzés
  if ($_POST["ticket_id"] <= 0) {
    $errors[] = "Hibás azonosító!";
  }
  if (count($errors) === 0) {
    // Előfeldolgozás
    $id = (int)$_POST["ticket_id"];
    // Törlés
    $stmt = $conn->prepare("DELETE FROM `tickets` WHERE `id` = :id");
    $stmt->execute([
      ":id" => $id
    ]);
    $errorInfo = $stmt->errorInfo();
    if ($errorInfo[0] !== "00000") {
      $errors[] = "SQL hiba: " . $errorInfo[2];
    } else {
      $messages[] = "A(z) " . $id . " azonosítójú bejegyzés törölve";
    }
  }
}

// Prepared statement
// Python, Javascript: alma.korte
// PHP: $alma->korte
$stmt = $conn->prepare("SELECT * FROM `tickets`;");
$stmt->execute();
// FETCH_ASSOC: név-érték párok formájában
$tickets = $stmt->fetchAll(PDO::FETCH_ASSOC); 

// var_dump($tickets);
?>
<?php include "_header.php" ?>
<table class="table table-striped">
  <tr>
    <th>Azonosító</th>
    <th>Típus</th>
    <th>Állapot</th>
    <th>Beküldés ideje</th>
    <th>Hiba szövege</th>
    <th>&nbsp;</th>
  </tr>
  <?php foreach ($tickets as $ticket) : ?>
    <tr>
      <td><?= $ticket["id"] ?></td>
      <td><?= $ticket["type"] ?></td>
      <td><?= $ticket["status"] ?></td>
      <td><?= $ticket["recieved"] ?></td>
      <td><?= $ticket["description"] ?></td>
      <td>
        <form method="post" action="index.php">
          <input type="hidden" name="ticket_id" value="<?= $ticket["id"] ?>">
          <button class="btn btn-outline-danger" type="submit">
            <i class="fa fa-trash"></i>
          </button>
        </form>
      </td>
    </tr>
  <?php endforeach; ?>
</table>

<?php include "_footer.php" ?>




