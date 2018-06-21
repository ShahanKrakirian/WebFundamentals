//Random Chance

function randomChance(satisfied){
    var quarters = 1;
    while (quarters > 0){
      if (Math.floor(Math.random() * 100)+1===50){
        quarters += Math.floor(Math.random()*51)+50;
        console.log("Congratulations! You now have a total of", quarters, "quarters!");
      }
      if (quarters >= satisfied){
        return "Ha! Good self discipline.";
      } else {
        quarters -= 1;
        if (quarters === 0){
          return 0;
        }
      }
    }
  }