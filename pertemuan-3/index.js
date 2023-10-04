//Variable 
// variable JS biasanya pake bahasa English. dan menggunakan Camel Case
// let & conset
// berbedaaat let dan const adalah let dapat berubah const todak dapat.

let firstName = "John Doe" //(string)
let age = 30; //Numbers bulat
let grade = 90.8; //Numbers decimal
let isActive = true; //bolean

console.log(firstName);
console.log(age);
console.log(grade);
console.log(isActive);
//clg shortcutnya.
const gender =" male " // tidak bisa berubah

//Operators
let num = 10;
num ++;
num = num + 1;
num += 1;
console.log(num);

let fName = "John";
let lName = "Doe";

console.log("Hello nama saya " + fName + " "+ lName);

//Relation Operators
let num1 = "5";
let num2 = 5;

console.log(num1 === num2); // string equality
console.log(num1 == num2);//loos equality

//
let umur = 15;
let isEligible = umur = 17 ? true : false;
console.log(isEligible);

//JavaScript Function 

function greatings(){
    console.log("Hellow World");
}
greatings();

function greetings(){
    return "Hellow Worldsss";
}
let output = greetings();
console.log(output)