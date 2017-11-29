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
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active"><a class="nav-link" href="index.php">Feladatok</a></li>
      <li class="nav-item"><a class="nav-link" href="feladatlista.php">Feltöltött fájlok</a></li>
    </ul>
    <form action="login.php" class="form-inline my-2 my-lg-0 float-right">
      <input class="form-control mr-sm-2 bg-primary text-white" type="text" placeholder="Felhasználó">
      <input class="form-control mr-sm-2 bg-primary text-white" type="text" placeholder="Jelszó">
      <input class="btn btn-secondary" type="submit" value="Login">
    </form>
  </nav>

  <main class="container">
    <ol class="breadcrumb mt-2">
      <li class="breadcrumb-item"><a href="index.php">Feladatok</a></li>
    </ol>

    <h3 class="py-2">Feladatok</h3>

    <table class="table table-striped table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>Feladat neve</th>
          <th>Rövid leírás</th>
          <th>Határidő</th>
          <th>Beadás</th>
        </tr>
      </thead>
      <tbody>

        <!-- Feldat eleje -->
        <tr>
          <td>JavaScript beadandó (DOM)</td>
          <td>Adatszerkezet-vizualizáció és művelet-implementáció</td>
          <td class="text-danger">2017.11.19. 23:59</td>
          <td>
            <a href="bead.php" class="btn btn-secondary btn-sm btn-block disabled">Feladat beadása</a>
          </td>
        </tr>
        <!-- Feldat vége -->

        <tr>
          <td>JavaScript beadandó (canvas)</td>
          <td>Grafikon-megjelenítő polinomok ábrázolására</td>
          <td class="text-success">2017.12.31. 23:59</td>
          <td>
            <a href="bead.php" class="btn btn-success btn-sm btn-block">Feladat beadása</a>
          </td>
        </tr>
        <tr>
          <td>PHP beadandó</td>
          <td>TBA</td>
          <td class="text-success">2018.01.20.</td>
          <td>
            <a href="bead.php" class="btn btn-success btn-sm btn-block">Feladat beadása</a>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="thead-dark">
            <th colspan="4">Új feladat kiírása</th>
          </tr>
        </thead>
        <!-- Új feladat -->
        <tr>
          <td><input type="text" placeholder="Feladat neve" class="form-control"></td>
          <td><input type="text" placeholder="Rövid leírás" class="form-control"></td>
          <td><input type="datetime-local" placeholder="Határidő" class="form-control"></td>
          <td>
            <input type="submit" class="btn btn-primary btn-block" value="Új feladat">
          </td>
        </tr>
        <!-- Új feladat vége -->
      </tfoot>
    </table>
  </main>
</body>
</html>