<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>PHP</title>
<link rel="stylesheet" 
 href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
</head>
<body>
<div class="container">
<h1>PHP basics</h1>
<br>
<output style="font-size: 1.2em; font-weight: bold;">
<?php
/*if (array_key_exists('name', $_POST)) {
    echo "Hello, {$_POST['name']}";
} else {
    echo "Hello, Guest";
}*/

if (isset($_POST['name'])) {
    echo "Hello, {$_POST['name']}";
} else {
    echo "Hello, Guest";
}
?>
</output>
<br>
<div class="form-group">
<form method="post" action="index.php">
<label for="name">Your name: </label>
<input type="text" name="name" id="name" class="form-control" style="width: 200px;">
<br>
<label for="operand1">Expression: </label>
<br>
<input type="text" 
       name="operand1" 
       id="operand1" 
       class="form-control" 
       style="width: 70px; display: inline"
       value="
<?php echo (isset($_POST['operand1']) ?
                  $_POST['operand1'] :
                  ''); ?>">
<select name="operator" id="operator" class="form-control" style="width: 50px; padding-left: 2px; display: inline">
<option>+</option>
<option>-</option>
<option>*</option>
<option>/</option>
</select>
<input type="number" name="operand2" id="operand2" class="form-control" style="width: 70px; display: inline">
= 
<output style="display: inline" class="btn btn-success">
<?php
if (isset($_POST['operand1'])) {
    switch ($_POST['operator']) {
        case '+': 
            echo $_POST['operand1'] +
                 $_POST['operand2'];
            break;
        case '-': 
            echo $_POST['operand1'] -
                 $_POST['operand2'];
            break;
        case '*': 
            echo $_POST['operand1'] *
                 $_POST['operand2'];
            break;
        case '/': 
            echo $_POST['operand1'] /
                 $_POST['operand2'];
            break;
    }
} else {
    echo '&nbsp;';
}
?>
</output>
<br><br>
<input type="submit" value="Send" class="btn btn-info">
</form>
</div>
</div>
</body>
</html>
