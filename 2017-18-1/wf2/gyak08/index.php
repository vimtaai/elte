<?php

class Feladat {
  public $kerdes;
  public $valaszok;
  public $helyesValasz;

  public function __construct($kerdes, $valaszok, $helyesValasz) {
    $this->kerdes = $kerdes;
    $this->valaszok = $valaszok;
    $this->helyesValasz = $helyesValasz;
  }
}

$feladatok = [
  new Feladat('Hány lába van a lónak?',
              [1, 2, 4, 6], 2),
  new Feladat('Milyen színű az ég?',
              ['narancs', 'lila', 'kék', 'barna'], 2),
  new Feladat('Az alábbiak közül melyik gyümölcs?',
              ['alma', 'répa', 'hagyma', 'krumpli'], 0)         
];


if (count($_POST) > 0) {
  $db = 0;
  foreach($feladatok as $fInd => $feladat) {
    if ($_POST['kerdes' . $fInd] == $feladat->helyesValasz) {
      $db++;
    }
  }
}


//shuffle($feladatok);

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kvíz</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
</head>
<body>
  <form method="post" class="container">
    <h1>Kvíz</h1>
    <div class="row">
      <?php if (isset($db)) : ?>
        <div>
          <?= $db ?> helyes válaszod volt.
        </div>
      <?php endif; ?>
      <?php foreach ($feladatok as $fInd => $feladat) : ?>
        <div class="col m5 offset-m1 card teal lighten-5">
          <div class="card-content">
            <span class="card-title"><?= $fInd+1 ?>. kérdés</span>
            <p><?php echo $feladat->kerdes; ?></p>
            <div class="card-action">
              <?php foreach ($feladat->valaszok as $vInd => $valasz) : ?>
              <p>
                <input name="kerdes<?= $fInd ?>" type="radio" 
                       id="kerdes<?= $fInd ?>_<?= $vInd ?>" 
                       value="<?= $vInd ?>">
                <label for="kerdes<?= $fInd ?>_<?= $vInd ?>"><?= $valasz ?></label>
              </p>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
    <div class="row">
      <div class="col m6 offset-m1">
        <input type="submit" class="btn-large" name="action">
      </div>
    </div>
  </form>
</body>
</html>