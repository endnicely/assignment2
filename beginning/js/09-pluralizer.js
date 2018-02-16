var noun = window.prompt("What is your favorite pet ( cat, dog, sheep, goose)?");
var number = window.prompt("How many do you like to have?");
if (number > 1){
    switch (noun){
        case "sheep":
          break;
        case "goose":
           noun = "geese";
           break;
        default:
           noun = noun + "s";
    }
}
window.document.write(number + " " + noun);