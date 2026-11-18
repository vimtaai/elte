<?php

$name = "Joe";

class Course {
  public $name;
  public $semester;
  public $credits;
  public $isCompleted;

  function __construct(string $name, int $semester, int $credits, bool $isCompleted = false) {
    $this->name = $name;
    $this->semester = $semester;
    $this->credits = $credits;
    $this->isCompleted = $isCompleted;
  }
}

$courses = [
  new Course("Web development", 1, 5, true),
  new Course("Web programming", 2, 4),
  new Course("Front-end web development", 2, 4),
  new Course("Calculus", 2, 4),
  new Course("Discrete Mathematics", 1, 4, true)
];