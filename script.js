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
// Default Parameters

function say(defaultt="hello im tonmoy"){
   console.log(defaultt);
}
// say("hi i am a sabbir ahmad tonmoy");
say();

// Rest Parameters

function rest(...z){
let sum=0;
for(let a of z){
    sum+=a;
    
}
console.log(sum);
}
rest(10,20,30);

// Spread Operator

const array1=["1","2","3","4","5","6"]
const array2=["7","8","9","10","11","12"]

const array3 =[...array1,...array2]
console.log(array3);

// Object literal syntax extensions 
function createMachine(name, status) {
    return {
        name,
        status
    };

}
console.log(createMachine("hlw","i am tonmoy"));

// for of loop
let sum=0;
for(let array of array3){
    // console.log(array);
    sum+=array;
   
}
 console.log(sum);

//  for in loop


for(let array in array3){
    console.log(array);

   
}



// Template Literals In Depth
