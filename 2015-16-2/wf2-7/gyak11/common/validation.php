<?php if (!defined('TOKEN')) die ('Ejnyebejnye!');

function is_empty($input, $key) {
    return (!isset($input[$key])) || (trim($input[$key]) === '');
}