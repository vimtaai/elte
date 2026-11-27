<?php

class Post {
  public $id;
  public $title;
  public $text;

  function __construct($id = NULL, $title = NULL, $text = NULL) {
    $this->id = $id ?? $this->id;
    $this->title = $title ?? $this->title;
    $this->text = $text ?? $this->text;
  }
}
