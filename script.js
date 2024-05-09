let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissor=document.querySelector(".Scissor");
let score=document.querySelector(".humanscore");
let compscore=document.querySelector(".compscore");
score.textContent=0;
compscore.textContent=0;

rock.addEventListener("click",playRound);
paper.addEventListener("click",playRound);
scissor.addEventListener("click",playRound);













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

    function playRound(e) {
        
        let humanChoice=e.currentTarget.textContent;
        
        let computerChoice=getComputerChoice(3);
        let div=document.querySelector(".result");
       

         let announce=document.querySelector(".announce");
        

        if(humanChoice=="rock" && computerChoice=="scissor"){
           humanScore++;
           div.textContent="you won! Rock beats Scissor";
        }
        else if(humanChoice=="scissor" && computerChoice=="paper"){
            humanScore++;
            div.textContent="you won! Scissor beats Paper";
        } 
        else if(humanChoice=="paper" && computerChoice=="rock"){
            humanScore++;
            div.textContent="you won! Paper beats Rock";
        }
        else if(computerChoice=="rock" && humanChoice=="scissor"){
            computerScore++;
            div.textContent="you lose! Rock beats Scissor";
         }
        else if(computerChoice=="scissor" && humanChoice=="paper"){
             computerScore++;
             div.textContent="you lose! scissor beats paper";
         } 
        else if(computerChoice=="paper" && humanChoice=="rock"){
             computerScore++;
             div.textContent="you lose! Paper beats Rock";
         }
         else{
            div.textContent="no body won";
         }

        score.textContent=humanScore;
        compscore.textContent=computerScore;

        if(humanScore ==5 || computerScore==5)
        {
            if(humanScore>computerScore)
            {
                announce.textContent="you are a winner";
            }
            else{
                announce.textContent="you are a loser";
            }
        }
          console.log("button pressed");
      }
      
      
    //   function playGame(){

    //     let totalrounds=5;
    //     let round=0

    //     while(round<totalrounds){
    //         round++;
    //         const humanSelection = getHumanChoice();
    //         const computerSelection = getComputerChoice(3);
    //         console.log(computerSelection)
    //         console.log(humanSelection)
            
    //         playRound(humanSelection, computerSelection);
    //      }
    //      console.log(computerScore);
    //      console.log(humanScore);

    //    }
      