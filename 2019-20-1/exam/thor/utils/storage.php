<?php

interface IStorage {
  function __construct($connection);
  function find($id);
  function findAll();
  function add($entry);
  function delete($id);
  function update($id, $entry);
  function query($condition);
}

class JSONStorage implements IStorage {
  private $path;
  private $contents;

  public function __construct($filename) {
    // ! Check if data source exists
    if (!file_exists($filename)) {
      // ! If not create it
      if (!is_writable(dirname($filename))) {
        throw new Exception("Data source does not exist and can not be created.");
      }

      file_put_contents($filename, json_encode([]));
      chmod($filename, 0777); // ! Don't do this in production!
    }

    // ! Check if the data source is accessable
    if (!is_readable($filename) || !is_writable($filename)) {
      throw new Exception("Data source ${filename} is not readable or not writeable.");
    }

    // ! Store the absolute path to the data file
    $this->path = realpath($filename);

    // ! Store the contents of the data file in memory
    $file_contents = file_get_contents($this->path);
    $this->contents = json_decode($file_contents, TRUE);
  }

  public function __destruct() {
    // ! Write the changes to the data file at the end of the script
    $file_contents = json_encode($this->contents, JSON_PRETTY_PRINT);
    file_put_contents($this->path, $file_contents);
  }

  public function find($id) {
    return $this->contents[$id];
  }

  public function findAll() {
    return $this->contents;
  }

  public function add($entry) {
    $this->contents[] = $entry;
  }

  public function delete($id) {
    unset($this->contents[id]);
  }

  public function update($id, $entry) {
    $this->contents[$id] = $entry;
  }

  public function query($condition) {
    return array_filter($this->contents, $condition);
  }
}

class SerializeStorage implements IStorage {
  private $path;
  private $contents;

  public function __construct($filename) {
    // ! Check if data source exists
    if (!file_exists($filename)) {
      // ! If not create it
      if (!is_writable(dirname($filename))) {
        throw new Exception("Data source does not exist and can not be created.");
      }

      file_put_contents($filename, serialize([]));
      chmod($filename, 0777); // ! Don't do this in production!
    }

    // ! Check if the data source is accessable
    if (!is_readable($filename) || !is_writable($filename)) {
      throw new Exception("Data source ${filename} is not readable or not writeable.");
    }

    // ! Store the absolute path to the data file
    $this->path = realpath($filename);

    // ! Store the contents of the data file in memory
    $file_contents = file_get_contents($this->path);
    $this->contents = unserialize($file_contents);
  }

  public function __destruct() {
    // ! Write the changes to the data file at the end of the script
    $file_contents = serialize($this->contents);
    file_put_contents($this->path, $file_contents);
  }

  public function find($id) {
    return $this->contents[$id];
  }

  public function findAll() {
    return $this->contents;
  }

  public function add($entry) {
    $this->contents[] = $entry;
  }

  public function delete($id) {
    unset($this->contents[id]);
  }

  public function update($id, $entry) {
    $this->contents[$id] = $entry;
  }
  
  public function query($condition) {
    return array_filter($this->contents, $condition);
  }
}