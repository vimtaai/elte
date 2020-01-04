<?php

require_once("utils/_init.php");

if (verify_get("id")) {
  // $avenger = $avenger_store->find($_GET["id"]);
  $avengers = $avenger_store->findAll();
  foreach($avengers as $a) {
    if ($a["id"] === $_GET["id"]) {
      $avenger = $a;
      break;
    }
  }
}

?>
<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="http://webprogramozas.inf.elte.hu/webprog/zh/avengers/index.css">

<div class="container">
  <div class="row">
    <div class="col-lg">
      <h2>Avengers</h2>
      <div class="card">
        <div class="row no-gutters">
          <div class="col-md-3">
            <span class="card-img avenger <?= str_replace(" ", "-", strtolower($avenger["name"])) ?>" style="width: 180px; height: 240px;">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h3 class="card-title"><?= $avenger["name"] ?></h3>
              <dl class="row">
                <dt class="col-sm-3">Real name</dt>
                <dd class="col-sm-9">
                  <?= $avenger["real_name"] ?>
                </dd>
                <dt class="col-sm-3">Terrial</dt>
                <dd class="col-sm-9">
                  <?= $avenger["terrial"] ? "Yes" : "No" ?>
                </dd>
                <dt class="col-sm-3">Strength</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-primary"><?= $avenger["strength"] ?></span>
                </dd>
                <dt class="col-sm-3">Speed</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-success"><?= $avenger["speed"] ?></span>
                </dd>
                <dt class="col-sm-3">Durability</dt>
                <dd class="col-sm-9">
                  <span class="badge badge-danger"><?= $avenger["durability"] ?></span>
                </dd>
              </dl>
            </div>
            <a href="index.php">Back to the main page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>    