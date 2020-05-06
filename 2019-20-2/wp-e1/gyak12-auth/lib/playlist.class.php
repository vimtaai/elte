<?php

class Playlist {
  public $title;
  private $tracks;
  private $owner;

  public function __construct($title, $owner) {
    $this->title = $title;
    $this->tracks = [];
    $this->owner = $owner;
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

  public function hasTrack($track_id) {
    return in_array($track_id, $this->tracks);
  }

  public function addTrack($track_id) {
    $this->tracks[] = $track_id;
  }

  public function isOwnedBy($user_id) {
    return $this->owner === $user_id;
  }

  public function getOwner() {
    return $userStorage->findById($this->owner);
  }
}