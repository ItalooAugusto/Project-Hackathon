<?php

$local = "127.0.0.1:3306";
$user = "root";
$password = "";
$database = "react";

$link = mysqli_connect($local, $user, $password, $database);

if (!$link) {
    echo "Não Conectado";
}

?>