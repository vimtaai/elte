<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title></title>
  <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css">
</head>
<body>
  <nav class="navbar navbar-expand navbar-dark bg-primary">
    <a class="navbar-brand" href="index.php">Beadandó-kezelő</a>
    <ul class="navbar-nav">
      <li class="nav-item"><a class="nav-link" href="index.php">Feladatok</a></li>
      <li class="nav-item active"><a class="nav-link" href="feladatlista.php">Feltöltött fájlok</a></li>
    </ul>
  </nav>

  <main class="container">
    <ol class="breadcrumb mt-2">
      <li class="breadcrumb-item"><a href="feladatlista.php">Feltöltött fájlok</a></li>
      <li class="breadcrumb-item"><a href="fajllista.php">JavaScript beadandó (DOM)</a></li>
    </ol>

    <h3 class="py-2">JavaScript beadandó (DOM)</h3>

    <table class="table table-striped table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Feltöltő</th>
          <th>Fájl neve</th>
          <th>Fájl mérete</th>
          <th>Feltöltés ideje</th>
          <th>Letöltés</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="5">
            <a href="feladatlista.php">Vissza a feladatokhoz</a>
          </td>
        </tr>

        <!-- Feldat eleje -->
        <tr>
          <td>WP1C0X</td>
          <td>wp1c0x.zip</td>
          <td>14.2 kB</td>
          <td>2017.11.29. 14:15</td>
          <td>
            <a href="#" class="btn btn-secondary btn-sm btn-block">Letöltés</a>
          </td>
        </tr>
        <!-- Feldat vége -->

        <tr>
          <td>WP1C0X</td>
          <td>wp1c0x_2.zip</td>
          <td>14.2 kB</td>
          <td>2017.12.01. 13:37</td>
          <td>
            <a href="#" class="btn btn-secondary btn-sm btn-block">Letöltés</a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</body>
</html>