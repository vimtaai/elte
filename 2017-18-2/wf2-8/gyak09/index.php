<!doctype html>

<meta charset="utf-8">
<title>Üzenőfal</title>
<link rel="stylesheet" href="https://tinyurl.com/wf2semantic">

<main class="ui main container text">
  <h1 class="ui horizontal divider">
    Messages Feed
  </h1>

  <!-- ÜZENETKÜLDŐ ŰRLAP -->
  <form class="ui form">
    <div class="field">
      <div class="ui action input">
        <input type="text" placeholder="Type your response here...">
        <div class="ui button">Send</div>
      </div>
      <div class="ui pointing label">You are responding to Joe's comment</div>
    </div>
  </form>
  <!-- ŰRLAP VÉGE -->

  <!-- ÜZENET -->
  <div class="ui feed comments segment">
    <div class="event comment">
      <div class="content">

        <!-- KÜLDŐ ADATAI -->
        <div class="summary">
          <strong>Joe Henderson</strong>
          <div class="date">3 days ago</div>
        </div>
        <!-- KÜLDŐ ADATAINAK VÉGE -->

        <!-- ÜZENET SZÖVEGE -->
        <div class="text">
          Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.
        </div>
        <!-- ÜZENET SZÖVEGÉNEK VÉGE -->

        <!-- LÁJK ÉS KOMMENT -->
        <div class="meta">
          <a class="like"><i class="like icon"></i> 5 Like</a>
          <a class="reply"><i class="reply icon"></i> Reply</a>
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
  <!-- ÜZENET VÉGE -->
</main>
