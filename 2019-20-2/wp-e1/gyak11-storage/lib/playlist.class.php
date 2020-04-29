<?php

class Playlist {
  public $title;
  private $tracks;

  public function __construct($title) {
    $this->title = $title;
    $this->tracks = [];
  }

  public function getTracks() {
    return array_map(function ($trackID) {
      global $trackStorage;

      return $trackStorage->findById($trackID);
    }, $this->tracks);
  }

  public function getTrackCount() {
    return count($this->tracks);
  }
}