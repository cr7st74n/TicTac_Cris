
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
        cellElement.addEventListener("click", ()=>{
            if(InfoDisplay.className){
                insertCircle(cellElement)
                InfoDisplay.classList.remove("player1");
            }else {
                insertxElement(cellElement)
                InfoDisplay.classList.add("player1");
            }
           
        })
        console.log('Element Created');
        GameBoard.append(cellElement)
    });

}

createBoard()

function insertCircle(element){
    element.classList.remove("cell")
    element.classList.add("circle")
}

function insertxElement(element){
    element.classList.remove("cell")
    element.classList.add("xElement")
}



// for(let i = 0; i<3 ; i++  ){
//     for(let j = 0; j <3 ; j++){
//         console.log(j, i);
//     }
// }