<?php 
interface IStorage {
  function __construct($connection_params);
  function add($record);
  function find($id);
  function findAll();
  function query($condition);
  function update($id, $record);
  function delete($id);
}

class JSONStorage implements IStorage {
  private $filepath;
  private $contents;
  public function __construct($filename) {
    $this->filepath = realpath($filename);  
    $file_contents = file_get_contents($filename);
    $this->contents = json_decode($file_contents, TRUE) ?? [];
  }
  public function __destruct() {
    $this->save();
  }
  public function save() {
    $json_content = json_encode($this->contents, JSON_PRETTY_PRINT);
    file_put_contents($this->filepath, $json_content);
  }

  public function findAll() {
    return $this->contents;
  }
  
  public function find($id) {
    if (!isset($this->contents[$id])) {
      return null;
    }

    return $this->contents[$id];
  }

  public function add($record) {
    $this->contents[] = $record;
  }

  public function query($condition) {
    return array_filter($this->contents, $condition);
  }

  public function update($id, $record) {
    if (!isset($this->contents[$id])) {
      return;
    }

    $this->contents[$id] = $record;
  }

  public function delete($id) {
    if (!isset($this->contents[$id])) {
      return;
    }

    unset($this->contents[$id]);
  }
}