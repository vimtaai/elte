<?php
// Input
$protocol = $_SERVER["SERVER_PROTOCOL"];
$method = $_SERVER["REQUEST_METHOD"];
$path = $_SERVER["REQUEST_URI"];
$form_data = $_POST;

// Process
$headers = [];
foreach($_SERVER as $key => $value) {
    if (!preg_match("/^HTTP_/", $key)) {
        continue;
    }

    $header_name = str_replace("_", "-", substr($key, 5));
    $headers[$header_name] = $value;
}
?>
<pre>
<?= $protocol ?> <?= $method ?> <?= $path ?>
<?php foreach($headers as $header_name => $header_value): ?> 
<?= $header_name ?>: <?= $header_value ?>
<?php endforeach; ?>

<?php foreach($form_data as $name => $value): ?> 
<?= $name ?>: <?= $value ?>
<?php endforeach; ?>
</pre>