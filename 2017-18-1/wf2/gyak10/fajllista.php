<?php include './includes/header.php'; ?>
<main class="container">
  <ol class="breadcrumb mt-2">
    <li class="breadcrumb-item"><a href="feladatlista.php">Feltöltött fájlok</a></li>
    <li class="breadcrumb-item"><a href="fajllista.php">JavaScript beadandó (DOM)</a></li>
  </ol>

  <h3 class="py-2">JavaScript beadandó (DOM)</h3>

  <table class="table table-striped table-hover table-bordered">
    <thead class="thead-dark">
      <tr>
        <th>Feltöltő</th>
        <th>Fájl neve</th>
        <th>Fájl mérete</th>
        <th>Feltöltés ideje</th>
        <th>Letöltés</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="5">
          <a href="feladatlista.php">Vissza a feladatokhoz</a>
        </td>
      </tr>

      <!-- Feldat eleje -->
      <tr>
        <td>WP1C0X</td>
        <td>wp1c0x.zip</td>
        <td>14.2 kB</td>
        <td>2017.11.29. 14:15</td>
        <td>
          <a href="#" class="btn btn-secondary btn-sm btn-block">Letöltés</a>
        </td>
      </tr>
      <!-- Feldat vége -->

      <tr>
        <td>WP1C0X</td>
        <td>wp1c0x_2.zip</td>
        <td>14.2 kB</td>
        <td>2017.12.01. 13:37</td>
        <td>
          <a href="#" class="btn btn-secondary btn-sm btn-block">Letöltés</a>
        </td>
      </tr>
    </tbody>
  </table>
</main>
<?php include './includes/footer.php'; ?>