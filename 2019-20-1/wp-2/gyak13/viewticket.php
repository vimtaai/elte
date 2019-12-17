<?php
require_once("utils/_init.php");

if (!verify_get("id")) {
  redirect("index.php");
}

$id = $_GET["id"];
$ticket = $ticket_store->find($id);
$users = $user_store->findAll();
?>
<?php require_once("partials/header.php"); ?>
<h1><?= $ticket["title"] ?></h1>
<small><?= $ticket["type"] ?></small>
<select>
  <option value="null">Not assigned</option>
  <?php foreach ($users as $id => $user): ?>
  <option 
    value="<?= $id ?>"
    <?= $ticket["assigned"] === $id ? "selected" : "" ?>
  >
    <?= $user["name"] ?>
  </option>
  <?php endforeach; ?>
</select>
<p><?= $ticket["description"] ?></p>

<button id="getcomments">Get comments</button>
<ul id="comments"></ul>

<a href="index.php">Back to tickets</a>

<script>
  const select = document.querySelector("select");
  async function handleSelectChange() {
    const userId = select.value === "null" ? null : select.value;
    // const urlParams = new URLSearchParams(window.location.search);
    // const ticketId = urlParams.get("id");
    const ticketId = "<?= $id ?>";
    // console.log(ticketId);
    const response = await fetch(`api/assignuser.php?ticket_id=${ticketId}&user_id=${userId}`);

    if (!response.ok) {
      alert("Could not update assigned user");
    }
  }
  select.addEventListener("change", handleSelectChange);

  const button = document.querySelector("#getcomments");
  const commentList = document.querySelector("#comments");

  async function handleButtonClick() {
    const ticketId = "<?= $id ?>";
    const response = await fetch(`api/get_comments.php?ticket_id=${ticketId}`);

    if (response.ok) {
      const data = await response.json();
      commentList.innerHTML = data.map(item => `<li>${item}</li>`).join("");
    }
  }
  button.addEventListener("click", handleButtonClick);
</script>

<?php require_once("partials/footer.php"); ?>
