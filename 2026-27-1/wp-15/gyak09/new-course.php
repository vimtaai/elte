<?php
include("data.php");

$inputs = [];
$errors = [];
$messages = [];

// Sanitize
if (
  isset($_POST["course_name"]) && 
  isset($_POST["course_credits"]) && 
  isset($_POST["course_semester"])
) {
  $inputs["name"] = htmlspecialchars($_POST["course_name"]);
  $inputs["credits"] = (int)$_POST["course_credits"];
  $inputs["semester"] = (int)$_POST["course_semester"];
}

// If there is input...
if (
  isset($inputs["name"]) &&
  isset($inputs["semester"]) &&
  isset($inputs["credits"])
) {
  // Validate
  if ($inputs["credits"] < 0 || $inputs["credits"] > 30) {
    $errors[] = "Credits must be between 1 and 30";
  }

  if ($inputs["semester"] < 1 || $inputs["semester"] > 6) {
    $errors[] = "Semester must be between 1 and 6";
  }

  // Processing
  if (count($errors) === 0) {
    $statement = $database->prepare("INSERT INTO `courses`
      (`name`, `semester`, `credits`) VALUES
      (:name, :semester, :credits)
    ");
    $statement->execute([
      "name" => $inputs["name"],
      "semester" => $inputs["semester"],
      "credits" => $inputs["credits"]
    ]);

    $messages[] = "Course created successfully.";
  }
}

?>
<?php include("header.php"); ?>
<form action="new-course.php" method="post">
  <label>Course Name</label>
  <input type="text" name="course_name">
  <label>Credits</label>
  <input type="number" name="course_credits">
  <label>Semester</label>
  <select name="course_semester">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
  </select>
  <button type="submit">Create</button>
</form>
<?php foreach($errors as $error): ?>
  <div class="error"><?= $error ?></div>
<?php endforeach; ?>

<?php foreach($messages as $message): ?>
  <div class="message"><?= $message ?></div>
<?php endforeach; ?>

<?php include("footer.php"); ?>
