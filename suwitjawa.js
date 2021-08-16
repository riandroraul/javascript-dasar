var tanya = true;
while (tanya) {
	// menangkap pilihan player 
	var p = prompt('pilih : gajah, semut, orang');


	// menangkap pilihan komputer 


	// membangkitkan bilangan random 
	var comp = Math.random();

	if(comp < 0.34) {
		comp = 'gajah';
	} else if(comp >= 0.34 && comp < 0.67) {
		comp = 'semut';
	} 	else {
		comp = 'orang';
	}

	var hasil = '';

	// menentukan rules
	if(p == comp) {
		hasil = 'SERI!';
	}	else if (p == 'gajah') {
		// if(comp == 'orang'){
		// 		hasil = 'MENANG!';
		// 		else {
		// 			hasil = 'KALAH!';
		// 		}
		// }
		hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
	} else if(p == 'orang'){
		// if(comp == 'semut'){
		// 	hasil = 'KALAH!'; 
		// }else {
		// 	hasil = 'KALAH';
		// }
		hasil = (comp == 'semut') ? 'MENANG' : 'KALAH';
	} else if(p == 'semut'){
		// if(comp == 'gajah'){
		// 	hasil = 'MENANG';
		// }else {1
		// 	hasil = 'KALAH';
		// }
		hasil = (comp == 'gajah') ? 'MENANG' : 'KALAH';
	} else {
		hasil = 'Memasukkan pilihan yang SALAH';
	}

	// menentukan hasilnya 
	alert('Kamu Memilih '+ p + ' Komputer memilih '+ comp + ' Maka Hasilnya: \n'  + 
	'Kamu ' + 
	hasil);
tanya = confirm('Mau main lagi ?');
}
alert('Terima kasih Sudah Bermain');