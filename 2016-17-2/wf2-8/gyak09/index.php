<?php
function save_to_file($file, $data) {
    file_put_contents($file, json_encode($data));
}

function load_from_file($file) {
    return json_decode(file_get_contents($file), TRUE);
}

function not_empty(&$array, $key) {
    return isset($array[$key]) && !empty($array[$key]);
}

$expenses = load_from_file('data.json');
//var_dump($expenses);

$input = [];
$errors = [];
$messages = [];

if ($_POST) {
    if (isset($_POST['delkey'])) {
        if (isset($expenses[$_POST['delkey']])) {
            $input['delkey'] = $_POST['delkey'];
        } else {
            $errors[] = 'Nincs ilyen törlendő elem!';
        }

        if (!$errors) {
            unset($expenses[$input['delkey']]);
            save_to_file('data.json', $expenses);
            $messages[] = 'Bejegyzés törlve!';
        }
    } else {
        // Input validálás
        if (not_empty($_POST, 'desc')) {
            $input['desc'] = (string)htmlentities($_POST['desc']);
        } else {
            $errors[] = 'Nem adtál meg leírást!';
        }

        if (not_empty($_POST, 'amount')) {
            if (is_numeric($_POST['amount'])) {
                $input['amount'] = (int)$_POST['amount'];
            } else {
                $errors[] = 'A megadott összeg nem szám!';    
            }
        } else {
            $errors[] = 'Nem adtál meg összeget!';
        }

        // Feldolgozás
        if (!$errors) {
            $expenses[] = [
                'desc' => $input['desc'],
                'amount' => $input['amount']
            ];
            save_to_file('data.json', $expenses);
            $messages[] = 'Bejegyzés hozzáadva!';
        }
    }
}

?>
<!doctype html>

<meta charset="utf-8">
<title>Mánimenedzsment</title>
<link rel="stylesheet" href="http://bootswatch.com/darkly/bootstrap.min.css">

<div class="container">
    <div class="col-sm-6 col-sm-offset-3">
        <h1>Májmáni</h1>
        <form method="post">
            <div class="form-group">
                <label class="control-label">Leírás</label>
                <input type="text" name="desc" class="form-control">
            </div>
            <div class="form-group">
                <label class="control-label">Bevétel/Kiadás</label>
                <div class="input-group col-sm-4">
                    <input type="text" name="amount" class="form-control">
                    <span class="input-group-addon">HUF</span>
                </div>
            </div>
            <input type="submit" class="btn btn-primary" value="Rögzít">
        </form>

        <br>
        <?php foreach ($errors as $error) : ?>
            <div class="alert alert-danger"><?= $error ?></div>
        <?php endforeach; ?>
        <?php foreach ($messages as $message) : ?>
            <div class="alert alert-info"><?= $message ?></div>
        <?php endforeach; ?>

        <table class="table table-striped table-hover ">
            <thead>
                <tr>
                <th>#</th>
                <th>Leírás</th>
                <th>Összeg</th>
                <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ((array)$expenses as $key => $row) : ?>
                <tr>
                    <td><?= ($key + 1) ?></td>
                    <td><?= $row['desc'] ?></td>
                    <td class="<?= $row['amount'] < 0 ? 'text-danger' : 'text-success' ?>">
                        <?= $row['amount'] ?> Ft
                    </td>
                    <td>
                        <form method="post">
                            <input type="hidden" name="delkey" value="<?= $key ?>">
                            <input type="submit" class="btn btn-xs btn-danger" value="Törlés">
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table> 
    </div>
</div>