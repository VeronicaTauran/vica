// //Array
// // Variable yang dapat menyimpan banyak data. 
// //Class dapat membuat object
// // cth:

// //deklarasi variable biasa:Array Literal
// const students = ["John", " Petter","dll","Vica", "Pakk"];
// const number = [1,2,3];
// const john = ["Johna", 3, true ];

// console.log(students);
// console.log(number);
// console.log(john);

// console.log(students[2]);
// students[2]="BOB";// untuk merubah data dalam ARRAY
// console.log(students);
// console.log(students.length); // melihat panjang dalam array tersebut
// console.log(students[students.length-1]);// cara lihat data yang paling akhir 

// //Array Method toString()
// console.log(john.toString());
// //Array Method ->Join
// console.log(john.join("#"));
// // Pop = Menghapus yang paling akhir
// john.pop();
// console.log(john);
// // push tambah data yang paling akhir 
// john.push(" Heyyyyyy akuh sudah diganti");
// console.log(john);
// //Shift hapus data pertama 
// john.shift ();
// console.log(john);
// // unshift tambah yang paling depan 
// john.unshift(" Tatambah tohhhh");
// console.log(john);
// // Splice menambah elemen yang di tengah-- index tempat yang mau ditambah-- jumlah elemen yang mau di hapus( kalau tidak 0)-- 
// john.splice (3,0, "truess")
// console.log(john);
// slice pindah ke piring yg lain. --  pendataan akhir tidak termasuk
// let students = students.slice (2,4);
// console.log(students);
// // Concat 
// let output = john

//Objact -- selalu memiliki property
let vica = {
    firstName: "Veronica",
    lastName : "Tauran",
    age : 21,
    isMarried: False,
    grade : [50,30,90],
    address:{
        city : "Manado",
        province : "Sulawesi Utara",
        postalCode : "95371",
    },
    sayGreetings: function() {
        console.log("Hellow my name is "+ this.firstName);
    },
};

// Dot notation 
