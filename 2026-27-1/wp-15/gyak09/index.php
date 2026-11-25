<?php
include("data.php");

$courses = $database
  ->query("SELECT * FROM `courses`")
  ->fetchAll(PDO::FETCH_CLASS, "Course");

$foundUser = $database
   ->query("SELECT * FROM `users` WHERE `id` = 1")
   ->fetchAll(PDO::FETCH_CLASS, "User");
$user = count($foundUser) === 1 ? $foundUser[0] : NULL;

$completedCourses = $database
  ->query("SELECT `course_id` FROM `course_completion` WHERE `user_id` = 1")
  ->fetchAll(PDO::FETCH_ASSOC);

foreach($completedCourses as $completedCourse) {
  $course = array_find($courses, function ($course) use ($completedCourse) {
    return $course->id === $completedCourse["course_id"];
  });
  $course->isCompleted = true;
}

$inputs = [];

if (isset($_GET["search"])) {
  $inputs["search"] = htmlspecialchars($_GET["search"]);
}

const ALLOWED_TYPES = ["completed", "not-completed"];
if (isset($_GET["type"])) {
  $inputs["type"] = in_array($_GET["type"], ALLOWED_TYPES) 
    ? $_GET["type"]
    : NULL;
}

if (isset($inputs["search"]) || isset($inputs["type"])) {
  $filteredCourses = array_filter($courses, function ($course) use ($inputs) {
    $completedMatch = $course->isCompleted === ($inputs["type"] === "completed");
    $searchMatch = strstr($course->name, $inputs["search"]) !== FALSE;
    return $completedMatch && $searchMatch;
  });
} else {
  $filteredCourses = $courses;
}

?>
<?php include("header.php"); ?>
<form action="index.php" method="get">
  <input type="search" name="search">
  <select name="type">
    <option value="completed">Completed</option>
    <option value="not-completed">Not completed</option>
  </select>
  <button type="submit">Search</button>
</form>

<table>
  <tr>
    <th>Course Name</th>
    <th>Semester</th>
    <th>Credits</th>
    <th>&nbsp;</th>
  </tr>
  <?php foreach ($filteredCourses as $course): ?>
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
<?php include("footer.php"); ?>