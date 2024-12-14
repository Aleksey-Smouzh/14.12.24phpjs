<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php
$liczby = [1, '2', 3];
print_r($liczby);

array_push($liczby, 4); // dadae na conec tablicy wartost
array_unshift($liczby, 0); // dadae na pochontak
array_pop($liczby); //usun perwszi element
array_shift($liczby); // usun ostatni element
print_r($liczby);

foreach ($liczby as $index => $liczba) {
    echo "element $index: $liczba </br>";
}

$osoba = new stdClass();
$osoba->imie = "jan";
$osoba->wiek = 25;

$osoba->miasto = "Warszawa";

//print_r($osoba); to nie dziala dla obiektow
foreach ($osoba as $klucz => $wartosc) {
    echo "$klucz: $wartosc </br>";
}

for ($i = 0; $i <= 5; $i++) {
    echo ("i:" . $i);
}
;

$j = 0;

while ($j <= 5) {
    echo ("j:" . $j);
    $j++;
}

$k = 0;
do {
    echo ("k:" . $k);
    $k++;
} while ($k <= 5);

$liczby = [1,"2",3,4,5,6,7,8,9,10];


$parzyste= array_filter($liczby, fn($liczba) => $liczba % 2 ===0);
$potengi = array_map(fn($liczba) => $liczba * $liczba, $liczby);

print_r($parzyste);
print_r($potengi);









?>


    <script src="/script.js"></script>
</body>
</html>