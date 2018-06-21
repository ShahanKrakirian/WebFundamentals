//Fancy Array

function fancyArray(array, pointer, reversed = false){
    if (reversed === true){
        for (var i=array.length-1; i>=0; i--){
            console.log(i, pointer, array[i]);
        }
    } else {
        for (var i=0; i<array.length; i++){
            console.log(i, pointer, array[i]);
        }
    }
}