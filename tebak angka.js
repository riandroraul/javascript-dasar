var tanya = true;
while (tanya) {
	// menangkap pilihan player
	alert('Tebak Angka dari 1 - 10 \n Anda memilik 3 kesempatan')

	// menangkap pilihan komputer

	// membangkitkan bilangan random
	var comp = Math.random();
	if(comp <= 0.1 ){
		comp = 1;
	}else if(comp > 0.1 && comp <= 0.2){
		comp =2;
	} else if(comp > 0.2 && comp <= 0.3){
		comp = 3;
	} else if(comp > 0.3 && comp <= 0.4){
		comp = 4;
	} else if(comp > 0.4 && comp <= 0.5){
		comp = 5;
	} else if(comp > 0.5 && comp <= 0.6){
		comp = 6;
	} else if(comp > 0.6 && comp <= 0.7){
		comp = 7;
	} else if(comp > 0.7 && comp <= 0.8){
		comp = 8;
	} else if(comp > 0.8 && comp <= 0.9){
		comp = 9;
	} else{
		comp = 10;
	}

	// menentukan rules
	for(var i = 3; i >= 1; i--) {
	// player
		var p = prompt('Masukkan Angka dari 1 - 10 \n kesempatan Anda '+ i +'X lagi!');
	// aturan 
		if(p == comp){
			alert('SELAMAT \n Jawaban Anda Benar');
			return tanya;
			// i == STOP;
			// alert('Terima kasih sudah bermain!');
		}else if(p == 0){
			alert('Kesempatan Anda telah habis! \n Jawabannya Adalah '+ comp);
		} else if (p < comp){
			alert('Angka yang Anda pilih terlalu kecil');
		} else if (p > comp ){
			alert('Angka yang Anda pilih terlalu Besar');		
		} else if(p <= 0 || p > 10){
			alert('Apa Yang Anda Masukkan Bukan Angka 1 - 10');
		} else{
			alert('Apa Yang Anda Masukkan Bukan Angka')
		}
	}
	if(i == 0){

		alert('Kesempatan Anda telah habis! \n Jawabannya Adalah '+ comp);
	}
	// tampilkan hasilnya	
	tanya = confirm('Ingin Bermain Lagi ?');

	alert('Terima Kasih Sudah Bermain!');
}



