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
    <title>Регистрация</title>
    <link rel="stylesheet" href="/css/css.css">
</head>
<body>
<div class="overlays" id="overlay-registrastion">
        <form action="/includes/signup.php" class="modal" method="post">
            <h2 class="title"> Форма регистрации</h2>
            <div class="line"><p class="modal-text">* Фамилия</p> <input class="modal-input" type="text" name="firstName" placeholder="Введите имя"></div>
            <div class="line"><p class="modal-text">* Имя</p> <input class="modal-input" type="text" name="lastName" placeholder="Введите фамилию"></div>
            <div class="line"><p class="modal-text">* Отчество</p> <input class="modal-input" type="text" name="surname" placeholder="Введите отчество"></div>
            <div class="line"><p class="modal-text">* Пол</p>   
                <script> function handleClick(gender){
                    console.log(`Выбран пол: ${gender}`);
                  }
                  </script>
                <div class="modal-choose">
                    <div class="sex">
                        <p>Мужской</p>
                        <input type="radio" name="gender" value="male" onclick="handleClick('male')">
                    </div>
                    <div class="sex">
                        <p>Женский</p>
                        <input type="radio" name="gender" value="female" onclick="handleClick('female')"> 
                    </div>
                </div>
            </div>
            <div class="line"><p class="modal-text">* E-mail</p> <input class="modal-input" type="email" name="mail" placeholder="Введите E-mail"></div>
            <div class="line"><p class="modal-text">* Телефон</p> <input class="modal-input" type="text" name="phone" placeholder="Введите номер телефона"></div>
            <div class="line"><p class="modal-text">* Пароль</p> <input class="modal-input" type="password" name="pass" placeholder="Введите пароль "></div>
            <div class="line"><p class="modal-text">* Повторите пароль</p> <input class="modal-input" type="password" name="confirm_pass" placeholder="Еще раз"></div>
            <div class="line">
                <button id="close-modal" type='submit'>Зарегистрироваться</button>
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