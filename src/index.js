module.exports = function reverse (n) {
let p;
let a =  n.toString().split('').reverse().join('');
    if (a[a.length-1]==='-'){
        p = a.slice(0, a.length-1);
    } else {p = a}
    return p;
}
