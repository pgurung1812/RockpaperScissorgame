
function getComputerChoice(numchoice){
    var choice= parseInt(Math.random()*numchoice);
    if (choice==0){
        return "Rock";
    }
    else if (choice==1){
        return "Scissor";
    }
    else{
        return "Paper";
    }
       
}
console.log(getComputerChoice(3))