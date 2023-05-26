
const GameBoard = document.querySelector("#gameboard");

const  InfoDisplay = document.querySelector("#info");

const Winner = document.querySelector(".winner");
const btn = document.querySelector(".btn");

const VectorTTT = ["","", "",
"","", "",
"","", ""
];

InfoDisplay.innerHTML= "First Player 🧙 Turn"
InfoDisplay.classList.add("player1")


function createBoard(){

    VectorTTT.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.id = index;
        // make sure to add a name on the funtion to reference it and deleted later.
        cellElement.addEventListener("click", function go(e){
            if(InfoDisplay.className === "player1"){
                insertCircle(e)
            }else {
                insertxElement(e)
            }
                
            //remove our event listener to prevent of adding new elements on the old ones.
           cellElement.removeEventListener("click",go)
           PlayOn();

        })
        console.log('Element Created');
        GameBoard.append(cellElement)
    });
    ReStartGame()

}

createBoard()
 
//insert the elements in our board game
function insertCircle(e){
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    e.target.append(circleElement)

    //  e.target.className = "cellCircle"

    InfoDisplay.className = "player2";
    InfoDisplay.innerHTML = "";
    InfoDisplay.innerHTML = "Second Player 🧛 Turn"

}

function insertxElement(e){
    const xElementElement = document.createElement("div");
    xElementElement.classList.add("xElement");
    e.target.append(xElementElement);

    // e.target.className =  "cellxEle"

    InfoDisplay.className = "player1";
    InfoDisplay.innerHTML = "";
    InfoDisplay.innerHTML = "First Player 🧙 Turn"
}
//create the game funtionality

function PlayOn(){
    const allCells = document.querySelectorAll(".cell");
    const littleCircle = document.querySelector(".circle")

    // Create all the winning combinations
    const ComboWinning = [[0,1,2] 
    , [3,4,5], [6,7,8],
    [0,3,6], [1,4,7],[2,5,8] ,
    [0,4,8] , [2,4,6]];

    //crete a iteration from the winning possibility array, and then compare every pattern USING .every
    ComboWinning.forEach(array => {
        const circleWins = array.every(square => allCells[square].firstChild?.classList.contains("circle") );
        const xWins = array.every(square => allCells[square].firstChild?.classList.contains("xElement"));
        if (circleWins) {
            Winner.textContent = "Player 1 Wins !! 😄"
            Winner.classList = "alert alert-danger";
            Winner.role = "alert"
            array.every(cell => allCells[cell].className = "winnerCell")
            allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
            

        }else if (xWins){
            Winner.textContent = "Player 2 Wins !! 😄"
            Winner.classList = "alert alert-info";
            Winner.role = "alert"
            array.every(cell => allCells[cell].className = "winnerCell")
            allCells.forEach(cell => cell.replaceWith(cell.cloneNode(true)));
        }
    })
}

function ReStartGame(){
    const ButtonRestart = document.createElement("button");
    ButtonRestart.classList = "btn btn-outline-primary";
    ButtonRestart.type = "button";
    ButtonRestart.innerHTML = "Start Again!";
    

    if (btn.firstChild){
        console.log('has a child');
    }else {
        btn.appendChild(ButtonRestart);

        ButtonRestart.addEventListener("click" ,()=>{
            while(GameBoard.firstChild){
                GameBoard.removeChild(GameBoard.firstChild);
            }
            createBoard();
        })
    }
}

