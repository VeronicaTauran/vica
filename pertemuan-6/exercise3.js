// Veronica Tauran 
//Tugas Latihan 

let people = ["Greg", "Mary", "Devon", "James"];
//=======================SATU================================
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }
//========================DUA================================
people.forEach(function(person) {
    console.log(person);
  });
//======================TIGA=================================
people.splice(0, 1);
console.log(people);
// =======================EMPAT==============================
people.pop();
console.log(people);
// ====================LIMA==================================
people.unshift("Matt");
console.log(people);
// =======================ENAM===============================
people.push("Vicananana");
console.log(people);
// =========================TUJUH============================
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
      break;
    }
  }
// =======================DELAPAN============================
const copyPeople = people.slice(2,4)
console.log(copyPeople);
// =======================SEMBILAN===========================
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people);
//========================SEPULUH============================
const withBob = people.concat("Bob");
console.log(withBob);

//----------------------------------------------------------------
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


//========================SEBELAS===========================
programming.languages.push("Go");
console.log(programming);
//=======================DUABELAS===========================
programming["difficulty"]=7;
console.log(programming);
//=====================TIGABELAS============================
delete programming.jokes;
console.log(programming);
//======================EMPATBELAS==========================
programming.isFun = true ;
console.log(programming);
//======================LIMABELAS===========================
programming.languages.map((language, index) => {
  console.log('${index} - ${language}');
});
