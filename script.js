let input1 = document.querySelector(".z4");
let input2 = document.querySelector(".z5");

let p = document.querySelector(".z6");
function values(){
  let a=input1.value;
  let x=input2.value;
  mathA(a,x);
}

function mathA(a,x){
  if (x>=2) {
      if ((Math.pow(x,2)-15) == 0) alert("Деление на 0");

    p.innerHTML=((a/(Math.pow(x,2)-15))+ Math.sqrt(2+x));
    return (a/(Math.pow(x,2)-15))+ Math.sqrt(2+x); 
  }else
  if (x>=0 && x<=2){
      if (a < 0) alert("Корень из отрицательного"); 
    p.innerHTML=(2*Math.sqrt(a)-x/4);
    return 2*Math.sqrt(a)-x/4;
  }else
  if(x<0) {
    p.innerHTML=(0.3*x);
    return 0.3*x;
  }
}

let s1 = "Я люблю Беларусь";
let s2 = "Я учусь в политехническом колледже";
function show(){
  console.log(s1.length);
  console.log(s2.replace("учусь", ''));
  console.log(s1.replace(/ю/g,'*'));
}
function reverseString(str) {
  return str.split("").reverse().join("");
}