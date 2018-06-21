//If You Don't MInd, Can I Have The Time?

//Edge Cases 
//AM: 11:30 AM approaching 12 PM, 12:30 AM approaching 1 AM
//PM: 11:30 PM approaching 12 AM, 12:30 PM approaching 1 PM

//Half past and quarter 'til functionality only work for 11:30 AM until Noon. The rest is redundant.
function canIHaveIt(hour, minute, period){
    if (period === "AM"){
        if (hour === 11 && minute >= 30){
            if (minute === 30){
                console.log("It's half past ", hour, " in the morning");
            } else if (minute === 45){
                console.log("It's a quarter 'til noon");
            } else {
                hour += 1;
                console.log("It's almost noon.");
            }
        } else if (hour === 12 && minute >= 30){
            hour = 1;
            console.log("It's almost ", hour, " in the morning.");
        } else if (minute >= 30){
            hour += 1;
            console.log("It's almost ", hour, " in the morning.");
        } else {
            console.log("It's just after ", hour, "in the morning.");
        }
    }
    if (period === "PM"){
        if (hour === 11 && minute >= 30){
            hour += 1;
            console.log("It's almost midnight.");
        } else if (hour === 12 && minute >= 30){
            hour = 1;
            console.log("It's almost ", hour, " in the afternoon.");
        } else if (minute >= 30){
            hour += 1;
            console.log("It's almost ", hour, " in the afternoon.");
        } else {
            console.log("It's just after ", hour, "in the afternoon.");
        }
    }
}