<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>AJAX: Calendar</title>
    <script type="text/javascript" src="script.js">
    </script>
</head>
<body>
    <h1>Calendar</h1>
    <div id="calendar">
    <?php include 'drawcalendar.php'; ?>
    </div>
    <br>
    <div>
        Event name:
        <input type="text" name="event_name" id="event_name">
        Event date:
        <input type="text" name="event_date" id="event_date" disabled="disabled">
        <input type="button" id="send" value="Create event">
    </div>
</body>
</html>
