<?php

function redirect($page) {
  header("Location: ${page}");
  exit();
}