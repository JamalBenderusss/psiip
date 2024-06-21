(() => { 
   const inputs = document.querySelectorAll('.i2');
console.log(inputs);
for (let input in inputs) {
    inputs[input].addEventListener('click',()=>{
        console.log(input);
        switch (parseInt(input)+1){
            case 1:{alert(input); break}
            case 2:{alert(input); break}
            case 3:{alert(input);break}
            case 4:{alert(input);break}
            case 5:{alert(input);break}
            case 6:{alert(input);break}
            case 7:{alert(input);break}
            case 8:{alert(input);break}
            case 9:{alert(input);break}
            case 10:{alert(input);break}
            case 11:{alert(input);break}
        };
        return input++;
    });

    };
})();