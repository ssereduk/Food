<?php
$_POST = json_decode(file_get_contents("php://input"), true); //вариант как на пхп коде получить JSON файл
echo var_dump($_POST);