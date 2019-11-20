<?php
// ! Define a constant
// define("TOKENS_FILE", "tokens.json");
const TOKENS_FILE = "tokens.json";

require_once("utils.php");
require_once("filestorage.php");

$token_storage = new JSONStorage(TOKENS_FILE);

if (verify_get("url")) {
  $token = $_GET["url"];

  $url = $token_storage->contents[$token];

  redirect($url);
}

if (verify_post("url_to_shorten")) {
  $url = $_POST["url_to_shorten"];
  $encoded_url = generate_token();

  $tokens->contents[$encoded_url] = $url;
}

?>
<!doctype html>
<body>
    <form action="index.php" method="post">
        <input type="url" name="url_to_shorten">
        <button type="submit">"Shorten"</button>
    </form>
    <?= $encoded_url ?? "Please provide a URL" ?>

    <table>
      <tr>
        <th>Token</th>
        <th>URL</th>
      </tr>
      <?php foreach ($token_storage->contents as $token => $url) : ?>
        <tr><td><?= $token ?></td><td><?= $url ?></td></tr>
      <?php endforeach; ?>
    </table>
</body>