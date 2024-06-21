(()=>{
    const button = document.querySelector('.o1');
    button.addEventListener('click',() => {
        function func() {
            let k = 0;
            return function count() {
                return k++;
            };
        };
        let res = func();
        button.textContent = res;
        if (button.clicked = true) {
           confirm("ready?");
        }
    });

})();