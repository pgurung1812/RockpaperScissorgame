
function getComputerChoice(numchoice){
    let choice= parseInt(Math.random()*numchoice);
    if (choice==0){
        return "rock";
    }
    else if (choice==1){
        return "scissor";
    }
    else{
        return "paper";
    }
       
}

function getHumanChoice(){

    const validchoice=["scissor","rock","paper"];
    
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
    let humanScore=0;
    let computerScore=0;
    function playRound(humanChoice, computerChoice) {

        if(humanChoice=="rock" && computerChoice=="scissor"){
           humanScore++;
           console.log("you won! Rock beats Scissor")
        }
        else if(humanChoice=="scissor" && computerChoice=="paper"){
            humanScore++;
            console.log("you won! Scissor beats Paper")
        } 
        else if(humanChoice=="paper" && computerChoice=="rock"){
            humanScore++;
            console.log("you won! Paper beats Rock")
        }
        else if(computerChoice=="rock" && humanChoice=="scissor"){
            computerScore++;
            console.log("you lose! Rock beats Scissor")
         }
        else if(computerChoice=="scissor" && humanChoice=="paper"){
             computerScore++;
             console.log("you lose! scissor beats paper")
         } 
        else if(computerChoice=="paper" && humanChoice=="rock"){
             computerScore++;
             console.log("you lose! Paper beats Rock")
         }
         else{
            console.log("no body won")
         }

       
      }
      
      
      function playGame(){

        let totalrounds=5;
        let round=0

        while(round<totalrounds){
            round++;
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice(3);
            console.log(computerSelection)
            console.log(humanSelection)
            
            playRound(humanSelection, computerSelection);
         }
         console.log(computerScore);
         console.log(humanScore);

       }
       playGame();