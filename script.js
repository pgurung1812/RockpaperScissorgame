
function getComputerChoice(numchoice){
    let choice= parseInt(Math.random()*numchoice);
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

function getHumanChoice(){

    const validchoice=["Scissor","Rock","Paper"];
    
    try{
        while(true){
            let choice= prompt("Please enter your choice: ");
            if (validchoice.includes(choice)===true)
            {
                return choice;
            }
            else{
                throw err;
            }
        }

    }
    catch(err)
    {
        console.log("Invalid value");
        
    }
}
console.log(getHumanChoice());
