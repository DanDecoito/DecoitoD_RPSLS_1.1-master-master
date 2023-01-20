let roundText = document.getElementById("roundText");
let aiButton = document.getElementById("aiButton");
let pvpButton = document.getElementById("pvpButton");
let fourButton = document.getElementById("fourButton");
let heartNumOne = document.getElementById("heartNumOne");
let heartNumTwo = document.getElementById("heartNumTwo");
let promptText = document.getElementById("promptText");
const gameButtons = document.querySelectorAll(".gameButtons");


let oneHeartButton = document.getElementById("oneHeartButton");
let threeHeartButton = document.getElementById("threeHeartButton");
let fourHeartButton = document.getElementById("fourHeartButton");




let posOneInject = document.getElementById("posOneInject");
let posTwoInject = document.getElementById("posTwoInject");
let posThreeInject = document.getElementById("posThreeInject");
let posFourInject = document.getElementById("posFourInject");
let posFiveInject = document.getElementById("posFiveInject");
const url = 'https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption'
let roundNum = 0;
let apiFetch;
let startNumber;


// Asynch Fetch Grab Start
async function computerSelect() {

    await fetch(url).then(
        response => response.text()
    ).then(
        data => {
            apiFetch = data
        }
    )
}
// Asynch Fetch Grab Start


function loseHealthP1() {
    let emptyHeart = document.createElement("img")
    emptyHeart.className = "oneHeart";
    emptyHeart.src = "./Assets/Assets/pixel.png";
    playerOneHeartInject.innerHTML = "";
    playerOneHeartInject.appendChild(emptyHeart);
}
function loseHealthP2() {
    let emptyHeart2 = document.createElement("img")
    emptyHeart2.className = "oneHeart";
    emptyHeart2.src = "./Assets/Assets/pixel.png";
    playerTwoHeartInject.innerHTML = "";
    playerTwoHeartInject.appendChild(emptyHeart2);
}




function oneInject() {
    let one = document.createElement("img")
    one.className = "gameIcons";
    one.src = "./Assets/Assets/One.png";
    posOneInject.innerHTML = "";
    posOneInject.appendChild(one);
}
function threeInject() {
    let three = document.createElement("img")
    three.className = "gameIcons";
    three.src = "./Assets/Assets/Three.png";
    posThreeInject.innerHTML = "";
    posThreeInject.appendChild(three);
}
function fourInject() {
    let four = document.createElement("img")
    four.className = "gameIcons";
    four.src = "./Assets/Assets/four.png";
    posFiveInject.innerHTML = "";
    posFiveInject.appendChild(four);
}
function rockInject() {
    let rock = document.createElement("img")
    rock.className = "gameIcons";
    rock.src = "./Assets/Assets/stone.png";
    posOneInject.innerHTML = "";
    posOneInject.appendChild(rock);
}
function paperInject() {
    let paper = document.createElement("img")
    paper.className = "gameIcons";
    paper.src = "./Assets/Assets/toilet-roll.png";
    posTwoInject.innerHTML = "";
    posTwoInject.appendChild(paper);
}
function scissorsInject() {
    let scissors = document.createElement("img")
    scissors.className = "gameIcons";
    scissors.src = "./Assets/Assets/scissors.png";
    posThreeInject.innerHTML = "";
    posThreeInject.appendChild(scissors);
}
function lizardInject() {
    let lizard = document.createElement("img")
    lizard.className = "gameIcons";
    lizard.src = "./Assets/Assets/iguana.png";
    posFourInject.innerHTML = "";
    posFourInject.appendChild(lizard);
}
function spockInject() {
    let spock = document.createElement("img")
    spock.className = "gameIcons";
    spock.src = "./Assets/Assets/star-trek.png";
    posFiveInject.innerHTML = "";
    posFiveInject.appendChild(spock);
}

function buttonOneInject() {
    let button = document.createElement("button")
    oneHeartButton.classList.remove("one")
    button.className = "stone"
    button.className = "gameButtons"
    posOneInject.innerHTML = "";
    posOneInject.appendChild(button)
}
function buttonTwoInject() {
    let button = document.createElement("button")

    button.className = "paper"
    button.className = "gameButtons"
    posTwoInject.innerHTML = "";
    posTwoInject.appendChild(button)
}
function buttonThreeInject() {
    let button = document.createElement("button")
    threeHeartButton.classList.remove("three")
    button.className = "scissors"
    button.className = "gameButtons"
    posThreeInject.innerHTML = "";
    posThreeInject.appendChild(button)
}
function buttonFourInject() {
    let button = document.createElement("button")
    aiButton.classList.remove("ai")
    button.className = "lizard"
    button.className = "gameButtons"
    posFourInject.innerHTML = "";
    posFourInject.appendChild(button)
}
function buttonFiveInject() {
    let button = document.createElement("button")
    fourHeartButton.classList.remove("four")
    button.className = "spock"
    button.className = "gameButtons"
    posFiveInject.innerHTML = "";
    posFiveInject.appendChild(button)
}
function buttonOneInject2() {
    let button = document.createElement("button")
    aiButton.classList.remove
    button.className = "one"
    button.className = "gameButtons"
    posOneInject.innerHTML = "";
    posOneInject.appendChild(button)
}
function buttonThreeInject2() {
    let button = document.createElement("button")
    button.className = "three"
    button.className = "gameButtons"
    posThreeInject.innerHTML = "";
    posThreeInject.appendChild(button)
}
function buttonFiveInject2() {
    let button = document.createElement("button")
    button.className = "four"
    button.className = "gameButtons"
    posFiveInject.innerHTML = "";
    posFiveInject.appendChild(button)
}


function TheMightyFunction() {
    buttonOneInject();
    buttonTwoInject();
    buttonThreeInject();
    buttonFourInject();
    buttonFiveInject();
    rockInject();
    paperInject();
    scissorsInject();
    lizardInject();
    spockInject();
}


































// function GameStart() {

//     aiButton.addEventListener("click", () => {
        
//         gameButtons.forEach((choice) => {
//             if (choice.classList.contains("ai")) {
//                 posFourInject.innerHTML = "";
//                 posTwoInject.innerHTML = "";
//                 buttonOneInject2();
//                 oneInject();
//                 buttonThreeInject2();
//                 threeInject();
//                 buttonFiveInject2();
//                 fourInject();
                
//                 gameButtons.forEach((number) => {
//                     number.addEventListener("click", () => {
//                         if (number.classList.contains("one")) {
//                             TheMightyFunction();
//                         else if (number.classList.contains("four")) {
//                             TheMightyFunction();
//                             game(4);
//                         }
//                     })
//                 })
//             }
//         })
//     })

// }                          game(1);
//                         }
//                         else if (number.classList.contains("three")) {
//                             TheMightyFunction();
//                             game(3);
//                         }
//   


// pvpButton.addEventListener("click", () => {
//     gameButtons.forEach((choice) => {
//         if (choice.classList.contains("pvp")) {
//             posFourInject.innerHTML = "";
//             posTwoInject.innerHTML = "";
//             buttonOneInject2();
//             oneInject();
//             buttonThreeInject2();
//             threeInject();
//             buttonFiveInject2();
//             fourInject();
//             gameButtons.forEach((number) => {
//                 number.addEventListener("click", () => {
//                     if (number.classList.contains("one")) {
//                         TheMightyFunction();
//                         pvpGame(1)
//                     }
//                     else if (number.classList.contains("three")) {
//                         TheMightyFunction();
//                         pvpGame(3)
//                     }
//                     else if (number.classList.contains("four")) {
//                         TheMightyFunction();
//                         pvpGame(4)
//                     }
//                 })
//             })
//         }
//     })


// })

// aiButton.addEventListener("click", () => {
//     gameButtons.forEach((choice) => {
//         if (choice.classList.contains("ai")) {
//             posFourInject.innerHTML = "";
//             posTwoInject.innerHTML = "";
//             buttonOneInject2();
//             oneInject();
//             buttonThreeInject2();
//             threeInject();
//             buttonFiveInject2();
//             fourInject();
//             gameButtons.forEach((number) => {
//                 number.addEventListener("click", () => {
//                     if (number.classList.contains("one")) {
//                         TheMightyFunction();
//                         game(1);
//                     }
//                     else if (number.classList.contains("three")) {
//                         TheMightyFunction();
//                         game(3);
//                     }
//                     else if (number.classList.contains("four")) {
//                         TheMightyFunction();
//                         game(4);
//                     }
//                 })
//             })
//         }
//     })
// })








function HailMary() {
    let gameMode = window.prompt("Enter: pvp or ai")
    let gameCountAi = window.prompt("Enter a digit under 10")
    if(gameMode === "pvp")
    {   
        pvpGame(gameCountAi)   
    }
    else
    {
        game(gameCountAi) 
    }
}

HailMary();





















function battle(playerSelect, computerSelect) {

    switch (true) {
        case (playerSelect === computerSelect):
            promptText.innerHTML = "Draw"
            roundText.innerHTML = "Draw round Player 1 choose"
            break;

        case (playerSelect === "Scissors" && computerSelect === "Paper"):
        case (playerSelect === "Paper" && computerSelect === "Rock"):
        case (playerSelect === "Rock" && computerSelect === "Lizard"):
        case (playerSelect === "Lizard" && computerSelect === "Spock"):
        case (playerSelect === "Spock" && computerSelect === "Scissors"):
        case (playerSelect === "Scissors" && computerSelect === "Lizard"):
        case (playerSelect === "Lizard" && computerSelect === "Paper"):
        case (playerSelect === "Paper" && computerSelect === "Spock"):
        case (playerSelect === "Spock" && computerSelect === "Rock"):
        case (playerSelect === "Rock" && computerSelect === "Scissors"):
            promptText.innerHTML = "Player 2 wins"
            playerOneHealth -= 1;
            heartNumOne.innerHTML = "";
            heartNumOne.innerHTML = playerOneHealth;
            console.log(computerSelect)
            console.log(playerSelect)
            break;
        default:
            promptText.innerHTML = "player 1 wins"
            playerTwoHealth -= 1;
            heartNumTwo.innerHTML = "";
            heartNumTwo.innerHTML = playerTwoHealth;
            console.log(computerSelect)
            console.log(playerSelect)
            break;
    }
}












function healthCheck(playerOneHealth, playerTwoHealth) {
    console.log(playerOneHealth)
    console.log(playerTwoHealth)
    switch (playerOneHealth) {
        case 0:
            promptText.innerHTML = "Player 2 Wins"
            roundText.innerHTML = "Game Over"
            loseHealthP1()
            alert("Player 2 Wins");
            window.location.reload();
            break;
        default:
            break
    }
    switch (playerTwoHealth) {
        case 0:
            promptText.innerHTML = "Player 1 Wins"
            roundText.innerHTML = "Game Over"
            loseHealthP2()
            alert("Player 2 wins")
            window.location.reload();
            break;

        default:
            break;
    }
}


















function counter() {

    roundNum += 1;
    roundText.innerText = `Round: ${roundNum}`;
    console.log(`round num is ${roundNum}`)
    return roundNum;


}


function pvpGame(num) {
    
    playerOneHealth = num
    playerTwoHealth = num
    let playerSelect;
    let playerTwoSelect;
    heartNumOne.innerHTML = "";
    heartNumOne.innerHTML = playerOneHealth;
    heartNumTwo.innerHTML = "";
    heartNumTwo.innerHTML = playerTwoHealth;
    gameButtons.forEach((weapon) => {
        weapon.addEventListener("click", () => {
            if (weapon.classList.contains('stone')) {
                playerSelect = "rock"
                playerTwoSelect = window.prompt("Player Two Enter: rock, paper, scissors, lizard, or spock")
            }
            else if (weapon.classList.contains('paper')) {
                playerSelect = "paper"
                playerTwoSelect = window.prompt("Player Two Enter: rock, paper, scissors, lizard, or spock")
            }
            else if (weapon.classList.contains('scissors')) {
                playerSelect = "scissors"
                playerTwoSelect = window.prompt("Player Two Enter: rock, paper, scissors, lizard, or spock")
            }
            else if (weapon.classList.contains('lizard')) {
                playerSelect = "lizard"
                playerTwoSelect = window.prompt("Player Two Enter: rock, paper, scissors, lizard, or spock")
            }
            else if (weapon.classList.contains('spock')) {
                playerSelect = "spock"
                playerTwoSelect = window.prompt("Player Two Enter: rock, paper, scissors, lizard, or spock")
            }
            playerTwoSelect.toLowerCase();
            battle(playerSelect, playerTwoSelect)
            counter();
            healthCheck(playerOneHealth, playerTwoHealth)
        })
    })
}










function game(num) {
    computerSelect();
    playerOneHealth = num
    playerTwoHealth = num
    let playerSelect;
    heartNumOne.innerHTML = "";
    heartNumOne.innerHTML = playerOneHealth;
    heartNumTwo.innerHTML = "";
    heartNumTwo.innerHTML = playerTwoHealth;
    gameButtons.forEach((weapon) => {
        weapon.addEventListener("click", () => {
            if (weapon.classList.contains('stone')) {
                playerSelect = "Rock"
                computerSelect();
            }
            else if (weapon.classList.contains('paper')) {
                playerSelect = "Paper"
                computerSelect();
            }
            else if (weapon.classList.contains('scissors')) {
                playerSelect = "Scissors"
                computerSelect();
            }
            else if (weapon.classList.contains('lizard')) {
                playerSelect = "Lizard"
                computerSelect();
            }
            else if (weapon.classList.contains('spock')) {
                playerSelect = "Spock"
                computerSelect();
            }

            battle(playerSelect, apiFetch)
            counter();
            healthCheck(playerOneHealth, playerTwoHealth)
        })
    })
}

















