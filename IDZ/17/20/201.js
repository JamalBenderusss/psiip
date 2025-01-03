const addButton = document.querySelector('.addButton123');
const input123 = document.querySelector('.input123');
const toDoList = document.querySelector('.list123');
var buf = 0;
addButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input123.value.length > 0) {
        const newInput = input123.value.trim(); // очищаем от пробелов
        const allInput = document.querySelectorAll('.todo .name');
        let boolean = false;
        allInput.forEach(input => {
            if (input.textContent === newInput) {
                alert('Такая задача уже есть!');
                boolean = true;
            }
        })
        if (boolean) {
            return;
        }
        let div = document.createElement('div');
        div.classList.add('todo');
        localStorage.setItem(buf,input123.value);
        setCookie(input123.value,buf);
        buf++;
        div.innerHTML = `<p class="name">${input123.value}</p>
                    <div class="buttons">
                        <button class="green">Сделано</button>
                        <button class="red">Удалить</button>
                    </div>`;
        toDoList.appendChild(div);
        input123.value = '';

    }

});

toDoList.addEventListener('click',(e) => {
    if (e.target.classList.contains('green')) { // проверка есть ли на нашем таргете класс green
        const task = e.target.closest('.todo'); // ближайший его родитель с классом todo
        task.classList.toggle('done');
    }
    if (e.target.classList.contains('red')) {
        const task = e.target.closest('.todo');
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (localStorage.getItem(key) === task.querySelector('.name').innerHTML){
                console.log(getCookie(task.querySelector('.name').innerHTML));
                deleteCookie(task.querySelector('.name').innerHTML);
                localStorage.removeItem(key);
                
            }
        }
        task.remove();
        localStorage.removeItem('')
    }
})


document.addEventListener('DOMContentLoaded', (e) => {
    // deleteAllCookies();
    if (localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            
        let div = document.createElement('div');
        div.classList.add('todo');
        div.innerHTML = `<p class="name">${localStorage.getItem(key)}</p>
                    <div class="buttons">
                        <button class="green">Сделано</button>
                        <button class="red">Удалить</button>
                    </div>`;
        toDoList.appendChild(div);
    }}
    buf = localStorage.length ;
})

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}

function getCookie(name) {
    var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return "";
}

function deleteCookie(name) {
    var date = new Date(); // Берём текущую дату
    date.setTime(date.getTime() - 1); // Возвращаемся в "прошлое"
    document.cookie = name += "=; expires=" + date.toGMTString(); // Устанавливаем cookie пустое значение и срок действия до прошедшего уже времени
}

function deleteAllCookies() {
    // Получаем все cookies
    const cookies = document.cookie.split(";");

    // Для каждого cookie делаем его просроченным
    cookies.forEach(cookie => {
        const cookieName = cookie.split("=")[0].trim();
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    });
}












