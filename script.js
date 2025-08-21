let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");

let newGame = document.querySelector("#newGame");

let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const winPattern  = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]

const resetGame = () => {
 turnO = true;
 enabBoxes()
 msgContainer.classList.add("hide")
 
}

boxes.forEach((box) => {
  box.addEventListener("click", ()=> {
    console.log("box was click")
    if(turnO) {
        box.innerText = "O";
        turnO = false;
        
        
    }else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    winnerChecker();
  })
})

const disaBoxes = () => {
 for(box of boxes) {
  box.disabled = true;
  
 }
}
const enabBoxes = () => {
 for(box of boxes) {
  box.disabled = false;
  box.innerText = "";
  
 }
}





const showWinner = (winner) => {
 msg.innerText = `congratsalution winner is ${winner}`;
 msgContainer.classList.remove("hide")
 disaBoxes()
}




const winnerChecker = () => {
 for(let pattern of winPattern) {
  
 let pos1Val = boxes[pattern[0]].innerText
 let pos2Val = boxes[pattern[1]].innerText
 let pos3Val = boxes[pattern[2]].innerText
 
 if(pos1Val != "" && pos2Val !="" && pos3Val != "" ) {
  if(pos1Val === pos2Val && pos2Val === pos3Val) {
   console.log("winnner", pos1Val)
   showWinner(pos1Val)
  }
 }
  
 }
 
}

newGame.addEventListener("click", resetGame)
resetButton.addEventListener("click", resetGame)
