<h1>TODO</h1>


<div class="form-group container">
    <input type="text" class="form-control col-xs-8" id="todo" 
           placeholder="Mit is kell tennem?...">
    <input type="button" value="Mentés" id="send"
           class="btn btn-primary col-xs-2">
</div>

<div class="container" id="todos">
    <?php foreach ($todos ?? [] as $todo) : ?>
    <div class="alert alert-success">
        <?= $todo['text'] ?>
        <button class="pull-right btn btn-info ready"
                data-todoid="<?= $todo['id'] ?>">Kész</button>
        <button class="pull-right btn btn-danger delete"
                data-todoid="<?= $todo['id'] ?>">Töröl</button>
    </div>
    <?php endforeach; ?>
</div>