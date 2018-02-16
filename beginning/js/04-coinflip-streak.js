var coinFlip;
do{
    coinFlip = Math.round(Math.random());
    coinFlip ? window.console.log("Tails"):window.console.log("Heads");
}while(!coinFlip);