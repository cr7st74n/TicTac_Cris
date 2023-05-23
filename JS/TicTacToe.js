
const GameBoard = document.querySelector("#gameboard");

const  InfoDisplay = document.querySelector("#info");

const VectorTTT = ["","", "",
"","", "",
"","", ""
];


InfoDisplay.innerHTML= "First Player 🧙"
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
           cellElement.removeEventListener("click",go)
           PlayOn(cellElement, GameBoard);

        })
        console.log('Element Created');
        GameBoard.append(cellElement)
    });

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
    InfoDisplay.innerHTML = "Second Player 🧛"
    
    //remove our event listener to prevent of adding new elements on the old ones.
}

function insertxElement(e){
    const xElementElement = document.createElement("div");
    xElementElement.classList.add("xElement");
    e.target.append(xElementElement);

    // e.target.className =  "cellxEle"

    InfoDisplay.className = "player1";
    InfoDisplay.innerHTML = "";
    InfoDisplay.innerHTML = "First Player 🧙"
}
//create the game funtionality

function PlayOn(){
    const allCells = document.querySelectorAll(".cell");
    const allCircles = document.querySelectorAll(".circle");
    console.log(allCells);
    const ComboWinning = [[0,1,2] , [3,4,5], [6,7,8]
                        [0,3,6], [1,4,7],[2,5,8] ,
                         [0,4,8] , [2,4,6]]


}




    // const valueChild = cell.children;
    // const gameBoard = gameboard.children;
    // //elements that we need
    // const IdCell = cell.id
    // const GameValue =  valueChild[0].className;
    // console.log(GameValue);

    // // console.log(valueChild);

    // for(let i = 0; i < gameBoard.length; i++){
    //     if(gameBoard[i].id == "9" ){
    //         alert("you win")
    //     }
    //     console.log(gameBoard[i]);
    // }
    // // if ()




//idea of tic tac toe
// for(let i = 0; i<3 ; i++  ){
//     for(let j = 0; j <3 ; j++){
//         console.log(j, i);
//     }
// }


