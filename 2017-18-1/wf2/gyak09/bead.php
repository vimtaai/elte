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
      <li class="nav-item active"><a class="nav-link" href="index.php">Feladatok</a></li>
      <li class="nav-item"><a class="nav-link" href="feladatlista.php">Feltöltött fájlok</a></li>
    </ul>
  </nav>

  <main class="container">
    <ol class="breadcrumb mt-2">
      <li class="breadcrumb-item"><a href="index.php">Feladatok</a></li>
      <li class="breadcrumb-item"><a href="feladatlista.php">Feladat beadása (PHP beadandó)</a></li>
    </ol>

    <h3 class="py-2">Feladat beadása</h3>

    <form method="post" action="bead.php">
      <fieldset>
        <legend>PHP beadandó</legend>
        <section class="row">
          <div class="col-sm-6">
            <div class="row">
              <div class="form-group col-md-8 col-sm-12">
                <label for="neptun">Neptun kód</label>
                <input type="text" class="form-control col-md-6 col-sm-8" id="neptun" pattern="[0-9a-zA-Z]{6}" required>
                <small class="form-text text-muted">Add meg a Neptun kódodat, hogy be lehessen azonoístani a beadandódat.</small>
              </div>
              <div class="form-group col-md-8 col-sm-12">
                <label for="fajl">Feltöltendő fájl</label>
                <input type="file" class="form-control col-sm-12" id="fajl" required>
                <small class="form-text text-muted">A feltöltendő fájl mérete nem haladhatja meg a 4 MB-ot.</small>
              </div>
              <div class="form-group col-md-8 col-sm-12">
                <input type="submit" class="btn btn-lg btn-success" value="Feltöltés">
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <h4>Mit kell beadni?</h4>
            <p>
              Beadni egy darab fájt kell. Amennyiben a megoldás több fájlból áll, akkor azt egy tömörített állomány formájában kell beadni.
            </p>
          </div>
        </section>
      </fieldset>
    </form>

    <!-- Ide jönnek majd az üzenetek -->
    
    <!-- Üzenetek vége -->
  </main>
</body>
</html>