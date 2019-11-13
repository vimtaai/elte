<?php

// ! Superglobal variable (array)
// print($_SERVER["REQUEST_URI"]);

// $split_url = explode("/", $_SERVER["REQUEST_URI"]);
// $query = explode("?", $split_url[count($split_url) - 1])[1];

// $data = explode("=", $query);

// print("<pre>");
// var_dump($data);
// print("</pre>");

// print("<pre>");
// var_dump($_GET);
// print("</pre>");

function verify_get(...$required_keys): bool {
    foreach ($required_keys as $key) {
        // if any of the keys are missing
        if (!isset($_GET[$key])) {
            return false;
        }
    }
    return true;
}

function verify_post(...$required_keys): bool {
    foreach ($required_keys as $key) {
        // if any of the keys are missing
        if (!isset($_POST[$key])) {
            return false;
        }
    }
    return true;
}

// if there is a token in the url
if (verify_get("url")) {
    // redirect to that url
    $decoded_url = base64_decode($_GET["url"]);
    header("Location: " . $decoded_url);
    exit;
}

// $encoded_url = "";
if (verify_post("url_to_shorten")) {
    $url_to_shorten = $_POST["url_to_shorten"];
    $encoded_url = base64_encode($url_to_shorten);
}

if (verify_get("bgcolor")) {
    $bgcolor = $_GET["bgcolor"]; // GOOD PRACTICE
}

?>
<!doctype html>
<body style="background: <?= $bgcolor ?? "white" ?>">
    <form action="index.php" method="get">
        <input type="color" name="bgcolor">
        <button type="submit">Change color</button>
    </form>
    <form action="index.php" method="post">
        <input type="url" name="url_to_shorten">
        <button type="submit">"Shorten"</button>
    </form>
    <?= $encoded_url ?? "Please provide a URL" ?>
</body>