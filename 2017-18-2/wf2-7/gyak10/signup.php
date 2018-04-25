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
        <a href="login.php">Bejelentkezés</a>
    </header>
    <br>
    <form method="post">
        Felhasználónév: <br>
        <input type="text" name="username">
        <br>
        Jelszó: <br>
        <input type="password" name="password">
        <br>
        Jelszó mégegyszer: <br>
        <input type="password" name="password-re">
        <br>
        <input type="submit" value="Regisztráció">
        <br>
        <a href="login.php">Bejelentkezés</a>
    </form>
</body>
</html>