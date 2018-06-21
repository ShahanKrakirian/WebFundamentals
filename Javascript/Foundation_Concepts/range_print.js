//Range Print

function printRange(start, end = start, skip = 1){
  if (end === start){
    start=0;
  }
  if(start > end){
    skip*=-1;
    for (var i=start; i>end; i+=skip){
      console.log(i);
    }
  }
  for (var j=start; j<end; j+=skip){
      console.log(j);
    }
}