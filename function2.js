function volumeDuaKubus(a, b){
	var a;
	var b;
	var volumeA = a * a * a;
	var volumeB = b * b * b;
	var total = volumeA + volumeB;
	
	return total;
} 
console.log(volumeDuaKubus(3, 8));