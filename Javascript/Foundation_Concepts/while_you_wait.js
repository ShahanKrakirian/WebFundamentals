//While You Wait 

function daysUntilMyBirthday(days){
    while (days > 0){
        if (days > 30){
            console.log(days, "days until my birthday. Coffee does not exist and I have existential angst.");
        } else if (days === 30){
            console.log(days, "days until my birthday. I was not instructed to feel anything about this day.");
        } else if (days < 30 && days > 5){
            console.log(days, "days until my birthday. Maybe I will get a crash pad this year!");
        } else if (days === 5){
            console.log(days, "days until my birthday. I do not feel anything about this day either.");
        } else {
            if (days === 1){
                console.log(days, "DAY UNTIL MY BIRTHDAY I WILL FEEL SO DIFFERENT");
            } else {
                console.log(days, "DAYS UNTIL MY BIRTHDAY I WILL FEEL SO DIFFERENT");
            }
        }
        days -= 1;
    }
    console.log("PEANUT BUTTER PARTY TIME");
}