//For a Few Billion

function aFewBillion(days){
    var button = true;
    var sum = .01;
    for (var i=2; i<=days; i++){
        sum *= i
        if (sum >= 10000 && button === true){
          console.log("It takes", i, "days for the servant to be rewarded with $10,000 or more.");
          button = false;
        }
        if (i === 30){
          console.log("The servant is rewarded", sum, "after", i, "days.");
        }
        if (sum === Infinity){
          console.log("It takes", i, "days for the servant to become infinitely rich.");
          break;
        }
    }
    console.log(sum);
}