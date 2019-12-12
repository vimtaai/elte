<?php

class JSONStorage {
  private $filename;
  private $contents;

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

  public function findAll() {
    return $this->contents;
  }

  public function find($id) {
    if (!isset($this->contents[$id])) {
      return NULL;
    }

    return $this->contents[$id];
  }

  public function add($item) {
    $this->contents[] = $item;
  }

  public function delete($id) {
    unset($this->contents[$id]); // !!!
  }

  public function update($id, $item) {
    $this->contents[$id] = $item;
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