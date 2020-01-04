<?php

require_once("utils/_init.php");

$all_menus = $menu_store->findAll();
$current_time = date("H:i");

if (verify_get("nap")) {
  // ! Szűrés
  $menus = [];
  foreach ($all_menus as $menu) {
    if (str_replace(".", "-", $menu["nap"]) === $_GET["nap"]) {
      $menus[] = $menu;
    }
  }
} else {
  $menus = $all_menus;
}

?>
<!DOCTYPE html>
<meta charset="utf-8" />
<link rel="stylesheet" href="http://webprogramozas.inf.elte.hu/webprog/zh/thor/index.css">

<nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand text-light" href="index.php">Thor diétája</a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="ujmenu.php">Új menü</a>
    </li>
  </ul>
  <form class="form-inline">
    <span class="navbar-text .text-light">Aktuális idő</span>
    <input class="form-control mr-sm-2" type="time" value="<?= $current_time ?>">
  </form>
</nav>

<div class="container-fluid">
  <div class="row">
    <div class="col-md">
      <h2>Menü</h2>
      <form action="" method="get">
        <div class="form-row">
          <div class="col-sm-10">
            <input type="date" name="nap" class="form-control" placeholder="YYYY-MM-DD" value="<?= $_GET["nap"] ?? "" ?>">
          </div>
          <div class="col-sm-2">
            <button type="submit" class="btn btn-secondary w-100">Szűr</button>
          </div>
        </div>
      </form>
      <div class="card">
        <ul class="list-group list-group-flush">
          <?php foreach ($menus as $menu) : ?>
          <li class="list-group-item list-group-item-action active" data-id="<?= $menu["id"] ?>">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><?= format_time($menu["mettol"]) ?>-<?= format_time($menu["meddig"]) ?></h5>
              <small><?= $menu["kcal"] ?> kCal</small>
            </div>
            <p class="mb-1"><?= $menu["etelek"] ?></p>
            <div class="d-flex w-100 justify-content-between">
              <small><?= str_replace(".", "-", $menu["nap"]) ?></small>
              <?php if ($menu["aktiv"]) : ?>
              <button class="btn btn-secondary btn-sm">Megevés</button>
              <?php endif; ?>
            </div>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>
    </div>

    <div class="col-md">
      <h2>Thor</h2>
      <div class="card thor">
        <img src="http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor1.jpg" class="card-img">
      </div>

      <h2>Sport</h2>
      <div class="card sport bg-primary">
        <div class="giant" style="top: 10%; left: 90%"></div>
        <div class="giant" style="top: 34%; left: 30%"></div>
        <div class="giant" style="top: 87%; left: 24%"></div>
        <div class="giant" style="top: 63%; left: 66%"></div>
        <div class="giant" style="top: 54%; left: 37%"></div>
        <div class="giant" style="top: 41%; left: 18%"></div>
        <div class="giant" style="top: 29%; left: 23%"></div>
        <div class="giant" style="top: 65%; left: 42%"></div>
        <div class="giant" style="top: 90%; left: 64%"></div>
        <div class="giant" style="top: 20%; left: 35%"></div>
        <div class="giant" style="top: 19%; left: 71%"></div>
        <div class="giant" style="top: 46%; left: 85%"></div>
        <div class="giant" style="top: 76%; left: 90%"></div>
        <div class="giant" style="top: 44%; left: 27%"></div>
        <div class="thor"></div>
      </div>
    </div>
  </div>
</div>

<script>
const timeInput = document.querySelector("input[type=time]");

function handleTimeChange() {
  const time = timeInput.value;
  const [hours, minutes] = time.split(":"); 
  // const parts = time.split(":");
  // const hours = parts[0];
  // const minutes = parts[1];
  const navbar = document.querySelector(".navbar");
  const buttons = document.querySelectorAll(".list-group button");
  const thor = document.querySelector(".thor img");
  if (hours >= 8 && hours < 18) {
    // ehet
    navbar.classList.remove("bg-danger");
    for (const button of buttons) {
      button.disabled = false;
    }
    thor.src = "http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor1.jpg";
  } else {
    // nem ehet
    navbar.classList.add("bg-danger");
    for (const button of buttons) {
      button.disabled = true;
    }
    thor.src = "http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor3.jpg";
  }
}
timeInput.addEventListener("change", handleTimeChange);

const sport = document.querySelector(".sport");
const thor = document.querySelector(".sport .thor");
const giants = document.querySelectorAll(".sport .giant");

function handleSportClick(e) {
  const {clientX, clientY} = e;
  // const clientX = e.clientX;
  // const clientY = e.clientY;
  const sportCoords = sport.getBoundingClientRect();
  console.log(sportCoords);
  const clickX = clientX - sportCoords.x;
  const clickY = clientY - sportCoords.y;
  const left = clickX / sportCoords.width * 100;
  const top = clickY / sportCoords.height * 100;

  thor.style.left = left + "%";
  thor.style.top = top + "%";

}
sport.addEventListener("click", handleSportClick);

function handleTransitionEnd() {
  for (const giant of giants) {
    const t = thor.getBoundingClientRect();
    const g = giant.getBoundingClientRect();

    if (utkozes(t.x,t.y,t.width,t.height,g.x,g.y,g.width,g.height)) {
      giant.classList.add("smashed");
    }
  }

  if (Array.from(giants).every(giant => giant.classList.contains("smashed"))) {
    document.querySelector(".thor img").src = "http://webprogramozas.inf.elte.hu/webfejl2/zh/thor/thor2.jpg";
  }
}
thor.addEventListener("transitionend", handleTransitionEnd);

function utkozes(a_x, a_y, a_width, a_height, b_x, b_y, b_width, b_height) {
  return !(
    b_y + b_height < a_y ||
    a_x + a_width < b_x ||
    a_y + a_height < b_y ||
    b_x + b_width < a_x
  );
}

const list = document.querySelector(".list-group");
const buttons = document.querySelectorAll(".list-group button");

async function handleButtonClick(e) {
  if (!e.target.matches("button")) { return; }
  const button = e.target;

  const id = button.parentNode.parentNode.dataset.id;
  const formData = new FormData();
  formData.set("id", id);

  const response = await fetch("ajax.php", {
    method: "POST",
    body: formData
  });
  const data = await response.json();
  console.log(data);
  //if (response.ok) {}

  button.classList.add("btn-success");
  button.innerHTML = "Megéve";
}
list.addEventListener("click", handleButtonClick);

</script>
