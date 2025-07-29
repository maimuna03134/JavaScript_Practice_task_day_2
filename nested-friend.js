let myScore = 86;
let friendScore = 55;
if (myScore > 80) {
    if (friendScore > 80) {
       console.log("Go for a lunch!");
    } else if (friendScore >= 60) {
        console.log("Good luck next time!");
   }else if (friendScore >= 40) {
        console.log("I will not seen your message!");
   }else{
        console.log("Block!");
   }
} else {
    console.log("Go to home and sleep and act sad!");
}
