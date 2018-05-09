<?php
require_once '../model/message.php';
require_once '../helper/authorize.php';
require_once '../helper/redirect.php';
require_once '../helper/database.php';
session_start();

authorize(USER);

if (isset($_GET['replyid'])) {
  $replyId = $_GET['replyid'];
  $query = 'SELECT `username` FROM `8_users` JOIN `8_posts` ON `8_users`.`id` = `8_posts`.`userid` WHERE `8_posts`.`id` = :i';
  $replyUserName = Database::selectValue($query, [
    ':i' => $replyId
  ]);
}

$posts = Database::selectAll('SELECT `8_posts`.`id`, `date`, `text`, `likes`, `username` FROM `8_posts` JOIN `8_users` ON `userid` = `8_users`.`id` WHERE `postid` IS NULL');
foreach ($posts as $index => $post) {
  $query = 'SELECT * FROM `8_posts` JOIN `8_users` ON `8_posts`.`userid` = `8_users`.`id` WHERE `postid` = :i';
  $posts[$index]['comments'] = Database::selectAll($query, [
    ':i' => $post['id']
  ]);
}

?>
<?php include '../template/header.php' ?>

  <h1 class="ui horizontal divider">
    Messages Feed
  </h1>

  <!-- ÜZENETKÜLDŐ ŰRLAP -->
  <form class="ui form" method="post" 
        action="../controller/insert-post.php">
    <div class="field">
      <div class="ui action input">
        <input type="text" name="text" placeholder="Type your response here...">
        <button type="submit" class="ui button">Send</button>
      </div>
      <?php if (isset($replyId)) : ?>
        <div class="ui pointing image label">
          You are responding to post of <?= $replyUserName ?>
          <a class="detail" href="list-posts.php">Cancel</a>
        </div>
        <input type="hidden" name="replyid" value="<?= $replyId ?>">
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
          <strong><?= $post['username'] ?></strong>
          <div class="date"><?= $post['date'] ?></div>
        </div>
        <!-- KÜLDŐ ADATAINAK VÉGE -->

        <!-- ÜZENET SZÖVEGE -->
        <div class="text"><?= $post['text'] ?></div>
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
          <?php foreach ($post['comments'] as $comment) : ?>
          <!-- KOMMENT ELEJE -->
          <div class="comment">
            <div class="content">
              <strong class="author"><?= $comment['username'] ?></strong>
              <div class="metadata">
                <span class="date"><?= $comment['date'] ?></span>
              </div>
              <div class="text"><?= $comment['text'] ?></div>
            </div>
          </div>
          <!-- KOMMENT VÉGE -->
          <?php endforeach; ?>
        </div>
        <!-- KOMMENTEK VÉGE -->
      </div>
    </div>
  </div>

  <?php endforeach; ?>
  <!-- ÜZENET VÉGE -->

<?php include '../template/footer.php' ?>
