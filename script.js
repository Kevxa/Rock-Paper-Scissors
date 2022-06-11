//The hole Game

    let playerScore = 0;
    let computerScore = 0;
    const buttons = document.querySelectorAll("button");


    //Button Disable
    function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
            
    }
    //Function returns a random computer choice
    function computerChoice(){
        const computerOptions = ["rock", "paper", "scissor"];
        return computerOptions[Math.floor(Math.random()* computerOptions.length)];
    }
    //Game Function
    function round(playerSelection){
        let computerSelection = computerChoice();
        let result = "";
        let pCount = document.querySelector(".pCount");
        let cCount = document.querySelector(".cCount");
        if ((playerSelection == "rock" && computerSelection == "scissor") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissor" && computerSelection == "paper")) {
            result = ('You win! ' + playerSelection + ' beats ' + computerSelection)
            playerScore += 1;
            pCount.textContent = playerScore;
            
            if(playerScore == 10){
                result = ("You won the entire game!")
                disableButtons();
                let buttonHide = document.getElementById("btns");
                buttonHide.style.visibility = "hidden";
                const btn = document.createElement("button");
                btn.innerHTML = "Restart";
                btn.classList.add("btn");
                btn.value = "restart";
                document.getElementById("score").appendChild(btn);
                btn.onclick = function restart() {
                    window.location.reload("restart");

                }
            
            }

        }else if (playerSelection == computerSelection) {
            result = ('It\'s a tie. You both chose ' + playerSelection)
            
            
        }else{
            result = ("You lose. " + computerSelection + " beats " + playerSelection + ".");
            computerScore += 1;
            cCount.textContent = computerScore;

            if(computerScore == 10){
                result = ("I won the hole game!");
                disableButtons();
                let buttonHide = document.getElementById("btns");
                buttonHide.style.visibility = "hidden";
                const btn = document.createElement("button");
                btn.innerHTML = "Restart";
                btn.classList.add("btn");
                btn.value = "restart";
                btn.onclick = function restart() {
                    window.location.reload("restart");

                }
                document.getElementById("score").appendChild(btn);
            }
                
        }
        document.getElementById('result').innerHTML = result
        return        
    }
    
function restart(){
    window.location.reload("restart");

}


    
buttons.forEach(button => {
    button.addEventListener('click', function () {
        round(button.value)
    })
})






