const nama = 'web pertama';
let usia = 31;

let biodata = document.getElementById('biodata');
console.log(biodata);

 function generateBiodata() {
   let generasi;

 if (usia >=30 && usia <40) {
    generasi = "generasi remaja";
 } else if (usia >40 && usia <50) {
   generasi = "generasi tua";
 }else {
   generasi = "anda orang mana";
 }
   return biodata,innerHTML = generasi;
 }

 
 console.log(nama);
 console.log(usia);
 generateBiodata();