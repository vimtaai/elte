<br>

<div class="container">
        <div class="col-xs-10">
        <input type="hidden" id="color" 
               value="<?= $_SESSION['logged_in']['color'] ?>">
        <input type="text" id="todo" class="form-control"
                placeholder="What to-do-do-do?">
        </div>
        <div class="col-xs-2">
            <button id="send" class="btn btn-primary">Mentés</button>
        </div>
</div>
<br>
<div class="container" id="todos">
    <?php foreach ($todos as $todo) : ?>
    <div class="well well-sm" style="background: <?= $todo['color'] ?>" id="<?= $todo['id'] ?>">
        <div class="pull-right" style="margin: -4px 4px;">
            <button class="btn btn-sm btn-danger delete" data-id="<?= $todo['id'] ?>">X</button>
        </div>        
        <div class="pull-right" style="margin: -4px 4px;">
            <button class="btn btn-sm btn-success complete" data-id="<?= $todo['id'] ?>">✔</button>
        </div>
        <?= $todo['text'] ?>
    </div>
    <?php endforeach; ?>
</div>