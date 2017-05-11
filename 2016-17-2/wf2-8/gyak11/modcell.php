<?php

require_once 'functions.php';
allow('POST');

$game = load_from_file('game.json');

$game [$_POST['y']] [$_POST['x']] ['color'] = $_POST['color'];

save_to_file('game.json', $game);