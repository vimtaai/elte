<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Családi pénznyilvántartás</title>
    <link rel="stylesheet" href="https://bit.do/wf2css">
    <style>table td,table th{line-height: 1;height: initial;width: initial;padding: 10px;}</style>
</head>
<body>
    <header>
        <a href="index.php">Nyilvántartás</a>
        <?php if (!isset($_SESSION['user'])) : ?>
            <a href="login.php">Bejelentkezés</a>
        <?php else : ?>
            <strong>
                Bejelentkezve: 
                <?= $_SESSION['user']['username'] ?>
            </strong>
            <a href="logout.php">Kijelentkezés</a>
        <?php endif; ?>
    </header>
    <br>