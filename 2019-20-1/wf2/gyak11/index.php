<?php

// ! Debug
// var_dump($_POST);
// var_dump($_FILES);

// ! Csatlakozok az adatbázishoz
// ? http://webprogramozas.inf.elte.hu/phpmyadmin
// ?                          szerver      fhnev     jelszo    adatbazis
$connection = mysqli_connect("localhost", "wp1c0x", "wp1c0x", "wf2_wp1c0x");

// ! Ha érkezett fájl
if (count($_FILES) > 0) {
  $file = $_FILES["submitted_file"];
  $neptun = $_POST["neptun"];

  $new_filename = 
    "uploads/" . date("y-m-d-H-i-s") . "-". rand(100, 999) . "-" . $file["name"]; 

  // ! helyére mozgatjuk a fájlt
  move_uploaded_file($file["tmp_name"], $new_filename);
  // ! eltároljuk az adatbázisban
  $query = mysqli_prepare(
    $connection,
    "INSERT INTO `uploads` (`user`, `filename`, `path`) VALUES (?, ?, ?);"
  );
  // ? típusok: s: string, i: integer, d: date
  // $user = "ANONYM";
  mysqli_stmt_bind_param($query, "sss", $neptun, $file["name"], $new_filename);
  mysqli_execute($query);
}

// ! adatok lekérdezése
$query = mysqli_prepare($connection, "SELECT * FROM `uploads`;");
mysqli_execute($query);
// ? 1. param: lekérdezés
// ? 2..x. param: változónevek, amibe az egyes mezők értékei kerülnek
// ! pont annyi változót kell megadni, ahány mezőt lekérdezek!
mysqli_stmt_bind_result($query, $id, $upload_time, $user, $file, $path);

$uploads = [];
while (mysqli_stmt_fetch($query)) {
  $uploads[] = [
    "id" => $id,
    "upload_time" => $upload_time,
    "user" => $user,
    "file" => $file,
    "path" => $path
  ];
}

// var_dump($uploads);
$password = '$2y$10$N5eA774TkJWVhV/mAK5IH.q3F0pcpiEx.QXrb1BX9F8MNdxSY/JrO';

$password_ok = false;
if (isset($_POST["password"])) {
  $password_ok = password_verify($_POST["password"], $password);
}

?>
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Fájlfeltöltő</title>
</head>
<body>
  <form action="index.php" method="post" enctype="multipart/form-data">
    Neptun kód: <input type="text" name="neptun">
    Fájl: <input type="file" name="submitted_file">
    <button type="submit">Feltöltés</button>
  </form>

  <form action="index.php" method="post">
    Jelszó: <input type="password" name="password">
    <button type="submit">Mutasd a beadott fájlokat</button>
  </form>

  <?php if ($password_ok) : ?>
  <table>
    <?php foreach ($uploads as $upload): ?>
    <tr>
      <td><?= $upload["upload_time"] ?></td>
      <td><?= $upload["user"] ?></td>
      <td>
        <a href="<?= $upload["path"] ?>"><?= $upload["file"] ?></a>
      </td>
    </tr>
    <?php endforeach; ?>
  </table>
  <?php endif; ?>
</body>
</html>