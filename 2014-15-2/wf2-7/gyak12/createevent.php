<?php

require_once 'functions.php';

$events = (array)load_from_file('events.data');
$events[] = [$_POST['event_date'] => $_POST['event_name']];
save_to_file('events.data', $events);
