(()=>{

  }) 

document.querySelector('.p1').addEventListener('click', function (e) {
    var div = document.querySelector('.shado')
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    var dbutton = div.querySelectorAll('button');
    dbutton.forEach(button => {
        button.style.display = 'block';
        
    });
})
  
document.querySelector('.close').addEventListener('click', function (e) {
    var div = document.querySelector('.shado')
    div.style.display = 'none';
    div.style.flexDirection = 'column';
    var dbutton = div.querySelectorAll('button');
    dbutton.forEach(button => {
        button.style.display = 'none';
        
    })
});
window.addEventListener('load', () => {
    setTimeout(() => {
        let div = document.createElement('div');
        div.classList.add('modal');
        div.innerHTML = ` <div class="modal-content">
    <span class="close" id=c1>&times;</span>
    <h2>Специальное предложение!</h2>
    <p>Получите скидку 50% на первый заказ!</p>
    <button>Узнать больше</button>
  </div>`;
  let main = document.querySelector('.main-content');
  main.appendChild(div);
  div.style.display = "block";

  var span = document.getElementById("c1");
  span.onclick = function() {
    div.style.display = "none";
  }

  // Когда пользователь кликает в любом месте за пределами модального окна, закрываем его
  window.onclick = function(event) {
    if (event.target == div) {
      div.style.display = "none";
    }
  }
    }, 5000);
  })

 let currentIndex = 0;
const intervalTime = 3000; // Интервал в миллисекундах (3 секунды)

const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;

function nextSlide() {
    currentIndex++;

    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const offset = currentIndex * -100 + '%';
    carouselInner.style.transform = 'translateX(' + offset + ')';
}

// Запуск автоматической прокрутки
setInterval(nextSlide, intervalTime);

const moveDiv = document.getElementById("DmoveDiv");
moveDiv.addEventListener("dragstart", () => {
  console.log("wassap");
})

var amountScrolled = 200;

moveDiv.addEventListener("touchstart",(e) => {
  console.log("Коснулись!");
})

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

// document.addEventListener('keydown',function(e){
//   alert("Нажата клавиша " + e.key);
// })

let getCalatog = document.querySelector('.get');
let radio = document.querySelector('.radio');
let input = document.querySelector('.email');
getCalatog.addEventListener('click',()=>{
  if (input.value == '') {
    alert('Поле не должно быть пустым!');
  }
  else if (input.value.length<=10) {alert('email должен быть не короче 10 символов!')}
  else if (!radio.checked) {alert('Согласитесь на обработку данных!')}
  else alert('Удачно!');
})


let phoneB = document.querySelector('.p3');
phoneB.addEventListener('click',function() {
        let div = document.querySelector('.contact-form');
        div.style.width = '100%' ; 
        let main = document.querySelector('.main-content');
        let main_up = document.querySelector('.main-up');
        let main_medium = document.querySelector('.main-medium');
        main_up.style.display = "none";
        main_medium.style.display = "none";
        div.style.display = "flex";      
        var span = document.getElementById("close");
          span.onclick = function() {
            div.style.display = "none";
            div.style.width = '0%' ; 
            main.style.display = "flex";  
            main_up.style.display = "block";
            main_medium.style.display = "flex";
          }

          let input1 = document.getElementById('name');
          let input2 = document.getElementById('phone');
          let input3 = document.getElementById('email');
          let input4 = document.getElementById('comment');
          let sendB = document.getElementById('submit1');
          let phonePattern = /^\+?[0-9\s\-]{8,15}$/;
          let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          sendB.addEventListener('click', function() {
              if (input1.value === '' || input2.value === '' || input3.value === '' || input4.value === '') {
                  alert('Поле не должно быть пустым!');
              } else if (input2.value.length < 8) {
                  alert('Номер должен быть больше 8 символов');}
                  else if (!phonePattern.test(input2.value)) {
                    alert('Введите правильный номер телефона. Номер должен содержать от 8 до 15 цифр и может начинаться с +.');
                }else if (!emailPattern.test(input3.value)) {
                    alert('Введите правильный email.');
                }
                  else if (input4.value.length < 10) {
                  alert('Введите не короткий комментарий!');
              } else {
                  alert('Удачно!');
                  div.style.display = "none";
          div.style.width = '0%' ; 
          main.style.display = "flex";  
          main_up.style.display = "block";
          main_medium.style.display = "flex";
              }
          });
        
})

