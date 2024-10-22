    let currentIndez = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItem = items.length;

    function updateCarousel() {
        const offset = currentIndez * -50 + '%';
        currentIndez++;
        document.querySelector('.carousel-inner').style.transform = 'translateX(' + offset + ')';
        if(currentIndez == 4) return currentIndez = 0;
    }