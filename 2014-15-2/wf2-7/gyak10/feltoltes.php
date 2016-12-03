<?php

require_once 'functions.php';

session_start();

//var_dump($_POST);
//var_dump($_FILES);

//if ($_FILES['feltoltes']['size'] > 1e6) {
//    unlink($_FILES['feltoltes']['tmp_name'];
//}

//if (isset($_FILES['feltoltes'])) {
if (isset($_SESSION['user'])) { 
    if (count($_FILES)) {
        // végigmegyünk minden feltöltött fájlon
        foreach ($_FILES as $file) {
            // ha nincs hiba
            if (!$file['error']) {
                if (!is_dir(__DIR__ . '/feltoltesek')) {
                    mkdir(__DIR__ . '/feltoltesek');
                }
                $newFileName = uniqid() . '_' . $file['name'];
                if (@move_uploaded_file($file['tmp_name'],
                    __DIR__ . '/feltoltesek/' . $newFileName)) {
    
                    $newFile = [
                        'nev' => $_POST['nev'],
                        'filenev' => $newFileName
                    ];
                    $uploadedFiles = load_from_file('files');
                    $uploadedFiles[] = $newFile;
                    save_to_file('files', $uploadedFiles);
                    header('Location: index.php'); 
                } else {
                    echo 'Sikertelen fájlfeltöltés';    
                }
            }
        }
    }
}
