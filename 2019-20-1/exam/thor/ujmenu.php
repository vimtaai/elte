<?php

require_once("utils/_init.php");

$foods = $food_store->findAll();

if (verify_post("nap", "mettol", "meddig", "etelek", "kcal")) {
    if (empty($_POST["nap"])) {
        $errors[] = "Nap megadása kötelező";
    }

    if (!preg_match("/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/", $_POST["nap"]) ||
        !strtotime($_POST["nap"])) {
        $errors[] = "Nap dátumformátuma rossz";
    }

    if (empty($_POST["mettol"])) {
        $errors[] = "Mettől megadása kötelező";
    }

    if (!preg_match("/^[0-9]{2}:[0-9]{2}$/", $_POST["mettol"]) ||
        !strtotime($_POST["mettol"])) {
        $errors[] = "Mettől időformátuma rossz";
    }

    if (empty($_POST["meddig"])) {
        $errors[] = "Meddig megadása kötelező";
    }

    if (!preg_match("/^[0-9]{2}:[0-9]{2}$/", $_POST["meddig"]) ||
        !strtotime($_POST["meddig"])) {
        $errors[] = "Meddig időformátuma rossz";
    }

    if (empty($_POST["etelek"])) {
        $errors[] = "Ételek megadása kötelező";
    }

    if (empty($_POST["kcal"])) {
        $errors[] = "kCal megadása kötelező";
    }

    if (!is_numeric($_POST["kcal"])) {
        $errors[] = "kCal nem szám";
    }

    if ($_POST["kcal"] < 0) {
        $errors[] = "kCal negatív";
    }

    if (empty($errors)) {
      $menus = $menu_store->findAll();
      $new = [
        "id" => $menus[count($menus)-1]["id"] + 1,
        "nap" => str_replace("-", ".", $_POST["nap"]),
        "mettol" => $_POST["mettol"] . ":00",
        "meddig" => $_POST["meddig"] . ":00",
        "etelek" => $_POST["etelek"],
        "kcal" => (int)$_POST["kcal"],
        "aktiv" => TRUE
      ];
      $menu_store->add($new);
      redirect("index.php");
    }
}

?>
<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/thor/index.css">

<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand text-light" href="index.php">Thor diétája</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Új menü</a>
    </li>
  </ul>
</nav>

<div class="container">
  <div class="row">
    <div class="col-md">
      <h2>Új menü felvétele</h2>

      <?php if (!empty($errors)) : ?>
      <div class="alert alert-danger" role="alert">
          <?php var_dump($errors); ?>
      </div>
      <?php endif; ?>

      <form action="" method="post" class="ujmenu">
        <div class="form-group">
          <label for="nap">Nap</label>
          <input type="date" name="nap" class="form-control" id="nap" required value="<?= $_POST["nap"] ?? "" ?>">
        </div>
        
        <div class="form-group">
          <label for="mettol">Mettől</label>
          <input type="time" name="mettol" class="form-control" id="mettol" required value="<?= $_POST["mettol"] ?? "" ?>">
        </div>

        <div class="form-group">
          <label for="meddig">Meddig</label>
          <input type="time" name="meddig" class="form-control" id="meddig" required value="<?= $_POST["meddig"] ?? "" ?>">
        </div>

        <div class="form-group">
          <label for="etelek">Ételek</label>
          <textarea name="etelek" class="form-control" id="etelek" placeholder="étel1,étel2" required><?= $_POST["etelek"] ?? "" ?></textarea>
          <small id="emailHelp" class="form-text text-muted">Ételek vesszővel felsorolt neve</small>
        </div>

        <div class="form-group">
          <label for="kcal">kCal</label>
          <input type="number" name="kcal" class="form-control" id="kcal" required value="<?= $_POST["kcal"] ?? "" ?>">
        </div>
        
        <div class="form-group row">
          <button type="submit" class="btn btn-primary">Új menü mentése</button>
        </div>
      </form>
    </div>

    <div class="col-md">
      <h2>Ételek</h2>
      <form class="etelek">
        <!-- alábbi ismétlendő -->
        <?php foreach ($foods as $food) : ?>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" id="<?= $food["id"] ?>" value="<?= $food["nev"] ?>" data-kcal="<?= $food["kcal"] ?>">
          <label class="form-check-label" for="<?= $food["id"] ?>"><?= $food["nev"] ?></label>
        </div>
        <?php endforeach; ?>
        <!-- idáig -->
      </form>
    </div>
  </div>
</div>
<script>

const foodInput = document.querySelector("#etelek");
const kcalInput = document.querySelector("#kcal");
const foodList = document.querySelector(".etelek");

function handleCheckboxClick(e) {
  if (!e.target.matches("input")) { return; }
  const checkboxes = foodList.querySelectorAll("input:checked");
  console.log(checkboxes);
  let foods = "";
  let kcal = 0;

  for (const checkbox of checkboxes) {
    foods += (foods === "" ? "" : ",") + checkbox.value;
    kcal += parseInt(checkbox.dataset.kcal);
  }

  foodInput.value = foods;
  kcalInput.value = kcal;
}
foodList.addEventListener("click", handleCheckboxClick);

</script>