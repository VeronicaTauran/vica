// Buatlah fungsi yang menerima 1 input angka 
// dan mengembalikan string apakah angka yang dimasukan
// adalah bialangan ganjil atau genap
// Menggunakan bentuk IIFE dan Callback Function 

( function (){
    let number= 11;
    let isEligible = number % 2 === 0 ? "Genap" : "Ganjil";
    console.log(isEligible);

})();
//=====================================================================
function ganjilGenap(hasil, callback){
    const isEligible = hasil %2 === 0? "Genap":"Ganjil";
    callback (isEligible);
}

ganjilGenap ("8" , function (isEligible){
    console.log(isEligible);
});