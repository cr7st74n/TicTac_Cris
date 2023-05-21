
const GameBoard = document.querySelector("#gameboard");

const  InfoDisplay = document.querySelector("#info");

const VectorTTT = ["","", "",
"","", "",
"","", ""
];


InfoDisplay.innerHTML= "First Player"
InfoDisplay.classList.add("player1")


function createBoard(){

    VectorTTT.forEach((cell, index) =>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.id = index
        cellElement.addEventListener("click", (e)=>{
            if(InfoDisplay.className){
                insertCircle(e)
                InfoDisplay.classList.remove("player1");
            }else {
                insertxElement(e)
                InfoDisplay.classList.add("player1");
            }
           
        })
        console.log('Element Created');
        GameBoard.append(cellElement)
    });

}

createBoard()

function insertCircle(e){
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    e.target.append(circleElement)
}

function insertxElement(e){
    const xElementElement = document.createElement("div");
    xElementElement.classList.add("xElement");
    e.target.append(xElementElement);
}



// for(let i = 0; i<3 ; i++  ){
//     for(let j = 0; j <3 ; j++){
//         console.log(j, i);
//     }
// }