// Code goes here
function matrixBuilder(size){

    var matrix = [];
    for(var i=0; i<size; i++) {
        matrix[i] = [];
        for(var j=0; j<size; j++) {
            matrix[i][j] = 1;
        }
    } 

    return matrix
}


// do not change anything from this line down
console.log(matrixBuilder(5))