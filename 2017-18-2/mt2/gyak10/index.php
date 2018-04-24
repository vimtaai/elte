<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Családi pénznyilvántartás</title>
    <link rel="stylesheet" href="https://bit.do/wf2css">
    <style>table td,table th{line-height: 1;height: initial;width: initial;padding: 10px;}</style>
</head>
<body>
    <form method="post">
        Összeg: 
        <input type="number" name="amount">
        <input type="submit" value="Mentés">
    </form>
    <table>
      <caption style="color: green">
        5500 Ft
      </caption>
      <tr>
        <th>Tranzakció azon.</th>
        <th>Dátum</th>
        <th>Összeg</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2018.04.23. 08:00:00</td>
        <td style="color: green">+6500</td>
      </tr>
      <tr>
        <td>2</td>
        <td>2018.04.23. 08:00:00</td>
        <td style="color: red">-1000</td>
      </tr>
    </table>
</html>