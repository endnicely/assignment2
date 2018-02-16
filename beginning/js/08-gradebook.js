var pUrsula = parseInt(window.prompt("From 0 to 100, What is the points for Ursula? "), 10);
var pPaul = parseInt(window.prompt("From 0 to 100, What is the points for Paul? "), 10);
var pHenry = parseInt(window.prompt("From 0 to 100, What is the points for Henry? "), 0);
var pTabitha = parseInt(window.prompt("From 0 to 100, What is the points for Tabitha? "));
var pLucy = parseInt(window.prompt("From 0 to 100, What is the points for Lucy? "));

var gUrsula, gPaul, gHenry, gTabitha, gLucy, averagePoint; 

if (pUrsula >= 90 && pUrsula <=100) {
    gUrsula = "A";
}
else if (pUrsula >=80 && pUrsula < 90) {
      gUrsula = "B";
}
else if (pUrsula >=70 && pUrsula < 80) {
      gUrsula = "C";
}
else if (pUrsula >=60 && pUrsula < 70) {
      gUrsula = "D";
}
else if (pUrsula < 60){
      gUrsula = "F";
}

if (pPaul >= 90 && pPaul <=100) {
      gPaul = "A";
}
else if (pPaul >=80 && pPaul < 90) {
      gPaul = "B";
}
else if (pPaul >=70 && pPaul < 80) {
      gPaul = "C";
}
else if (pPaul >=60 && pPaul < 70) {
      gPaul = "D";
}
else if (pPaul < 60){
      gPaul = "F";
}

if (pHenry >= 90 && pHenry <=100) {
      gHenry = "A";
}
else if (pHenry >=80 && pHenry< 90) {
      gHenry = "B";
}
else if (pHenry >=70 && pHenry < 80) {
      gHenry = "C";
}
else if (pHenry >=60 && pHenry < 70) {
      gHenry = "D";
}
else if (pHenry < 60){
      gHenry = "F";
}

if (pTabitha >= 90 &&  pTabitha <=100) {
     gTabitha = "A";
}
else if (pTabitha >=80 &&  pTabitha < 90) {
      gTabitha = "B";
}
else if ( pTabitha >=70 &&  pTabitha < 80) {
      gTabitha = "C";
}
else if ( pTabitha >=60 &&  pTabitha < 70) {
      gTabitha = "D";
}
else if ( pTabitha < 60){
      gTabitha = "F";
}

if ( pLucy >= 90 &&  pLucy <=100) {
     gLucy = "A";
}
else if (pLucy >=80 &&  pLucy < 90) {
      gLucy = "B";
}
else if ( pLucy >=70 &&  pLucy < 80) {
      gLucy = "C";
}
else if ( pLucy >=60 && pLucy < 70) {
      gLucy = "D";
}
else if ( pLucy < 60){
      gLucy = "F";
}

averagePoint =(pUrsula + pPaul + pHenry + pTabitha + pLucy) /5;

window.console.log("Students    Grade");
window.console.log("-----------------");
window.console.log("Paul\t\t" + gPaul);
window.console.log("Henry\t\t" + gHenry);
window.console.log("Lucy\t\t" + gLucy);
window.console.log("Tabitha\t\t" + gTabitha);
window.console.log("Ursula\t\t" + gUrsula);
window.console.log("Average Points:\t\t" + averagePoint);
