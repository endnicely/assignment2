var coinFlip = Math.round(Math.random());
var choice = window.prompt("Please guess Heads or Tails");
if (coinFlip){
    //coinFlip is 1 thus True
    choice.startsWith("T") || choice.startsWith("t")? window.document.write("The flip was tails and you chose tails...you win!"):window.document.write("The flip was tails but you chose heads...you lose!");    
}else{
    //coinFlip is 0 thus False
    choice.startsWith("H") || choice.startsWith("h")? window.document.write("The flip was heads and you chose heads...you win!"):window.document.write("The flip was heads but you chose tails...you lose!");
}