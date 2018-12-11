<?php

print_r($_POST);
print_r($_FILES);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Fájlbeadó</title>
</head>
<body>
  <form method="post" enctype="multipart/form-data">
    <label>Neptun-kód: </label>
    <input type="text" name="neptun">
    <br>
    <label>Feladat: </label>
    <select name="feladat">
      <option>1. feladat</option>
      <option>2. feladat</option>
    </select>
    <br>
    <input type="file" name="fajl">
    <br>
    <input type="submit" value="Bead">
  </form>
</body>
</html>