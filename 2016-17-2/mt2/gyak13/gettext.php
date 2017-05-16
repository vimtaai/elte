<?php

require_once 'functions.php';
allow('GET');

$texts = load_from_file('text.json');

echo json_encode(array_reverse($texts));