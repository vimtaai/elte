<?php 

class Track {
  public $title;
  public $artist;
  public $length;

  public function __construct($title, $artist, $length) {
    $this->title = $title;
    $this->artist = $artist;
    $this->length = $length;
  }
}