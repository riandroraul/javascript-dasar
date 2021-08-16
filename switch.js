// var angka = prompt('Masukkan Angka : ');

// switch(angka) {
// 	case '1' :
// 		alert('Anda Mmemasukan angka 1');
// 		break;
	
// 	case '2' : 
// 		alert('Anda Memasukkan Angka 2 ');
// 		break;

// 	case '3':
// 		alert('Anda Memasukkan Angka 3 ');
// 		break; 
// 	default :
// 		alert('Angka yang anda masukkan Salah!');
// 		break;
// }

var item = prompt('Masukkan nama Makanan/Minuman : /n (cth : nasi, daging, susu, hamburger, softdrink');

switch(item) {
	case 'nasi' :
	case 'daging' : 
	case 'susu' :
		alert('Makanan dan Minuman SEHAT!');
		break;
	case 'hamburger' :
	case 'softdrink' :
	 	alert('Makanan dan Minuman TIDAK SEHAT!');
	 	break;
	default : 
		alert('Makanan dan Minuman yang Anda masukkan SALAH!');
}