<?php

// ! Debug
// var_dump($_POST);
// var_dump($_FILES);

// ! Csatlakozok az adatbázishoz
// ?            szerver      adatbázis     fhnev     jelszo
mysqli_connect("localhost", "wf2_wp1c0x", "wp1c0x", "wp1c0x");

// ! Ha érkezett fájl
if (count($_FILES) > 0) {
  $file = $_FILES["submitted_file"];

  $new_filename = 
    "uploads/" . date("y-m-d-H-i-s") . "-". rand(100, 999) . "-" . $file["name"]; 

  move_uploaded_file($file["tmp_name"], $new_filename);
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
    <input type="file" name="submitted_file">
    <button type="submit">Feltöltés</button>
  </form>
</body>
</html>