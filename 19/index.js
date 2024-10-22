function findOdd(a) {
    a.sort();
    let count = 1;
    if (a.length === 1) return a[0];
    for(let i = 0; i < a.length; i++){
        if(a[i] === a[i+1]){
            count++;
            console.log(count + ' ' + a[i]);
            if (count % 2 === 1){
                return a[i];
            }
        }
        else{
            count = 1;
        }
    }
}
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));