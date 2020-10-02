<?php
include 'conexao.php';

$nome = $_POST['nome'];
$login = $_POST['login'];
$email = $_POST['email'];
$senha = $_POST['senha'];

$sql = "insert into usuarios (nome,senha,email)
 values ('$nome','$login','$senha','$email')";
mysqli_query($link, $sql);

header ("Location: ");
?>