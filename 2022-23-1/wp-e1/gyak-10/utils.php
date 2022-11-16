<?php

function check_all_keys_in_post(...$required_keys): bool {
  foreach ($required_keys as $key) {
    if (!isset($_POST[$key])) {
      return false;
    }
  }

  return true;
}
