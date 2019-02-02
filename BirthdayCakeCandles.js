/* Problem: You are in charge of the cake for your niece's birthday and have decided the cake 
will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. 
Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning 4 years old, and the cake will have 4 candles of height  4,4,1,3, 
she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.*/

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
