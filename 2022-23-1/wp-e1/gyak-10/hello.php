<?php
require_once("utils.php");

const MESSAGES_FILE = "data/messages.json";

$messages = json_decode(file_get_contents(MESSAGES_FILE), true) ?? [];

if (check_all_keys_in_post("name", "message")) {
  $name = $_POST["name"];
  $message = $_POST["message"];

  $messages[] = [
    "name" => $name,
    "message" => $message,
    "date" => date("Y-m-d H:i:s"),
    "ip" => $_SERVER["REMOTE_ADDR"]
  ];

  file_put_contents(MESSAGES_FILE, json_encode($messages));
}
?>
<form method="post" action="hello.php">
  <label for="name">Your name:</label><br>
  <input type="text" id="name" name="name">
  <br>
  <label for="message">Your message:</label><br>
  <textarea id="message" name="message"></textarea>
  <br>
  <button type="submit">Send</button>
</form>

<?php foreach($messages as $message): ?>
  <article>
    <h4>
      <?= $message["name"] ?>
      (<?= $message["date"] ?? "we don't know when" ?>)
      <em>@ <?= $message["ip"] ?? "we don't know where" ?></em>
    </h4>
    <p><?= htmlentities($message["message"]) ?></p>
  </article>
<?php endforeach; ?>