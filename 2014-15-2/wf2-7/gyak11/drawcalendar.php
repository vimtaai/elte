<?php

require_once 'functions.php';

$events = load_from_file('events.data');

$time = new DateTime();

$firstDay = new DateTime('first day of this month');
$lastDay = new DateTime('last day of this month');

?>

<table>
    <caption><?= $time->format('F Y') ?></caption>
    <tr>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
        <th>Sunday</th>
    </tr>
    <tr>
        <?php for ($i = 1; $i < $firstDay->format('N'); ++$i) : ?> 
        <td>Alma</td> 
        <?php endfor; ?>
        <?php for($current = $firstDay->format('N'); $current <= $lastDay->format('d'); ++$current) : ?>
            <td><?= $current - $firstDay->format('N'); ?></td>
            <?php if ($current % 7 == 0) : ?>
    </tr>
    <tr>
            <?php endif; ?>
        <?php endfor; ?> 
    </tr>
</table>
