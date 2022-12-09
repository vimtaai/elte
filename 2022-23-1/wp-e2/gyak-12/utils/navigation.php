<?php

function redirect(string $page) {
  header("Location: ${page}");
  exit;
}