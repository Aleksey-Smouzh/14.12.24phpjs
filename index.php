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


array_push($liczby, 4);// dadae na conec tablicy wartost
array_unshift($liczby, 0); // dadae na pochontak
array_pop($liczby); //usun perwszi element
array_shift($liczby); // usun ostatni element
print_r($liczby);













?>


    <script src="/script.js"></script>
</body>
</html>