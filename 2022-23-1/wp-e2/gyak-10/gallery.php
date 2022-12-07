<?php
require_once("utils.php");

$images = load_data_from_file("images.json");
$errors = [];
$inputs = [];
$required_inputs = ["name", "url"];

function is_url_already_saved($url) {
    global $images;

    foreach($images as $image) {
        if ($image["url"] === $url) {
            return true;
        }
    }

    return false;
}

function is_url($value) {
    return filter_var($value, FILTER_VALIDATE_URL);
}

if (array_all_keys_exist($required_inputs, $_POST)) {
    if ($_POST["name"] === "") {
        $errors["name"] = "Name must not be empty";
    }

    if (!is_url($_POST["url"])) {
        $errors["url"] = "URL is not in the correct format";
    }

    if (is_url_already_saved($_POST["url"])) {
        $errors["exists"] = "Image already exists in the gallery";
    }

    if (empty($errors)) {
        $inputs["name"] = $_POST["name"];
        $inputs["url"] = $_POST["url"];

        $images[] = [
            "name" => $inputs["name"],
            "url" => $inputs["url"]
        ];

        save_data_to_file("images.json", $images);
    }
}

?>
<form action="gallery.php" method="post">
    <label for="name">Name: </label>
    <input type="text" name="name" id="name">
    <?= $errors["name"] ?? "" ?>
    <br>
    <label for="url">URL: </label>
    <input type="text" name="url" id="url">
    <?= $errors["url"] ?? "" ?>
    <br>
    <button type="submit">Send</button>
    <?= $errors["exists"] ?? "" ?>
</form>

<?php foreach($images as $image): ?>
    <figure>
        <img src="<?= $image["url"] ?>" alt="<?= $image["name"] ?>">
        <figcaption><?= $image["name"] ?></figcaption>
    </figure>
<?php endforeach; ?>