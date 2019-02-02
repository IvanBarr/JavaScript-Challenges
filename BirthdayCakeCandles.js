var array = [3,2,1,3];
function birthdayCakeCandles(ar) {
    var tallCandles = [];
    var currentBiggestNumb = 0;
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] > currentBiggestNumb) {
            currentBiggestNumb = ar[i];
        }
    }

    for (var x = 0; x < ar.length; x++) {
        if (ar[x] === currentBiggestNumb) {
            tallCandles.push(ar[x]);
        }
    }
    return tallCandles.length;
}

birthdayCakeCandles(array); //Output: 2