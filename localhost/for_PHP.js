(()=>{
          function handleFocus() {
            // Добавляем класс для подсветки текущей кнопки
            this.classList.add('activebtn');
          }
        
          // Функция, которая будет вызвана при потере фокуса
          function handleBlur() {
            // Убираем класс подсветки у текущей кнопки
            this.classList.remove('activebtn');
          }

          function cards(name,n,active){
            let movies=document.querySelector(name);
            for (let i=0;i<n;i++){
            let movie=document.createElement("div");
            movie.classList.add("films-list-item");
            movie.innerHTML=`
            <img src="/Оппенгеймер.png" alt="Оппенгеймер" class="film-image">
            <h2 class="film-name">Оппенгеймер</h2>
            <p class="film-cost ${active}" onclick="openFilminfo()">15 руб</p>
            `;
            movies.appendChild(movie);  
            };
  
          }
          cards(".films-list",13,'active');
          
          // Получаем все кнопки по классу
          var buttons = document.querySelectorAll('.days-list-item');
        
          // Назначаем функции handleFocus и handleBlur на события focus и blur каждой кнопки
          buttons.forEach(function (button) {
            button.addEventListener('focus', handleFocus);
            button.addEventListener('blur', handleBlur);
          });
    
})()