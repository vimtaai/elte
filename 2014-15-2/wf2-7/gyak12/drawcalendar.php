<?php

require_once 'functions.php';

$firstDay = new DateTime('first day of this month');
$lastDay = new DateTime('last day of this month');

$events = load_from_file('events.data');

// $firstDay->format('N'); // a hétnek hanyadik napja

?>

<table border="1">
    <caption><?= $firstDay->format('F Y'); ?></caption>
    <tr>
        <td>Monday</td>
        <td>Tuesday</td>
        <td>Wedenesday</td>
        <td>Thursday</td>
        <td>Friday</td>
        <td>Saturday</td>
        <td>Sunday</td>
    </tr>
    <tr>
        <?php for ($i = 1; $i < $firstDay->format('N'); ++$i) : ?>
        <td>&nbsp;</td>
        <?php endfor; ?>
        <?php for ($i = 1; $i <= $lastDay->format('d'); ++$i) : ?>
        <td class="day"
            data-date="<?php
                $currentDay = new DateTime($firstDay->format('Y-m-d'));
                $currentDay->modify('+' . ($i - 1) . ' days');
                echo $currentDay->format('Y-m-d');
            ?>"<?php
                foreach ((array)$events as $event) {
                    if (array_key_exists($key = $currentDay->format('Y-m-d'), $event)) {
                        echo ' title="' . $event->$key . '"';
                        echo ' style="background: yellow"';
                        break;
                    }
                }
            ?>>
            <?= $i ?>
        </td>
            <?php if (($i + $firstDay->format('N') - 1) % 7 == 0) : ?>
    </tr>
    <tr>
            <?php endif; ?>
        <?php endfor; ?>
        <?php for ($i = $lastDay->format('N'); $i < 7; ++$i) : ?>
        <td>&nbsp;</td>
        <?php endfor; ?>
    </tr>
</table>
