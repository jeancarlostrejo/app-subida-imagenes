<?php 

if(isset($_POST["view"])) {
    $view =  $_POST["view"];

    require "src/". $view .  ".php";
} else {
    require "src/home.php";
}