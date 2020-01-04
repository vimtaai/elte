<?php

require_once("utils/_init.php");
$menus = $menu_store->findAll();

$id = $_POST["id"];

foreach ($menus as $index => $menu) {
    if ($menu["id"] === $id) {
        $menu["aktiv"] = FALSE;
        $menu_store->update($index, $menu);
        break;
    }
}

echo(json_encode($menu_store->findAll()));