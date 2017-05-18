<?php

require_once 'functions.php';

$stars = load_from_file('star.json');

if ($_POST) {
    $stars = array_filter($stars, function ($s) {
        return $s['type'] === $_POST['type'];
    });
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        #egbolt {
            width:  500px;
            height: 300px;
            position: relative;
            overflow: hidden;
        }
        #egbolt div {
            position: absolute;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <form method="post">
        Típus: <select name="type">
            <option value="n">nap</option>
            <option value="g">galaxis</option>
            <option value="s">szupernova</option>
            <option value="h">hullocsillag</option>
        </select>
        <input type="submit">
    </form>
    <button id="select">Kijelölés</button>
    <div id="egbolt">
    <?php if (count($stars)) : ?>
        <?php foreach ($stars as $star) : ?>
        <div style="top: <?= $star['y'] ?>px; left: <?= $star['x'] ?>px;"
             data-id="<?= $star['id'] ?>" class="star">
            <?= $star['type'] == 's' ? '×' : ($star['type'] == 'h' ? '/' : '*') ?>
        </div>
        <?php endforeach; ?>
        <div id="selectRect" style="display: none; border: solid red 1px;"></div>
    <?php endif; ?>
    </div>
    <pre id="details">
    </pre>
    <script type="text/javascript">
        function $(s) {
          return document.querySelector(s);
        }  
        function ajax(opts) { 
            var mod    = opts.mod        || 'GET',
                url      = opts.url      || '',
                getadat  = opts.getadat  || '',
                postadat = opts.postadat || '',
                siker    = opts.siker    || function(){},
                hiba     = opts.hiba     || function(){};

            mod = mod.toUpperCase();
            url = url+'?'+getadat;
            var xhr = new XMLHttpRequest(); // ujXHR();
            xhr.open(mod, url, true);
            if (mod === 'POST') {
                xhr.setRequestHeader('Content-Type', 
                'application/x-www-form-urlencoded');
            }
            xhr.addEventListener('readystatechange', function () {
                if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    siker(xhr, xhr.responseText);
                } else {
                    hiba(xhr);
                }
                }
            }, false);
            xhr.send(mod == 'POST' ? postadat : null);
            return xhr;
        }
        function delegate(pSel, type, cSel, fn) {
            const p = $(pSel);
            p.addEventListener(type, function (e) {
                let t;
                for (t = e.target;
                t !== p && !t.matches(cSel);
                t = t.parentNode);
                if (t === p) { return; }
                e.delegatedTarget = t;
                fn.call(t, e);
            }, false);}
        delegate('#egbolt', 'click', '.star', function (e) {
            console.log('getting star data');
            let id = e.target.getAttribute('data-id');
            ajax({
                mod: 'GET',
                url: 'getdetails.php',
                getadat: 'id=' + id,
                siker: function (xhr, text) {
                    let star = JSON.parse(text);
                    $('#details').innerHTML = text;
                    if (star.type == 'h') {
                        console.log('falling');
                        let fall = setInterval(function () {
                            let starDOM = $('#egbolt div[data-id="' + star.id + '"]');
                            let top = parseInt(starDOM.style.top);
                            starDOM.style.top = (top + 1) + 'px';
                            if (top > 300) {
                                clearInterval(fall);
                            }
                        }, 30);
                    }
                }
            });
        }, false);

        let selectMode = 0; // 0: nincs kijelölés, 1: 0 van kijelölve, 2: 1 kijelölve
        let select = [];
        $('#select').addEventListener('click', function () {
            selectMode = 1;
            let stars = document.querySelectorAll('.star');
            for (let star of stars) {
                star.style.color = 'black';
            }
        }, false);
        $('#egbolt').addEventListener('click', function (e) {
            if (selectMode != 0) {
                select[selectMode] = {
                    x: e.offsetX,
                    y: e.offsetY
                };
                selectMode = (selectMode + 1) % 3;
                if (selectMode == 0) {
                    let selectDOM = $('#selectRect');
                    selectDOM.style.display = 'block';
                    selectDOM.style.top = select[1].y + 'px';
                    selectDOM.style.left = select[1].x + 'px';
                    selectDOM.style.width = Math.abs(select[2].x - select[1].x) + 'px';
                    selectDOM.style.height = Math.abs(select[2].y - select[1].y) + 'px';

                    ajax({
                        mod: 'GET',
                        url: 'getselect.php',
                        getadat: 'select=' + JSON.stringify(select),
                        siker: function (xhr, json) {
                            let x = JSON.parse(json);
                            console.log(x);
                            for (let star of x) {
                                $('.star[data-id="' + star.id + '"]').style.color = 'red';
                            }
                            $('#details').innerHTML = 'Kijelölés: ' + x.length + 'db';
                        }                    
                    });
                    select = [];
                }
            }

        }, false);
    </script>
</body>
</html>