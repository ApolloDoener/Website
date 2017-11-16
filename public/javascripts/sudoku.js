$(document).ready(function() {
    $("#calculate a").click(function() {
        getSquare(1);
    });
});

var getSquare = function(square) {
    var result = 0;
    for(var i = 1; i < 10; i++) {
        result += parseInt($("#sudoku-1 .input-" + i).val());
    }
    return result;
}