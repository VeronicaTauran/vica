// function

function greetings(){
    return "Hello";
}
console.log(greetings());

const greeting = function (){
    return "HAY";
}
console.log(greeting());
const job ="teacher"; // Scope Local

//parameter greetings(name)
//argumen clg.log(Greetings("John"))
const age = 17; // Scope Global 
// Scope Block contohnya di dalam IF
// Scope Global di luar dari function 
// Scope Local di dalam function

// IIFE ( Immediately Invoked Function Expression ) = Fungsi yang langsung di panggil 
//contoh:
(function (){
    console.log("HELLO IIFE");
})();

//ATAU BISA SEPERTI INI JUGA

const output = (function (){
    return "Hay IIFE";
})();
console.log(output);

//CALLBACK FUNCTION =  fungsi yang di kirim sebagai argumen (bikin dulu semua tugas kemudian panggil lagi.)

function CreateGreetings (name , callback){
    const sapa = "Hay "+ name ;
    callback (sapa);

}

function logGreetings (sapa){
    console.log(sapa);
}

CreateGreetings("Judd", logGreetings);