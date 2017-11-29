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
    </ol>

    <h3 class="py-2">Feltöltött fájlok</h3>

    <div class="row">
      <!-- Kártya eleje -->
      <div class="col-md-4 col-sm-6">
        <a href="fajllista.php" class="card-link text-white">
          <section class="card bg-primary h-100">
            <div class="card-body">
              <h4 class="text-danger">JavaScript beadandó (DOM)</h4>
              <p>Adatszerkezet-vizualizáció és művelet-implementáció</p>
            </div>
            <footer class="card-footer">
              <strong>Határidő: </strong>
              <time class="text-danger">2017.11.19. 23:59</time>
            </footer>
          </section>
        </a>
      </div>
      <!-- Kártya vége -->

      <div class="col-md-4 col-sm-6">
        <a href="fajllista.php" class="card-link text-white">
          <section class="card bg-primary h-100">
            <div class="card-body">
              <h4 class="text-success">JavaScript beadandó (canvas)</h4>
              <p>Grafikon-megjelenítő polinomok ábrázolására</p>
            </div>
            <footer class="card-footer">
              <strong>Határidő: </strong>
              <time class="text-success">2017.12.31. 23:59</time>
            </footer>
          </section>
        </a>
      </div>
      <div class="col-md-4 col-sm-6">
        <a href="fajllista.php" class="card-link text-white">
          <section class="card bg-primary h-100">
            <div class="card-body">
              <h4 class="text-success">PHP beadandó</h4>
              <p>TBA</p>
            </div>
            <footer class="card-footer">
              <strong>Határidő: </strong>
              <time class="text-success">2018.01.20. 23:59</time>
            </footer>
          </section>
        </a>
      </div>
    </div>
  </main>
</body>
</html>