<?php

require_once 'functions.php';

session_start();

if (isset($_SESSION['user'])) {

    if (unlink(__DIR__ . '/feltoltesek/' . $_GET['file'])) {
        $uploadedFiles = load_from_file('files');
        foreach ((array)$uploadedFiles as $index => $file) {
            if ($file->filenev == $_GET['file']) {
                unset($uploadedFiles[$index]);
            }
        }
        save_to_file('files', $uploadedFiles);
    }

    header('Location: index.php');

}
