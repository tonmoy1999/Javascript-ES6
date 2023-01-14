// // const obj={
// //     name:"tonmoy",
// //     age:23,
// //     id:0066
// // }
// // const {name,age,id}=obj;
// export let text=studints;
// const studints=[
//     {
//         id:001,
//         cgp:2.15,
//         name:"aaaaaaaa"
//     },
//     {
//         id:002,
//         cgp:2.80,
//         name:"sabbir"
//     },
//     {
//         id:003,
//         cgp:5.15,
//         name:"bbbbbbb"
//     },
//     {
//         id:004,
//         cgp:1.15,
//         name:"eeeeeeeee"
//     },
//     {
//         id:005,
//         cgp:4.15,
//         name:"jjjjj"
//     },
//     {
//         id:006,
//         cgp:2.15,
//         name:"sssss"
//     }
// ]

// console.log(studints.find(x=>x.cgp>3))
// function studintsNmae(){
//    return studints.filter((x)=>{

//     return x.cgp > 2

//     }).map((y)=>{
// return y.cgp
//     });
// }

// const stName=()=>{
//     // return studints.filter((e) => e.cgp>3).map((x) => x.name)
// }
// console.log(stName());
function myfun(){
    var input=document.querySelector("#myInput");
    if(input.type = "password"){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
};