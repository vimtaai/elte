<?php
// 2. bemeneti adatok feldolgozása
// ! Good practice: a $_POST-ból másoljuk ki
// az értékeket!

function verify_post(...$names) {
    foreach ($names as $name) {
        if (!isset($_POST[$name])) {
            return false;
        }
    }
    
    return true;
}

if (isset($_GET["url"])) {
    // Átirányítás
    $url = $_GET["url"];
    header("Location: " . base64_decode($url));
    exit;
}

// Beolvasás
if (verify_post("url")) {
    $url = $_POST["url"];

    // Feldolgozás
    $shortened_url = base64_encode($url);
}

?>
<!-- 1. összerakom a statikus HTML részt -->
<form method="post" action="url.php">
    <input type="url" name="url">
    <button type="submit">Shorten</button>
    <?= $shortened_url ?? "" ?>
</form>