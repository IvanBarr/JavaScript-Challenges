var n = 5;
function staircase(n) {
    var space = ' ';
    var hash = '#';

    for (var i = 1; i < n + 1; i++) {
        console.log(space.repeat(n - i).concat(hash.repeat(i)));
    }
}