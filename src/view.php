<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View</title>
    <link rel="stylesheet" href="src/resources/main.css">
</head>
<body>

    <div class="container-views">
        <h1>Imagenes guardadas</h1>
        <main>
            <?php
                $files = scandir(__DIR__ . "/img/thumbnails");
    
                foreach ($files as $file) {
                    if (strlen($file) > 2) {
                        echo '<div class="file-item"><a href="src/img/original/' . $file . '" target="_blank"><img src="src/img/thumbnails/' . $file . '" /></a></div>';
                    }
                }
            ?>
        </main>
    </div>

</body>
</html>