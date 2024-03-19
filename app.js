let userVal = document.querySelector(".userInput input")
let btn = document.querySelector(".btn")
let msg = document.querySelector(".msg")

function genCompChoice() {

    let compChoice = Math.floor(Math.random() * 100) + 1
    return compChoice;

}

let botChoice = genCompChoice()



function Playgame() {

    let userValue = userVal.value
    console.log(userValue)

    console.log(botChoice)

    if (userValue < 1 || userValue > 100 || isNaN(userValue)) {
        msg.innerText = "Please enter a number between 1 and 100.";
        return; // Exit the function if the input is invalid
    }




    if (userValue == botChoice) {
        console.log("User Win")
        msg.classList.remove("cl")
        msg.classList.add("newcl")
        msg.innerText = "You Win"
        botChoice = genCompChoice()
        setTimeout(resetGame, 2000)
    }

    else if (userValue > botChoice) {

        console.log("Your Value Is Greater Than BotChoice")
        msg.innerText = "Your Value Is Greater Than BotChoice"

    }

    else if (userValue < botChoice) {

        console.log("Your Value Is Less Than BotChoice")
        msg.innerText = "Your Value Is Less Than BotChoice"

    }


}

btn.addEventListener('click',Playgame)


userVal.addEventListener("keyup",(evt)=>{

  if(evt.key==="Enter"){
    Playgame()
  }

})










function resetGame() {
    userVal.value = ''
    msg.classList.add("cl")
    msg.classList.remove("newcl")
    msg.innerText = "Game Is Restarted, Play Your Move"
}