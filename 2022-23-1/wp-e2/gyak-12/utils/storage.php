<?php

function load_from_file(string $filename): array {
  return json_decode(file_get_contents($filename), true) ?? [];
}

function save_to_file(string $filename, array $data): void {
  file_put_contents($filename, json_encode($data));
}
