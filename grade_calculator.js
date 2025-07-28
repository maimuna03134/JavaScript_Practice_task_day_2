// Grade Calculator
let marks = 67;

if (marks >= 90 &&marks <= 100) {
    console.log("Excellent!! You get A+");
}
else if (marks >= 80 && marks <= 89) {
  console.log("Very Good!! You get A");
} 
else if (marks >= 70 && marks <= 79) {
    console.log("Good!! You get B+");
}
else if (marks >= 60 && marks <= 69) {
    console.log("You get B. You need to improve.");
}
else if (marks >= 0 && marks <= 79) {
    console.log("Oh no!! You have failed. You have to study a lot harder.");
}
else {
    console.log("Invalid!!");
}
