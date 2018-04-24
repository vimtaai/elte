<?php
require_once 'model/message.php';
require_once 'helper/database.php';

session_start();

// kapcsolódás az adatbázishoz
$db = connect('mysql:dbname=wf2_wp1c0x;host=localhost',
              'wp1c0x', 'wp1c0x');

// meghatározzuk, hogy melyik üzenetre válaszolunk
if (isset($_GET['replyid'])) {
  $replyid = $_GET['replyid'];
}

// adatok lekérdezése
$posts = select($db, 'SELECT * FROM `posts`');

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
  <form class="ui form" method="post" 
        action="controller/insert-post.php">
    <div class="field">
      <div class="ui action input">
        <input type="text" name="text" placeholder="Type your response here...">
        <button type="submit" class="ui button">Send</button>
      </div>
      <?php if (isset($replyid)) : ?>
        <div class="ui pointing image label">
          You are responding to post number <?= $replyid ?>
          <a class="detail" href="index.php">Cancel</a>
        </div>
      <?php endif; ?>
    </div>
    <?php foreach (Message::getMessages() as $message) : ?>
      <?= $message ?>
    <?php endforeach; ?>
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
