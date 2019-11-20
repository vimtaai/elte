<?php

class JSONStorage {
  private $filename;
  public $contents;

  public function __construct($filename) {
    // ! Check if the data source is accessable
    if (!is_readable($filename) || !is_writable($filename)) {
      throw new Exception("Data source ${filename} is invalid.");
    }

    $this->filename = realpath($filename);
    $this->contents = $this->readFromJson($filename);
  }

  public function __destruct() {
    $this->writeToJson($this->filename, $this->contents);
  }
  
  private function readFromJson($file) {
    $file_contents = file_get_contents($file);
    $data = json_decode($file_contents, TRUE); // ? TRUE = I want arrays
  
    return $data;
  }

  private function writeToJson($file, $data) {
    $file_contents = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($file, $file_contents);
  }
}