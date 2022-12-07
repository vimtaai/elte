<?php require("partials/header.php"); ?>

<div class="container-fluid flex-grow-1">
  <div class="row h-100">
    <div class="col col-12 col-sm-4 col-lg-2">
      <div class="d-grid gap-2 my-2">
        <a class="btn btn-light text-start border-primary" href="#">
          <strong>💙 First Note</strong>
        </a>
        <a class="btn btn-light text-start" href="#">
          <strong>💢 Second Note</strong>
        </a>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-block my-2" type="button">Add a New Note</button>
      </div>
    </div>

    <main class="col col-12 col-sm-8 col-lg-10 d-flex flex-column">
      <header class="d-flex align-items-center">
        <div class="flex-grow-1 d-flex me-5 mt-2 input-group">
          <input class="form-control form-control-lg input-group-text flex-grow-0 me-1 w-auto" type="text" value="💙" size="1">
          <input class="form-control form-control-lg flex-grow-1 w-auto" type="text" value="My First Note">
        </div>
        <button class="btn btn-secondary me-2" type="button">Save</button>
        <button class="btn btn-danger" type="button">Delete</button>
      </header>

      <hr>

      <aside class="container-fluid">
        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Created</strong>
          <div class="col">November 29, 2022</div>
        </div>

        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Last edited</strong>
          <div class="col">November 30, 2022</div>
        </div>

        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Last edited by</strong>
          <div class="col">@vimtaai</div>
        </div>

        <div class="row my-1">
          <strong class="col col-6 col-md-4 col-lg-2">Tags</strong>
          <div class="col">
            <span class="badge rounded-pill text-bg-secondary">note</span>
            <span class="badge rounded-pill text-bg-secondary">test</span>
          </div>
        </div>
      </aside>

      <hr>

      <textarea class="form-control flex-grow-1 mb-2">This is my very first note here.</textarea>
    </main>
  </div>
</div>

<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div class="toast show align-items-center text-bg-danger border-0">
    <div class="d-flex">
      <div class="toast-body">
        The icon must be a single emoji
      </div>
      <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</div>

<?php require("partials/footer.php"); ?>
