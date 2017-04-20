<?php 

// Változó létrehozása
$nev = 'Elemér';

echo 'Hello világ';
print 'Hello világ';
echo('Hello világ');
print('Hello világ');

echo "Üdvözlet ${nev}nek!<br>";
echo 'Üdvözlet ${nev}nek!';
echo 'Üdvözlet ' . $nev . 'nek!';

for ($i = 1; $i <= 6; $i++) {
    echo '<h' . $i . '>Hello világ!</h' . $i . '>';
    print("<h$i>Hello világ!</h$i>");
}

?>