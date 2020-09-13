<?php
include("../utils/_init.php");

$page = $_GET["page"] ?? 1;

$tracks = $trackStorage->findAll();
// Bemenet meglétének ellenőrzése
if (verify_get("search")) {
  // Beolvasás/előfeldolozás
  $search = strtolower(trim($_GET["search"]));
  
  // Ellenőrzés (nem kell)
  if ($search !== "") {
    $tracks = $trackStorage->query(function ($track) use ($search) {
      return (
        strpos(strtolower($track["title"]), $search) !== FALSE || 
        strpos(strtolower($track["artist"]), $search) !== FALSE
      );
    });
  }
}

$tracks_to_list = array_slice($tracks, ($page - 1) * 10, 10);

// Response
header("Content-Type: application/json");
$response = [
  "page" => $page,
  "numpages" => ceil(count($tracks) / 10),
  "tracks" => $tracks_to_list
];
print(json_encode($response));