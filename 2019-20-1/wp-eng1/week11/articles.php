<?php

session_start();
require_once("utils.php");
require_once("filestorage.php");

authorize_page("editor", "chief_editor");

?>
<h1>List of articles</h1>