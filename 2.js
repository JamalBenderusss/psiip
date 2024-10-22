/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let count = 0;
    s = s.split('');
    for (let i = 0; i < s.length; i++){
        if ((s[i] === 'A' && s[i+1] === 'B') || (s[i] === 'C' && s[i+1] === 'D')){
            s.splice(i,2);
            i = -1;
        }
        console.log(s);
    }
    return s.join('').length;
};
s = minLength("CCCCDDDD");
console.log(s);