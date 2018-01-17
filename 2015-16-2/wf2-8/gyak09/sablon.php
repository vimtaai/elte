<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizza rendelés</title>
    <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.min.css">
</head>
<body class="container">
    <h1>Pizza rendelés</h1>
    <form action="index.php" method="post" class="form-horizontal">
        <fieldset>
            <legend>Milyen pizzát kérsz?</legend>
            <div class="form-group">
                <label for="tipus" class="col-lg-2 control-label">Pizza típusa</label>
                <select name="tipus" id="tipus" class="form-control col-lg-4">
                    <?php foreach (PIZZAK as $pizza => $ar) : ?>
                    <option value="<?= $pizza ?>"
                            <?= isset($data['tipus']) && $data['tipus'] == $pizza ? 'selected="selected"' : '' ?>>
                        <?= $pizza ?> (<?= $ar ?> Ft)
                    </option>
                    <?php endforeach; ?>
                </select>
            </div>
            <div class="form-group">
                <label for="darab" class="col-lg-2 control-label">Darabszám</label>
                <input type="number" name="darab" id="darab" class="form-control col-lg-4"
                       value="<?= $data['darab'] ?? 0 ?>">
            </div>
            <div class="form-group">
                <label for="vekony" class="col-lg-2 control-label">Vékony tészta</label>
                <input type="radio" name="teszta" id="darab" value="vekony"
                       <?= isset($data['teszta']) && $data['teszta'] == 'vekony' ? 'checked="checked"' : '' ?>>
            </div>
            <div class="form-group">
                <label for="vastag" class="col-lg-2 control-label">Vastag tészta</label>
                <input type="radio" name="teszta" id="darab" value="vastag"
                       <?= isset($data['teszta']) && $data['teszta'] == 'vastag' ? 'checked="checked"' : '' ?>>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default">Mégse</button>
                    <button type="submit" class="btn btn-primary">Megrendel</button>
                </div>
            </div>
        </fieldset>
        <?php if (isset($fizet)) : ?>
        <div class="alert alert-info">
            Az ön rendelése <?= $fizet ?> Ft
        </div>
        <?php endif; ?>
        <?php if ($errors) : ?>
        <?php foreach ($errors as  $error) : ?>   
            <div class="alert alert-danger">
                <?= $error ?>
            </div>
        <?php endforeach; ?>
        <?php endif; ?>
    </form>
</body>
</html>