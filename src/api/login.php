<?php 
session_start();
include 'conexao.php';

$login = $_POST['login'];
$password = $_POST['password'];


echo $login;
echo "<br>";
echo $password;

$sql = "SELECT * FROM usuarios WHERE login = '$login' AND senha = '$password' ";

$rst = mysqli_query($link, $sql);

$linha = mysqli_fetch_array($rst);


if ( $login == $linha[2] && $password ==  $linha[3]) {
   
    $_SESSION['iduser'] = $linha[0];
    header ("Location: index.php");
}else{
   
}



?>