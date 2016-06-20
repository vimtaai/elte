<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

authorize(FALSE);

$errors = flash_get('errors');
$messages = flash_get('messages');