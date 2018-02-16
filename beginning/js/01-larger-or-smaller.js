var first_integer =  parseInt(window.prompt("Enter the first integer to compare:"), 10);
var second_integer =  parseInt(window.prompt("Enter the second integer to compare:"), 10);

if (first_integer > second_integer) {
    
    window.document.write("The large integer is " + first_integer);
   
}else if (first_integer < second_integer){
    
    window.document.write("The large integer is " + second_integer);
    
}else if (first_integer === second_integer) {
    
    window.document.write("They have the same value " + first_integer );
    
}