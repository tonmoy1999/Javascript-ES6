const x = (x,y) => x*y;
// console.log(x);
document.write(x(5,5));


function printNumber(x,y,...z){
    console.log(`x=${x},y=${y} z=${z}`)
}
printNumber(5,6,7,8,9,10,20,30);




let str = `Template literal in ES6`;

console.log(str);// Template literal in ES6
console.log(str.length); // 23
console.log(typeof str);// string
