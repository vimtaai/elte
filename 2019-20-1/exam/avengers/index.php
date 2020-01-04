<?php

require_once("utils/_init.php");
$avengers = $avenger_store->findAll();

$terrial = NULL;
if (verify_post("name", "strength", "speed", "durability", "avenger1", "avenger2")) {
  $name = $_POST["name"];
  $terrial = $_POST["terrial"] ?? NULL;
  $strength = $_POST["strength"];
  $speed = $_POST["speed"];
  $durability = $_POST["durability"];
  $avenger1 = $_POST["avenger1"];
  $avenger2 = $_POST["avenger2"];

  if ($name === "") {
    $errors[] = "Name is required";
  }

  if ($terrial === NULL) {
    $errors[] = "Terrial is required";
  }

  if ($strength === "") {
    $errors[] = "Strength is required";
  }
  
  if (!is_numeric($strength)) {
    $errors[] = "Strength is not an integer";
  }

  if ($strength < 1 || $strength > 100) {
    $errors[] = "Strength should be between 1 and 100";
  }

  if ($speed === "") {
    $errors[] = "Speed is required";
  }
  
  if (!is_numeric($speed)) {
    $errors[] = "Speed is not an integer";
  }

  if ($speed < 1 || $speed > 100) {
    $errors[] = "Speed should be between 1 and 100";
  }

  if ($durability === "") {
    $errors[] = "Durability is required";
  }
  
  if (!is_numeric($durability)) {
    $errors[] = "Durability is not an integer";
  }

  if ($durability < 1 || $durability > 100) {
    $errors[] = "Durability should be between 1 and 100";
  }

  if ($avenger1 === "") {
    $errors[] = "Avenger1 is required";
  }

  $expected_avenger1 = str_replace(" ", "-", strtolower($avenger1));
  // if (preg_match("/[A-Z]/", $avenger1) || preg_match("/ /", $avenger1)) {}

  if ($expected_avenger1 !== $avenger1) {
    $errors[] = "Avenger1's name should be dashed";
  }

  if ($avenger2 === "") {
    $errors[] = "Avenger2 is required";
  }

  $expected_avenger2 = str_replace(" ", "-", strtolower($avenger2));

  if ($expected_avenger2 !== $avenger2) {
    $errors[] = "Avenger2's name should be dashed";
  }

  if (empty($errors)) {
    $ok = TRUE;
    $mission_store->add([
      "id" => count($mission_store->findAll()) + 1,
      "name" => $name,
      "terrial" => $terrial === "1",
      "strength" => $strength,
      "speed" => $speed,
      "durability" => $durability,
      "avenger1" => $avenger1,
      "avenger2" => $avenger2
    ]);
  }
}

$missions = $mission_store->findAll();

?>
<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="http://webprogramozas.inf.elte.hu/webprog/zh/avengers/index.css">

<div class="container-fluid">
  <div class="row">
    <div class="col-md">
      <h2>Avengers</h2>
      <div class="card">
        <div class="card-body">
          <p class="card-text d-flex justify-content-end">
            <span class="mx-1 badge badge-primary">Strength</span>
            <span class="mx-1 badge badge-success">Speed</span>
            <span class="mx-1 badge badge-danger">Durablity</span>
          </p>
        </div>
        <ul class="list-group list-group-flush avengers-list">
          <?php foreach ($avengers as $avenger) : ?>
          <li class="list-group-item" data-id="<?= $avenger["id"] ?>">
            <div class="d-flex align-items-center p-1">
              <span class="avenger <?= str_replace(" ", "-", strtolower($avenger["name"])) ?>"></span>
              <h5 class="m-2 flex-fill">
                <a href="card.php?id=<?= $avenger["id"] ?>">
                  <?= $avenger["name"] ?>
                </a>
                <small class="text-muted">
                  <?= $avenger["real_name"] ?>
                  <?php if ($avenger["terrial"]): ?>
                    <i class="fas fa-globe-africa"></i>
                  <?php else: ?>
                    <i class="fas fa-rocket"></i>
                  <?php endif; ?>
                </small>
              </h5>
              <div class="d-flex flex-nowrap">
                <span class="mx-1 badge badge-primary"><?= $avenger["strength"] ?></span>
                <span class="mx-1 badge badge-success"><?= $avenger["speed"] ?></span>
                <span class="mx-1 badge badge-danger"><?= $avenger["durability"] ?></span>
              </div>
            </div>
            <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/avengers/noise.png">
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>

    <div class="col-md">
    <h2>Missions</h2>
      <div class="card mission-form">
        <h4>New mission</h4>
        <?php if (isset($ok)): ?>
        <div class="alert alert-success">
          Saved successfully
        </div>
        <?php endif; ?>

        <?php if (!empty($errors)): ?>
        <div class="alert alert-danger">
        <?php foreach ($errors as $error): ?>
        <?= $error ?>
        <?php endforeach; ?>
        </div>
        <?php endif; ?>

        <form action="index.php" method="post" class="card-body">
          <div class="form-group row">
            <label for="name" class="col-sm-5 col-form-label">Name</label>
            <input type="text" name="name" 
                   class="form-control col-sm-7" id="name" 
                   value="<?= $name ?? "" ?>">
          </div>
          <div class="form-group">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" 
                     name="terrial" id="terrial1" value="1"
                     <?= $terrial === "1" ? "checked" : "" ?>>
              <label class="form-check-label" for="terrial1">Terrial</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" 
                     name="terrial" id="terrial2" value="0"
                     <?= $terrial === "0" ? "checked" : "" ?>>
              <label class="form-check-label" for="terrial2">Space</label>
            </div>
          </div>
          <div class="form-group row">
            <label for="range1" class="col-sm-5 col-form-label">Strength</label>
            <input type="range" name="strength" 
                   class="form-control col-sm-5" id="range1" min="1" max="100"
                   value="<?= $strength ?? 50 ?>">
            <span class="col-sm-2"></span>
          </div>
          <div class="form-group row">
            <label for="range2" class="col-sm-5 col-form-label">Speed</label>
            <input type="range" name="speed" 
                   class="form-control col-sm-5" id="range2" min="1" max="100"
                   value="<?= $speed ?? 50 ?>">
            <span class="col-sm-2"></span>
          </div>
          <div class="form-group row">
            <label for="range3" class="col-sm-5 col-form-label">Durability</label>
            <input type="range" name="durability" 
                   class="form-control col-sm-5" id="range3" min="1" max="100"
                   value="<?= $durability ?? 50 ?>">
            <span class="col-sm-2"></span>
          </div>
          <div class="form-group row">
            <label for="avenger1" class="col-sm-5 col-form-label">Avenger1</label>
            <input type="text" name="avenger1" 
                   class="form-control col-sm-6" id="avenger1"
                   value="<?= $avenger1 ?? "" ?>">
            <span class="avenger"></span>
          </div>
          <div class="form-group row">
            <label for="avenger2" class="col-sm-5 col-form-label">Avenger2</label>
            <input type="text" name="avenger2"  
                   class="form-control col-sm-6" id="avenger2"
                   value="<?= $avenger2 ?? "" ?>">
            <span class="avenger"></span>
          </div>
          <div class="form-group row">
            <button type="submit" class="btn btn-primary">New mission</button>
          </div>
        </form>
      </div>

      <div class="card">
        <h4>Mission list</h4>
        <ul class="list-group list-group-flush mission-list">
          <?php foreach ($missions as $mission): ?>
          <li class="list-group-item" data-id="<?= $mission["id"] ?>">
            <div class="d-flex align-items-center p-1">
              <h5 class="m-2 flex-fill">
                <?= $mission["name"] ?>
                <small class="text-muted">
                  <?php if ($mission["terrial"]): ?>
                    <i class="fas fa-globe-africa"></i>
                  <?php else: ?>
                    <i class="fas fa-rocket"></i>
                  <?php endif; ?>
                </small>
              </h5>
              <div>
                <span class="mx-1 badge badge-primary">
                  <?= $mission["strength"] ?>
                </span>
                <span class="mx-1 badge badge-success">
                  <?= $mission["speed"] ?>
                </span>
                <span class="mx-1 badge badge-danger">
                  <?= $mission["durability"] ?>
                </span>
              </div>
              <span class="mx-1 avenger <?= str_replace(" ", "-", strtolower($mission["avenger1"])) ?>"></span>
              <span class="mx-1 avenger <?= str_replace(" ", "-", strtolower($mission["avenger2"])) ?>"></span>
            </div>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>

    <div class="col-md">
      <h2>Thanos</h2>
      <div class="card thanos">
        <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/avengers/gauntlet.jpg" class="card-img thanos">
        <div class="stone-place stone1">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone2">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone3">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone4">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone5">
          <div class="stone"></div>
        </div>
        <div class="stone-place stone6">
          <div class="stone"></div>
        </div>
        <div class="gauntlet"></div>
      </div>
    </div>
  </div>
</div>

<script>
  function delegate(parent, type, selector, fn) {
    function delegatedFunction(e) {
      const handlerElement = this;
      const sourceElement = e.target;

      const closestElement = sourceElement.closest(selector);
      if (handlerElement.contains(closestElement)) {
        const delegatedElement = closestElement;
        fn.call(delegatedElement, e)
      }
    }

    parent.addEventListener(type, delegatedFunction);
  }

  const strengthSlider = document.querySelector("#range1");
  const speedSlider = document.querySelector("#range2");
  const durabilitySlider = document.querySelector("#range3");
  const gauntlet = document.querySelector(".gauntlet");

  function updateValue(slider) {
    const value = slider.value;
    const id = slider.id;

    const span = document.querySelector(`#${id} + span`);
    span.innerHTML = value;
  }

  function handleSliderInput(event) {
    const slider = event.target;
    updateValue(slider);
  }
  strengthSlider.addEventListener("input", handleSliderInput);
  speedSlider.addEventListener("input", handleSliderInput);
  durabilitySlider.addEventListener("input", handleSliderInput);

  updateValue(strengthSlider);
  updateValue(speedSlider);
  updateValue(durabilitySlider);

  function infinityStoneClick() {
    const stone = this; // this is what I clicked on
    const place = stone.parentNode;
    stone.style.top = place.getBoundingClientRect().top + "px";
    stone.style.left = place.getBoundingClientRect().left + "px";
  }
  delegate(document, "click", ".stone", infinityStoneClick);

  function transitionEnd() {
    const stone = this;
    stone.classList.add("collected");
    
    const stones = Array.from(document.querySelectorAll(".stone"));
    let allCollected = true;
    for (const stone of stones) {
      if (!stone.classList.contains("collected")) {
        allCollected = false;
        break;
      }
    }

    if (allCollected) {
      gauntlet.classList.add("activated");
    }
  }
  delegate(document, "transitionend", ".stone", transitionEnd);

  function handleGauntletClick() {
    if (!gauntlet.classList.contains("activated")) {
      return;
    }

    if (avengersDead === false) {
      for (let i = 0; i < 10; i++) {
        const aliveAvengers = Array.from(document.querySelectorAll(".avengers-list>li:not(.dust)"));
        console.log(aliveAvengers);
        const avengerId = Math.floor(Math.random() * aliveAvengers.length);
        console.log(avengerId, aliveAvengers[avengerId]);
        aliveAvengers[avengerId].classList.add("dust");
      }

      avengersDead = true;
    } else {
      const deadAvengers = Array.from(document.querySelectorAll(".avengers-list>li.dust"));

      for (const avenger of deadAvengers) {
        avenger.classList.remove("dust");
      }
      avengersDead = false;
    }
  }
  gauntlet.addEventListener("click", handleGauntletClick);
  let avengersDead = false;

  async function findSuitableAvengers() {
    const strength = strengthSlider.value;
    const speed = speedSlider.value;
    const durability = durabilitySlider.value;
    const response = await fetch(`api/findpair.php?strength=${strength}&speed=${speed}&durability=${durability}`);
    const avengers = await response.json();
    console.log(avengers);

    const avenger1 = document.querySelector("#avenger1");
    avenger1.value = avengers[0].name.toLowerCase().replace(" ", "-");
    const avenger2 = document.querySelector("#avenger2");
    avenger2.value = avengers[1].name.toLowerCase().replace(" ", "-");
    const avenger1span = document.querySelector("#avenger1+span");
    const avenger2span = document.querySelector("#avenger2+span");
    avenger1span.className=`avenger ${avenger1.value}`;
    avenger2span.className=`avenger ${avenger2.value}`;
  }
  strengthSlider.addEventListener("change", findSuitableAvengers);
  speedSlider.addEventListener("change", findSuitableAvengers);
  durabilitySlider.addEventListener("change", findSuitableAvengers);
</script>