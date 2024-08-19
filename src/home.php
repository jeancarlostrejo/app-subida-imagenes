<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Home</h1>
    <form action="?view=upload" method="POST" enctype="multipart/form-data">
        <input type="file" name="file" id="file">
        <input type="submit">
    </form>

    <div id="files-container">

    </div>
    <script src="src/resources/app.js"></script>
</body>
</html>
