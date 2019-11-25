<?php

require_once("utils.php");
require_once("storage.php");

$ticket_store = new JSONStorage("data/tickets.json");
$errors = [];
$messages = [];

if (verify_post("title", "type", "description")) {
  // ! Előfeldolgozás
  $title = trim($_POST["title"]);
  $type = $_POST["type"];
  $description = trim($_POST["description"]);

  // ! Hibaellenőrzés
  if (strlen($title) === 0) {
    $errors[] = "Title must not be empty";
  }

  if (!in_array($type, ["error", "request", "question"])) {
    $errors[] = "Invalid ticket type";
  }

  if (strlen($description) === 0) {
    $errors[] = "Description must not be empty";
  }

  // ! Feldolgozás, ha nincs hiba
  if (count($errors) === 0) {
   $ticket = [
      "title" => $title,
      "type" => $type,
      "description" => $description
    ];

    $ticket_store->add($ticket);
    $messages[] = "Ticket `${title}` added";
  }
}

$tickets = $ticket_store->findAll();

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>TicketZ</title>
</head>
<body>
  <form action="index.php" method="post">
    <label for="title">Title</label>
    <input type="text" name="title" id="title">
    
    <label for="type">Type</label>
    <select name="type" id="type">
      <option value="error">Error</option>
      <option value="request">Request</option>
      <option value="question">Question</option>
    </select>

    <label for="description">Description</label>
    <textarea name="description" id="description"></textarea>

    <button type="submit">Send Ticket</button>
  </form>

  <?php foreach ($errors as $error) : ?>
  <div class="error"><?= $error ?></div>
  <?php endforeach; ?>

  <?php foreach ($messages as $message) : ?>
  <div class="message"><?= $message ?></div>
  <?php endforeach; ?>

  <table>
    <tr>
      <th>Ticket №</th>
      <th>Title</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <?php foreach($tickets as $id => $ticket) : ?>
    <tr>
      <td><?= $id ?></td>
      <td><?= $ticket["title"] ?></td>
      <td><?= $ticket["type"] ?></td>
      <td><?= $ticket["description"] ?></td>
    </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>