<?php

class FileStorage {
  private $path;
  private $contents;

  public function __construct($path) {
    if (!is_readable($path) || !is_writable($path)) {
      throw new Exception("Storage file ${path} does not exit or invalid permissions.");
    }

    $this->path = realpath($path);
    $file_contents = file_get_contents($this->path);
    $this->contents = json_decode($file_contents, TRUE);

    if (!is_array($this->contents)) {
      throw new Exception("Invalid storage file format.");
    }
  }

  public function __destruct() {
    $file_contents = json_encode($this->contents, JSON_PRETTY_PRINT);
    file_put_contents($this->path, $file_contents);
  }

  public function add($value) {
    $this->contents[] = $value;
  }

  public function getContents() {
    return $this->contents;
  }
}