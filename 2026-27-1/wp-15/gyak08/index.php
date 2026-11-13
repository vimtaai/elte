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

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello <?= $name ?></h1>

  <table>
    <tr>
      <th>Course Name</th>
      <th>Semester</th>
      <th>Credits</th>
      <th>&nbsp;</th>
    </tr>
    <?php foreach ($courses as $course): ?>
      <tr>
        <td><?= $course->name ?></td>
        <td><?= $course->semester ?></td>
        <td><?= $course->credits ?></td>
        <td>
          <?php if ($course->isCompleted): ?>
            <span class="complete">completed</span>
          <?php else: ?>
            <button>Sign up</button>
          <?php endif; ?>
        </td>
      </tr>
    <?php endforeach; ?>
  </table>
</body>
</html>