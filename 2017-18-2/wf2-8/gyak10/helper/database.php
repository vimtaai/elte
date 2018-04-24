<?php

function connect(string $dsn, string $user, string $pwd) : PDO {
    return new PDO($dsn, $user, $pwd);
}

function select(PDO $conn, string $sql, array $params = []) : array {
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function execute(PDO $conn, string $sql, array $params = []) {
    $stmt = $conn->prepare($sql);
    $stmt->execute($params);
}