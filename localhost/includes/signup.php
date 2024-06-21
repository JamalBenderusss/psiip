<?php
 session_start();
 require_once 'connect.php';

 $firstName=$_POST['firstName'];
 $lastName=$_POST['lastName'];
 $surname=$_POST['surname'];
 $phone=$_POST['phone'];
 $mail=$_POST['mail'];
 $password=$_POST['pass'];
 $password_confirm=$_POST['confirm_pass'];
 $check_user=mysqli_query($connect,"SELECT * FROM `name` WHERE `E-mail`='$mail' OR `Телефон`='$phone'");
 if (mysqli_num_rows($check_user)==0){
 if($password=== $password_confirm){
    $password=md5($password);
    mysqli_query($connect, "INSERT INTO `name` (`id`, `Имя`, `Фамилия`, `Отчества`, `E-mail`, `Телефон`, `Пароль`) 
                 VALUES (NULL, '$firstName', '$lastName', '$surname', '$mail', '$phone', '$password')");
    $_SESSION['message']='Регистрация прошла успешно!';
    header('Location:../autorisation.php');
}
 else{
    $_SESSION['message']='Пароли не совпадают';
    header('Location:../registration.php');
}
}else{
    $_SESSION['message']= 'Пользователь с таким E-mail или телефоном уже есть';
    header('Location:../registration.php');
}
?>
    <?php
    print_r($_FILES);
    ?>
