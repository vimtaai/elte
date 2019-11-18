<?php
require_once("utils.php");

$token_file = "data/tokens.json";

$messages = [];

if (verify_get("url")) {
  $url = $_GET["url"];

  $token_list = read_from_json($token_file);

  if (isset($token_list[$url])) {
    redirect($token_list[$url]);
  } else {
    // ! Új hibaüzenet generálása
    $messages[] = [
      "text" => "Invalid token.",
      "type" => "error"
    ];
  }
}

if (verify_post("url")) {
  $url = $_POST["url"];

  
  // Kiolvasom, hogy jelenleg miket tárolok
  $token_list = read_from_json($token_file);
  
  do {
    $token = bin2hex(random_bytes(4));
  } while(isset($token_list[$token]));

  // Belerakom az új tokent
  $token_list[$token] = $url;

  // Visszaírom a változást
  write_to_json($token_file, $token_list);

  $messages[] = [
    "text" => "Token generated for ${url}: ${token}",
    "type" => "success"
  ];
}

?>
<meta charset="utf-8">

<form method="post" action="index.php">
    <input type="url" name="url">
    <button type="submit">Shorten</button>
</form>

<?php foreach ($messages as $message): ?>
  <div class="message <?= $message["type"] ?>">
    <?= $message["text"] ?>
  </div>
<?php endforeach; ?>

<!-- {{#messages}}
  <div class="message {{type}}">
    {{text}}
  </div>
{{/messages}} -->


