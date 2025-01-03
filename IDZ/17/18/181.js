

const button1 = document.querySelector('.button1');
let name1 = document.querySelector('.name1');
let password1 = document.querySelector('.password1');
let select1 = document.querySelector('.select1');

let reg = /\d+/;




button1.onclick = function (e) {
    e.preventDefault();
    if (name1.value === '' || password1.value === '') {
        alert("Возможно, вы забыли что-то написать");
    }else if (password1.value.length <= 7){
        alert("Слишком короткий пароль!");
    }else if(!reg.test(password1.value)){
        alert("Нету цифр!")
    }
    else if (name1.value[0] !== name1.value[0].toUpperCase()){
        alert("С большой буквы имя!!!")
    }
    else {
        alert(name1.value + ' ' + password1.value + ' ' + select1.value + ' ');
    }
    let regExp = /\d+/g;
    let str = password1.value;
    console.log('сплит' + password1.value.split(''));
    let result;
    console.log('матч' + str.match(regExp));
    console.log('poisk' + str.search(/\d+/));
    console.log(str.replace(/\d+/g,'x'));

    while ((result = regExp.exec(str)) !== null) {
        console.log(`Найдено ${result[0]} на позиции ${result.index}`);
    }
}

