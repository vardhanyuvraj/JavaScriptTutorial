//var keyword
var a = 10;
function someFunction() {
    if (true) {
        var x = 10;
        console.log(x);
    }
    x = 15; //variable x can be accessed anywhere in the function
    console.log(x);
    console.log(a);
}
console.log(a);
//console.log(x);
//let keyword
var a1 = 10;
function someFunction1() {
    if (true) {
        var x = 10;
        console.log(x);
    }
    x = 15; //variable x cannot be accesed as it is outside the block
    console.log(x);
    console.log(a1);
}
console.log(a1);
//console.log(x);
//const keyword
var a2 = 10;
function someFunction2() {
    if (true) {
        var a3 = 10;
        a3 = 10;
        console.log(a3);
    }
}
console.log(a2);
