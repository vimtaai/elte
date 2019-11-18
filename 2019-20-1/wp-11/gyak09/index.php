<?php
// ! Szuperglobális változók
// var_dump($_GET);

function array_check_all_keys($arr, $keys) {
  foreach ($keys as $key) {
    if (!isset($arr[$key])) {
      return FALSE;
    }
  }
  return TRUE;
}

function verify_get(...$required_keys) {
  return array_check_all_keys($_GET, $required_keys);
}

function verify_post(...$required_keys) {
  return array_check_all_keys($_POST, $required_keys);
}

if (verify_post("first_name", "last_name")) {
  // ! Előfeldogozás
  $first_name = $_POST["first_name"];
  $last_name = $_POST["last_name"];

  // ! Feldogozás
  $full_name = "${first_name} ${last_name}";
}

?>
<!doctype html>
<head>

</head>
<body>
  <form action="index.php" method="post">
    <input type="text" name="first_name">
    <input type="text" name="last_name">
    <button type="submit">Send</button>
    <!-- <input type="submit" value="Send">
    <input type="button" value="Send">
    <button>Send</button> -->
  </form>
  <?= $full_name ?? "<strong>No name provided yet.</strong>" ?>
</body>