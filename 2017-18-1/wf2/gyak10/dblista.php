<style>
  body {font-family: 'consolas'}
  h1 {text-align: center}
  table {border-collapse: collapse}
  caption {font-size: 1.5em}
</style>
<?php

$dbFile = __DIR__ . '/db/db.sqlite';
$db = new PDO('sqlite:' . $dbFile);

function table_header($table) {
  echo '<caption>' . $table . '<br><br></caption>';
}

function table_fields($query) {
  echo '<tr>';
  for ($i = 0; $i < $query->columnCount(); $i++) {
    echo '<th>' . $query->getColumnMeta($i)['name'] . '</th>';
  }
  echo '</tr>';
}

function table_contents($query) {
  foreach ($query as $_ => $row) {
    echo '<tr>';
    foreach ($row as $value) {
      echo '<td>' . $value . '</td>';
    }
    echo '</tr>';
  }
}

function table($table) {
  global $db;
  echo '<table border="1" style="width:100%">';
  table_header($table);
  $query = $db->query("SELECT * FROM $table;", PDO::FETCH_ASSOC);
  table_fields($query);
  table_contents($query);
  echo '</table><br>';
}

$feladatok = "CREATE TABLE IF NOT EXISTS `feladatok` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `nev` VARCHAR(256) NOT NULL,
  `leiras` TEXT,
  `hatarido` DATETIME
);";

$fajlok = "CREATE TABLE IF NOT EXISTS `fajlok` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `feltolto` VARCHAR(32) NOT NULL,
  `fajlnev` VARCHAR(256) NOT NULL,
  `feltoltve` DATETIME,
  `hely` VARCHAR(256) NOT NULL,
  `feladat` INTEGER NOT NULL
);";

$db->query($feladatok);
$db->query($fajlok);

// $db->query("INSERT INTO feladatok (nev, leiras, hatarido) VALUES (
//   'almakorte', 
//   'csinálj egy szuper almakörtét!', 
//   '2017-01-01 10:10:10'
// )");
// $db->query("INSERT INTO fajlok (feltolto, fajlnev, feltoltve, hely, feladat) VALUES (
//   'neptun', 
//   'almakorte.txt', 
//   '2017-01-01 09:10:10', 
//   'files/1/neptun-2017-01-01-09-10-10-almakorte.txt', 
//   1
// )");

echo '<h1>' . $dbFile . '</h1>';
table('feladatok');
table('fajlok');