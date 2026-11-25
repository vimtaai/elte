<?php

function array_all_keys_exist(array $keys, array $array): bool {
  return array_all($keys, function ($key) use ($array) {
    return array_key_exists($key, $array);
  });
}