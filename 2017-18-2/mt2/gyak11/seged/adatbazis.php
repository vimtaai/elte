<?php

function kapcsolodas($kapcsolati_szoveg, $felhasznalo, $jelszo) {
  $pdo = new PDO($kapcsolati_szoveg, $felhasznalo, $jelszo);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $pdo;
}

function lekerdezes($kapcsolat, $sql, $parameterek = []) {
  $stmt = $kapcsolat->prepare($sql);
  $stmt->execute($parameterek);
  return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function vegrehajtas($kapcsolat, $sql, $parameterek = []) {
  return $kapcsolat
    ->prepare($sql)
    ->execute($parameterek);
}