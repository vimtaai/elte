<?php
//define('DATAFILE', 'data.json');
const DATAFILE = 'data.json';

function save_to_file($file, $data) {
    $encoded_data = json_encode($data);
    //$encoded_data = serialize($data);
    file_put_contents($file, $encoded_data);
}

function load_from_file($file) {
    $data = file_get_contents($file);
    //return unserialize($data);
    return json_decode($data, TRUE);
}

function not_empty(&$array, $key) {
    //array_key_exists($key, $array);
    return isset($array[$key]) && !empty($array[$key]);
}

$input = [];
$errors = [];

$expenses = load_from_file(DATAFILE);

if ($_POST) {
    //var_dump($_POST);

    // Input-validálás
    if (not_empty($_POST, 'desc')) {
        $input['desc'] = $_POST['desc'];
    } else {
        $errors[] = 'Nem adtál meg leírást!';
    }

    if (not_empty($_POST, 'amount')) {
        if (is_numeric($_POST['amount'])) {
            $input['amount'] = $_POST['amount'];
        } else {
            $errors[] = 'A megadott összeg nem szám!';
        }
    } else {
        $errors[] = 'Nem adtál meg összeget!';
    }

    // Feldologzás, ha nincs hiba
    if (!$errors) {
        $expenses[] = [
          'desc' => $input['desc'],
          'amount' => $input['amount']
        ];
        save_to_file(DATAFILE, $expenses);
    }
}

?>
<!doctype html>

<meta charset="utf-8">
<title>Mánimenedzsment</title>
<link rel="stylesheet" href="style.css">


<div class="container">
    <form method="post" class="form-horizontal">
        <div class="form-group">
            <label class="control-label col-sm-2" for="inputDefault">Bevétel/Kiadás</label>
            <div class="col-sm-6">
                <input type="text" name="amount" class="form-control" id="inputDefault">
            </div>
            <div class="col-sm-2 control-label">HUF</div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="inputDefault">Leírás</label>
            <div class="col-sm-6">
                <input type="text" name="desc" class="form-control" id="inputDefault">
            </div>
            <div class="col-sm-2">
                <input class="btn btn-primary" type="submit" value="Rögzít">
            </div>
        </div>
    </form>

    <?php if ($errors) : ?>
      <?php foreach ($errors as $error) : ?>
        <div class="alert alert-danger"><?= $error ?></div>
      <?php endforeach;?>
    <?php endif ?>

    <table class="table table-striped table-hover ">
        <thead>
            <tr>
            <th>#</th>
            <th>Leírás</th>
            <th>Összeg</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ((array)$expenses as $key => $row) : ?>
            <tr>
                <td><?= $key ?></td>
                <td><?= $row['desc'] ?></td>
                <td><?= $row['amount'] ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table> 
</div>