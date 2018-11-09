function plusMinus(arr){
	var negativeNumbers, positiveNumbers, zeros;
	
	var result = [];
	positiveNumbers = 0;
	negativeNumbers = 0;
	zeros = 0;
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			 positiveNumbers++;
		}else if(arr[i] < 0){
			 negativeNumbers++;
		}else{
			zeros++;
		}
	}
	
	var decimalOfPositives = positiveNumbers / arr.length;
	var decimalOfNegatives = negativeNumbers / arr.length;
	var decimalOfZeros = zeros / arr.length;
	
	result.push(decimalOfPositives, decimalOfNegatives, decimalOfZeros);
	return result;
	
}

var array = [1, 2, 3, -1, -2, -3, 0, 0];
console.log(plusMinus(array));