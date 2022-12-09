<?php

function array_all_keys_exist(array $input, ...$keys): bool {
  foreach ($keys as $key) {
    if (!array_key_exists($key, $input)) {
      return false;
    }
  }

  return true;
}
