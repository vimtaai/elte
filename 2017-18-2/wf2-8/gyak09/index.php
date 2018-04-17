<?php

// kapcsolódás az adatbázishoz
$db = new PDO('mysql:dbname=wf2_wp1c0x;host=localhost',
              'wp1c0x', 'wp1c0x');

if (isset($_GET['replyid'])) {
  $replyid = $_GET['replyid'];
}

// bemenet feldolozása
if (count($_POST) > 0) {
  if ($_POST['text'] == '') {
    // hiba
  } else {
    // beszúrás az adatbázis
    $query = 'INSERT INTO `posts` (`text`) VALUES (:t)';
    $stmt = $db->prepare($query);
    // $stmt->bindParam(':t', $_POST['text']);
    
    // $stmt->execute();
    // VAGY
    $stmt->execute([
      ':t' => $_POST['text'],
    ]);
  }
}

// lekérdezés előkészítése
$stmt = $db->prepare('SELECT * FROM `posts`');
$stmt->execute();
// adatok kinyerése
$posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

//var_dump($posts);

?>
<!doctype html>

<meta charset="utf-8">
<title>Üzenőfal</title>
<link rel="stylesheet" href="https://tinyurl.com/wf2semantic">

<main class="ui main container text">
  <h1 class="ui horizontal divider">
    Messages Feed
  </h1>

  <!-- ÜZENETKÜLDŐ ŰRLAP -->
  <form class="ui form" method="post">
    <div class="field">
      <div class="ui action input">
        <input type="text" name="text" placeholder="Type your response here...">
        <button type="submit" class="ui button">Send</button>
      </div>
      <?php if (isset($replyid)) : ?>
        <div class="ui pointing label">
          You are responding to post number <?= $replyid ?>
        </div>
      <?php endif; ?>
    </div>
  </form>
  <!-- ŰRLAP VÉGE -->

  <!-- ÜZENET -->
  <?php foreach ($posts as $post) : ?>

  <div class="ui feed comments segment">
    <div class="event comment">
      <div class="content">

        <!-- KÜLDŐ ADATAI -->
        <div class="summary">
          <strong>Anonymus</strong>
          <div class="date"><?= $post['date'] ?></div>
        </div>
        <!-- KÜLDŐ ADATAINAK VÉGE -->

        <!-- ÜZENET SZÖVEGE -->
        <div class="text">
          <?= $post['text'] ?>
        </div>
        <!-- ÜZENET SZÖVEGÉNEK VÉGE -->

        <!-- LÁJK ÉS KOMMENT -->
        <div class="meta">
          <a class="like">
            <i class="like icon"></i>
            <?= $post['likes'] ?> 
            like<?= $post['likes'] == 1 ? '' : 's' ?>
          </a>
          <a class="reply" href="?replyid=<?= $post['id'] ?>">
            <i class="reply icon"></i> Reply
          </a>
        </div>
        <!-- LÁJK ÉS KOMMENT VÉGE -->

        <!-- KOMMENTEK -->
        <div class="comments">
          <!-- KOMMENT ELEJE -->
          <div class="comment">
            <div class="content">
              <strong class="author">Jenny Hess</strong>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>

              <div class="text">
                Joe you are always so right :)
              </div>
            </div>
          </div>
          <!-- KOMMENT VÉGE -->
        </div>
        <!-- KOMMENT VÉGE -->

      </div>
        <!-- KOMMENTEK VÉGE -->

      </div>
    </div>
  </div>

  <?php endforeach; ?>
  <!-- ÜZENET VÉGE -->
</main>
