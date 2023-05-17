
const GameBoard = document.querySelector("#gameboard");

const  InfoDisplay = document.querySelector("#info");

const VectorTTT = ["","", "",
"","", "",
"","", ""
];

function createBoard(){
    VectorTTT.forEach((cell, index) =>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        console.log('Element Created');
        GameBoard.append(cellElement)
    });
}

createBoard()




// for(let i = 0; i<3 ; i++  ){
//     for(let j = 0; j <3 ; j++){
//         console.log(j, i);
//     }
// }