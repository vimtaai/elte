<?php

require_once 'functions.php';
require_once 'user.php';

session_start();

// Ha még nincs senki bejelentkezve
if (!isset($_SESSION['user'])) {
    header('Location: bejelentkezes.php');
} else {
    $currentUser = unserialize($_SESSION['user']);
    //echo 'Üdv, ' . $currentUser->username;
}

$uploadedFiles = load_from_file('files');

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Főoldal</title>
    </head>
    <body>
        <h1>Főoldal</h1>
        <header>
            Üdv, <?= $currentUser->username; ?> 
            <a href="kijelentkezes.php">Kijelentkezés</a>
        </header>
        <br>
        <form method="post" action="feltoltes.php"
              enctype="multipart/form-data">
            <label for="nev">Fájl neve</label><br>
            <input type="text" name="nev" id="nev"><br>
            <br>
            <label for="feltoltes">Fájl feltöltése</label><br>
            <input type="file" 
                   name="feltoltes" 
                   id="feltoltes"><br>
            <br>
            <input type="submit" value="Feltöltés">
        </form>
        <br>
        <section>
            <h2>Eddig feltöltött fájlok</h2>
            <table>
                <?php foreach ($uploadedFiles as $file) :  ?>
                <tr>
                    <td><?= $file->nev; ?></td>
                    <td>
                        <a href="feltoltesek/<?= $file->filenev?>">
                            <?= substr($file->filenev, strpos($file->filenev, '_') + 1); ?>
                        </a>
                    </td>
                    <td>
                        <a href="torol.php?file=<?= $file->filenev; ?>">[Törlés]</a>
                    </td>
                </tr>
                <?php endforeach; ?>
            </table>
        </section>
    </body>
</html>
