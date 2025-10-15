// console.log(1 + 3);

// // var
// var firstName = "Aditya"; //delcaer
// console.log(firstName);
// firstName = "Addi"; // reAssign
// console.log(firstName);
// var firstName = "adi"; // reDeclaer
// console.log(firstName);

// // let
// let age = 25; // Declear
// console.log(age);
// age = 26; //reAssign
// console.log(age);

// // const - can't reAssign and delaer
// const myLocation = "Kolkata"; // declaer
// console.log(myLocation);

// // Object - reffrence data type - craet with {}
// // stored in key and valus, to acces value via key
// const userInfo = {
//     firstName: "Aditya",
//     lastName: "Daichi",
//     age: 29
// }
// console.log(userInfo);
// console.log(userInfo.lastName);
// // arry og objects
// const userData = [
//     {
//         firstName: "Aditya",
//         lastName: "Daichi",
//         adress: {
//             permanent: "Kolkata",
//             current: {

//             }
//         }
//     },
//     {
//         age: 29
//     }
// ]
// console.log(userData)
// console.log(userData[0].lastName)
const FullName = "Aditya Daichi ";
//print variabke
console.log(FullName);
//length
console.log(FullName.length); //property
//startWith
console.log(FullName.startsWith(' ')); //true - is a method
//endswith
console.log(FullName.endsWith('i')); // flase
//trim
const fmNoSpace = FullName.trim(); //Method
console.log(FullName);
console.log(fmNoSpace); //print the new trim variable
//trim start
const noSpaceFront = FullName.trimStart();
console.log(noSpaceFront);
console.log(noSpaceFront.length);
//trim end
const noSpaceEnd = FullName.trimEnd();
console.log(typeof noSpaceEnd);
const abc = typeof (noSpaceEnd);
console.log(abc);
console.log(noSpaceEnd);
// Repeat 
console.log(noSpaceEnd.repeat(3));
//includes
console.log(noSpaceEnd.includes("Aditya"));

//promt
const userInput = prompt("Your Name");
console.log(userInput);

//warn
console.warn("Enterd Succesfully");




