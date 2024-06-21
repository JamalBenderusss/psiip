<?php
 session_start();
 if ($_SESSION['user']) {
    header('location:profile.php');
 }
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Авторизация</title>
    <link rel="stylesheet" href="/css/css.css">
</head>
<body>
<div class="overlays" id="overlay-registrastion">
        <form action="/includes/signin.php" class="modal" method="post">
            <h2 class="title"> Форма авторизации</h2>
            <div class="line"><p class="modal-text">* E-mail</p> <input class="modal-input" type="email" name="mail" placeholder="Введите E-mail"></div>
            <div class="line"><p class="modal-text">* Пароль</p> <input class="modal-input" type="password" name="pass" placeholder="Введите пароль "></div>
            <div class="line">
                <button id="close-modal" type='submit'>Войти</button>
            </div>
            <p class="line red">
            <?php 
            echo $_SESSION['message'];
            unset($_SESSION['message']);
            ?>
            </p>
        </form>
    </body>
</html>