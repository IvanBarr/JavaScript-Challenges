var arr = [1,2,5,4,5];
function miniMaxSum(arr){
  
  var min = 0;
  var max = 0;
  
// 	Sort the numbers
  function sortNum(a,b){
    return a - b;
  }
  arr = arr.sort(sortNum);
	
// 	Find the min
	for(var i = 0; i < arr.length - 1; i++){
		min += arr[i];
	}
	
// 	Find the max
	for(var x = 0; x < arr.length; x++){
		max += arr[x];
	}
		max = max - arr[0];
	

	console.log(min,max);
  
}

console.log(miniMaxSum(arr));