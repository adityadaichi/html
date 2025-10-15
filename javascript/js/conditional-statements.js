// const userAge = 18;
// if (userAge >= 18) {
//     console.log("you can vote ...")
// }
// else {
//     console.log("You can't vote...")
// }

// const userInput = prompt("Enter your Total Marks in %");

// const totalMarksObtain = Number(userInput);

// console.log(typeof totalMarksObtain);

// if (totalMarksObtain < 0) {
//     alert("Please enter a valid number between 0 to 100")

// } else if (totalMarksObtain >= 90) {
//     console.log("Your Grade is A+")

// } else if (totalMarksObtain >= 80) {
//     console.log("Your Grade is A-")

// } else if (totalMarksObtain >= 60) {
//     console.log("Your grade is B")

// } else {
//     console.log("Your Grade is C")
// };

// // 2️⃣ Problem: Check whether the temperature is Cold or Warm

// const userInput = parseInt(prompt("Enter the temperature in °C"));
// console.log(typeof userInput);
// // const temperature = Number(userInput);
// if (userInput != Number) {
//     alert("Enter avalid number")
// } else if (userInput < 22) {
//     console.log("The weather is Cold");
// } else {
//     console.log("The weather is Warm");
// }

//*****************************/
// 2. calculator operation 
// operator , + , - , * , /  
// let a = 10, and b ;  take input from user 
// console.log(result: a+b)
/*
const aStr = prompt("Enter first number");
const a = Number(aStr);
const bStr = prompt("Enter 2nd number");
const b = Number(bStr);
const math = prompt("Enter oporator");
switch (math) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b)
    default:
        console.log("No Action")
}
       

// Trafic light
const traficLight = prompt("Enter trafic light")
switch (traficLight) {
    case "Red":
        console.log("STOP")
        break;
    case "Green":
        console.log("Go");
        break;
    case "Yellow":
        console.log("Slow Down");
    braeke;
    deloult:
        console.log (No Signal found);
}
         */

const apiStatus = prompt("Enter Https status code")
switch (apiStatus) {
    case "200":
        console.log("Success");
        break;
    case "300":
        console.log("Redirection");
        break;
    case "400":
        console.log("Bad request");
    case "500":
        console.log("Server Error")
        break;
    default:
        console.log("No API Responce");
}