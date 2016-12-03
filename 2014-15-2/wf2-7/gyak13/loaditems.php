<?php

require_once 'functions.php';

foreach ((array)load_from_file('data') as $data) {
    echo '<li>' . $data . '</li>';
}
