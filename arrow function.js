// implisit return
const salam = nama => `Halo ${nama}`;
console.log(salam('Rayen'));

// const salam = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;	
// }
// console.log (salam('Riandro', 'Malam'));

let mahasiswa = ['Ignasius Riandro Raul', 'Awal Chandra', 'Nanda Septian'];
// let jumlahHuruf = mahasiswa.map(function (nama){
// 	return nama.length;
// });

// menggunakan arrow function lebih ringkas
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// jika ingin mengembalikan nilainya dalam bentuk object bukan array lagi 
let jumlahHuruf =mahasiswa.map(nama => ({
	nama: nama, jumlahChar: nama.length
}));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);