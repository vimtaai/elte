<?php


$stars = file_load(__DIR__ . '/../data/stars.json');

if (isset($_POST['type'])) {
   	$tmp = [];
    if ($_POST['type'] == 'null') {
        $tmp = $stars;
    } else {
        foreach ($stars as $star) {
            if ($star['type'] == $_POST['type']) {
                $tmp[] = $star;
            }

        } 
    }
	flash_set('stars', $tmp);
    
    redirect('show');
}

if ($flash = flash_get('stars')) {
    $stars = $flash;
}	

