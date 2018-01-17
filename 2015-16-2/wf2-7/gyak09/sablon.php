<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizza rendelés</title>
    <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">
</head>
<body class="container" style="background: url(pizza.jpg) fixed center center">
    <h1 style="color: white; text-shadow: 1px 1px 1px black, -1px -1px 1px black;">Pizza rendelés</h1>
    <form action="index.php" method="post" class="form-horizontal well panel">
        <fieldset>
            <legend>Milyen pizzát kérsz?</legend>
            <div class="form-group">
              <label for="tipus" class="col-lg-2 control-label">Pizza típusa</label>
              <div class="col-lg-10">
                <select class="form-control" id="tipus" name="tipus">
                    <?php foreach (PIZZAK as $azon => $pizza) : ?>
                        <option value="<?= $azon ?>">
                            <?= $pizza['nev'] ?> (<?= $pizza['ar'] ?> Ft)
                        </option>
                    <?php endforeach; ?>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="darab" class="col-lg-2 control-label">Darabszám</label>
              <div class="col-lg-10">
                <input type="number" class="form-control" id="darab" name="darab">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-2 control-label" for="vekony">Tészta</label>
              <div class="col-lg-10">
                <div class="radio">
                  <label>
                    <input type="radio" name="teszta" id="vekony" value="vekony">
                    Vékony
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="teszta" id="vastag" value="vastag">
                    Vastag
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default">Mégse</button>
                    <button type="submit" class="btn btn-primary">Megrendel</button>
                </div>
            </div>
        </fieldset>
        <?php if ($osszeg) : ?>
        <div class="alert alert-info">
            Az rendelésed ára: <?= $osszeg ?> Ft
        </div>
        <?php endif; ?>
        
        <?php foreach ($errors as $error) : ?>
        <div class="alert alert-danger">
            <?= $error ?>
        </div>
        <?php endforeach; ?>
    </form>
</body>
</html>