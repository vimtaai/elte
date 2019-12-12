<?php
require_once("_init.php");
authorize_page("editor");

if (verify_post("title", "tags", "excerpt", "fulltext")) {
  $title = $_POST["title"];
  $tags = explode(",", $_POST["tags"]);
  $excerpt = $_POST["excerpt"];
  $fulltext = $_POST["fulltext"];

  if ($title === "") {
    $errors[] = "Title must not be empty";
  }

  if ($excerpt === "") {
    $errors[] = "Excerpt must not be empty";
  }

  if ($fulltext === "") {
    $errors[] = "Fulltext must not be empty";
  }

  if (count($errors) === 0) {
    $article = [
      "title" => $title,
      "tags" => $tags,
      "excerpt" => $excerpt,
      "fulltext" => $fulltext,
      "date" => time(),
      "last-edit" => time(),
      "created-by" => $_SESSION["user"]["fullname"]
    ];

    $article_storage->add($article);
  }
}

?>
<?php require("partials/header.php"); ?>

<form action="edit_article.php" method="post">
  <label>Title</label><br>
  <input type="text" name="title"><br>
  <label>Tags</label><br>
  <input type="text" name="tags"><br>
  <label>Excerpt</label><br>
  <textarea name="excerpt" cols="30" rows="10"></textarea><br>
  <label>Full text</label><br>
  <input type="hidden" name="fulltext" id="fulltext">
  <div contenteditable id="fulltext-source"></div><br>
  <button type="submit">Save article</button>
</form>

<script>
const fulltextSource = document.querySelector("#fulltext-source");
const fulltext = document.querySelector("#fulltext");

fulltextSource.addEventListener("input", function () {
  fulltext.value = fulltextSource.innerHTML;
});
</script>

<?php require("partials/footer.php"); ?>