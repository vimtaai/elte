<?php

require_once 'functions.php';
allow('GET');

$game = [];
for ($i = 0; $i < 10; $i++) { 
    $game[$i] = [];
    for ($j = 0; $j < 10; $j++) { 
        $game[$i][$j] = [
            'x' => $j,
            'y' => $i,
            'color'=>'white'
        ];
    }
}

save_to_file('game.json', $game);
