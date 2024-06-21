<?php

session_start();
require_once 'connect.php';

$mail=$_POST['mail'];
$password=md5($_POST['pass']);

$check_user=mysqli_query($connect,"SELECT * FROM `name` WHERE `E-mail`='$mail' AND `Пароль`='$password'");
if (mysqli_num_rows($check_user)>0){
    $user=mysqli_fetch_assoc($check_user);
    $_SESSION['user']=[
        "id" =>$user["id"],
        "firstName"=>$user["Имя"],
        "lastName"=>$user["Фамилия"],
        "surname"=>$user["Отчества"],
        "E-mail" =>$user["E-mail"],
        "phone" => $user["Телефон"]
    ];
    header('Location:../profile.php');
}
else
{
    $_SESSION['message']='Не верный E-mail или пароль';
    header('Location:../main.html');
}