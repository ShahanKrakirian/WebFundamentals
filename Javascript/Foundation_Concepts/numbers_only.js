//Numbers Only

function numbersOnly(arr){
    var newArray = [];
    for (var i=0; i<arr.length; i++){
      if (typeof arr[i] === "number"){
        newArray.push(arr[i]);
      }
    }
    console.log(newArray);
  }
  
  function numbersOnlyOptional(arr){
    for (var i=0; i<arr.length; i++){
      if (typeof arr[i] !== "number"){
        arr.splice(i,1);
      }
    }
    //No need to return. Arrays point to the same space in memory in or out of loops and functions.
  }