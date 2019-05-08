<?php
session_start(); // enélkül nem működik a session változó

function redirect($page) {
  header("Location: " . $page); // megmondjuk a böngészőnek, hogy másik oldalra menjen
  exit; // leállítjuk a PHP programot
}

function require_auth() {
  if (!is_logged_in()) { // ha nem vagy bejelentkezve
    redirect("login.php"); // átirányít a loginra
  }
}

function is_logged_in() {
  return isset($_SESSION["user"]);
}





