<?php

function keys_exist($array, $keys) {
  foreach ($keys as $key) {
    if (!isset($array[$key])) {
      return false;
    }
  }
  return true;
}