<?php

class Database {
  // A privát konstruktor révén letiltjuk a példányosítást
  private function __construct() {}

  private static $conn;

  public static function connect(string $dsn, string $user, string $pwd) {
    self::$conn = new PDO($dsn, $user, $pwd);
  }

  public static function selectAll(string $sql, array $params = []) : array {
    $stmt = self::$conn->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public static function selectOne(string $sql, array $params = []) {
    $stmt = self::$conn->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetch(PDO::FETCH_ASSOC);
  }

  public static function selectValue(string $sql, array $params = []) {
    $stmt = self::$conn->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchColumn();
  }

  public static function execute(string $sql, array $params = []) {
    $stmt = self::$conn->prepare($sql);
    $stmt->execute($params);
  }
}

Database::connect('mysql:dbname=wf2_wp1c0x;host=localhost', 'wp1c0x', 'wp1c0x');