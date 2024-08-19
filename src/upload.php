<?php

use Intervention\Image\Drivers\Gd\Driver;
use Intervention\Image\ImageManager;

$filename = uniqid() . "-" . $_FILES["file"]["name"];
$tmpFile = $_FILES["file"]["tmp_name"];

$manager = new ImageManager(new Driver());

$img = $manager->read($tmpFile);

$img->save(__DIR__ . "/img/original/" . $filename);

$img->resize(300, 300, function ($constaint) {
    $constaint->aspecRatio();
    $constaint->upsize();
});

$img->save(__DIR__ . "/img/thumbnails/" . $filename);