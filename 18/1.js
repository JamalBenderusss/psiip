

const button = document.querySelector('.button');
let name = document.querySelector('.name');
let password = document.querySelector('.password');
let select = document.querySelector('.select');

let reg = /\d+/;




button.onclick = function (e) {
    e.preventDefault();
    if (name.value === '' || password.value === '') {
        alert("Возможно, вы забыли что-то написать");
    }else if (password.value.length <= 7){
        alert("Слишком короткий пароль!");
    }else if(!reg.test(password.value)){
        alert("Нету цифр!")
    }
    else if (name.value[0] !== name.value[0].toUpperCase()){
        alert("С большой буквы имя!!!")
    }
    else {
        alert(name.value + ' ' + password.value + ' ' + select.value + ' ');
    }
    let regExp = /\d+/g;
    let str = password.value;
    console.log('сплит' + password.value.split(''));
    let result;
    console.log('матч' + str.match(regExp));
    console.log('poisk' + str.search(/\d+/));
    console.log(str.replace(/\d+/g,'x'));

    while ((result = regExp.exec(str)) !== null) {
        console.log(`Найдено ${result[0]} на позиции ${result.index}`);
    }
}

