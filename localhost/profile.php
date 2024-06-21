<?php
    session_start();
    if (!$_SESSION['user']) {
        header('Location:autorisation.php');
     }
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/css/1.css">
    <script defer src="/for_PHP.js"></script>
</head>
<body>
<nav class="navigator">
        <a href="/main.html" class="logo">
            <img src="/Лого.svg" alt="logo">
        </a>
        <ul class="header-list">
            <li class="header-list-item"><a href="#">Бронирование</a></li>
            <li class="header-list-item"><a href="#Kino">Кино</a></li>
            <li class="header-list-item"><a href="#news">Новости</a></li>
            <li class="header-list-item"><a href="#onas">Профиль</a></li>
            <li class="header-list-item we"><a href="/includes/logout.php">Выйти</a></li>
        </ul>
        <div class="icons">
            <a href="https://www.instagram.com/jamalbenderusss/" target="_blank" class="icon-in">
            </a>
            <a href="https://twitter.com/?lang=ru" target="_blank" class="icon-tw">
            </a>
            <a href="https://vk.com/feed" target="_blank" class="icon-vk" >
            </a>
        </div>
    </nav>
    <div class="main-image">
        <img src="Rectangle 180.png" alt="Avatar">
    </div>
    <div class="container">
    <h2 class="title" >Ваш Профиль</h2>
    <div class="group">    
        <div class="images">
            <img class="avatar" src="/avatar.png" alt="avatar" >
            <button id="close-modal">Загрузить фотографию</button>
        </div>
                    <span class="text"><b >Имя:</b><?= $_SESSION['user']['firstName']?></span>
                    <span class="text"><b >Фамилия:</b><?=$_SESSION['user']['lastName']?></span>
                    <span class="text"><b >Отчество:</b><?=$_SESSION['user']['surname']?></span>
                    <span class="text"><b >E-mail:</b><?=$_SESSION['user']['E-mail']?></span> 
                    <span class="text"><b >Телефон:</b><?=$_SESSION['user']['phone']?></span>
                    <span class="text"><b >О себе:</b>
                    История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия.
                </span>
    </div>
    <div class="container" id="Kino">
        <h2 class="title" >Сегодня в кино</h2>
        <div class="days" >
            <div class="kinotheatres-1">    
                <select name="kinotheatres" id="theatre-select" class="burger-menu">
                    <option value="">Кинотеатр</option>
                    <option value="1">Кинотеатр "Октябрь"</option>
                    <option value="2">Кинотеатр "Восток"</option>
                    <option value="3">Кинотеатр "Космос"</option>
                    <option value="4">Кинотеатр "Красная звезда"</option>
                    <option value="5">Молодежный центр</option>
                </select>
            </div>
            <ul class="days-list">
                <li class="days-list-item"  tabindex="1">
                    <span class="t1">чт</span>
                    <span class="t2">19</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item"   tabindex="2">
                    <span class="t1">пт</span>
                    <span class="t2">20</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item"   tabindex="3">
                    <span class="t1">сб</span>
                    <span class="t2">21</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item"  tabindex="4">
                    <span class="t1">вс</span>
                    <span class="t2">22</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item"  tabindex="5">
                    <span class="t1">пн</span>
                    <span class="t2">23</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item"  tabindex="6">
                    <span class="t1">вт</span>
                    <span class="t2">24</span>
                    <span class="t3">октября</span>
                </li>
                <li class="days-list-item" tabindex="7">
                    <span class="t1">ср</span>
                    <span class="t2">25</span>
                    <span class="t3">октября</span>
                </li>
            </ul>
        </div> 
        <div class="films-list">
        </div>
        </div>
        <h2 class="title" id="news">Новости</h2>
        <ul class="news-list">
            <li class="column">
                <ul class="table1">
                    <li class="news-list-item">
                        <p>В репертуаре возможны изменения!</p>
                    </li>
                </ul>
            </li>
            <li class="column">
                <ul class="table2">
                    <li class="news-list-item">
                        <p>В репертуаре возможны изменения!</p>
                    </li>
                </ul>
            </li>
            <li class="column">
                <ul class="table3">
                    <li class="news-list-item">
                        <p>В репертуаре возможны измененивфывфывфя!</p>
                    </li>
                </ul>
            </li>
            <li class="column">
                <ul class="table4">
                    <li class="news-list-item">
                        <p>В репертуаре возможdssssssssssssssssssssssssssssssssssssss</p>
                    </li>
                </ul>
            </li>
        </ul>
        <footer>
        <img src="/Лого.svg" class="logo-1" alt="logo">
        <p class="footer-1">ООО “KinoJam” 2023-н.в. Гродно, ул. Фолюш, 
            50УНП: 156131516
            выдан 21.09.2023 Гродненским горисполкомом</p>
            <div class="data">
                <p class="mts"> +375 (25) 679-69-14</p>
                <p class="life"> +375 (25) 228-80-63</p>
                <p class="mail"> artem.kostyuk.2015@inbox.ru</p>
            </div>
            <div class="time-of-work"><p class="p1">Время работы:</p>
                <p class="p2">пн-пт:8:00-00:00</p>
                <p class="p3">сб-вс:10:00-23:00</p>
            </div>
        </footer>
    <div class="overlay" id="overlay-film-info">
    </div>
    <script>
                  function openFilminfo(){
              cardInfo();             
                overlayFilm.style.display='block';
              window.addEventListener('click',function(event){
                if(event.target===overlayFilm){
                  overlayFilm.style.display='none';
                }
              })
          }
        var overlayFilm=document.getElementById('overlay-film-info');
         function cardInfo(){
          let film=document.createElement('div');
          film.classList.add('.modal-film-info');
          film.innerHTML=`
          <div class="info">
              <h2 class="title"> Оппенгеймер</h2>
              <div class="film">
                  <div class="info-film">  
                      <p>
                          <strong>Дата выхода</strong>
                          21 июля 2023 г.(мир) 
                          <br>
                      </p>
                      <p>
                          <strong>Жанр</strong>  
                          история, драма, биография 
                          <br>
                      </p>
                      <p>
                          <strong>Режисер</strong> 
                          Кристофер Нолан 
                          <br>
                      </p>
                      <p>
                          <strong>В главных ролях</strong> 
                          Киллиан Мерфи Эмили Блант Мэтт Дэймон Роберт Дауни мл.
                          <br>
                      </p>
                      <div class="story">
                          <p>
                              История жизни американского физика-теоретика Роберта Оппенгеймера, который во времена Второй мировой войны руководил Манхэттенским проектом — секретными разработками ядерного оружия.
                          </p>
                      </div>
                      <div id="tickets">
                          <table class="ticketList">
                              <tr class="ticketList-item">
                                  <td class="cinema">
                                      <span class="cinemaName">Ёлки 10 12+ 2D
                                      </span>
                                      <span class="templateName">К-р Октябрь (Гродно)
                                      </span>
                                      <span class="templateName">Малый зал
                                      </span>
                                  </td>
                                  <td class="times">
                                      <a class="ticket" target="_blank" href="https://api.megamag.by/widget/seance.php?id=2561571">
                                          <span>18:00
                                          </span>
                                          <br>
                                          <span>8.00р.
                                          </span>
                                      </a>
                                  </td>
                              </tr>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          `;
          overlayFilm.appendChild(film);
         }
        </script>
</body>
</html>