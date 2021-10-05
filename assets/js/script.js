const board = document.getElementById("gameBoard")
const start = document.getElementById("startButton")
console.log(start)


start.addEventListener("click", startRestart)


let boardSize

//Criação de função de Start // Restart
function startRestart() {

    boardSize = [
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"]
    ]
    
    if (start.innerText === "Start") {
        createBoard()
        start.innerText = "Restart"
    } else {
        reset()
    }
}


function reset() {
    let cells = document.getElementsByClassName("game__board__cell")
    for (let k = 0; k < cells.length; k++) {
        cells[k].innerHTML = ""
    }

}

// Cria o tabuleiro com as classes e ids prontas
function createBoard() {
    for (let i = 0; i < boardSize.length; i++) {
        let column = document.createElement("ul")
        column.classList.add("game__board__column")
        column.addEventListener("click", play)
        for (let j = 0; j < boardSize[i].length; j++) {
            let cell = document.createElement("li")
            cell.classList.add(`game__board__cell`)
            cell.setAttribute("id", `${i+1}-${j+1}`)
            column.appendChild(cell)
            board.appendChild(column)
        }
    }
}

// Armazena o estado de quem é a vez de jogar
let firstPlayer = true
// Base da função do jogo todo
function play(e) {
    console.log(firstPlayer)
    // Verifica se é o Player 1 ou 2
    if (firstPlayer === true) {
        //Verifica se o movimento é válido ou não
        if (e.currentTarget.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui
            insertDisk(e.currentTarget, firstPlayer)
            //A linha abaixo muda para a vez do Player 2
            firstPlayer = false
        }
    } else {
        if (e.currentTarget.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui
            insertDisk(e.currentTarget, firstPlayer)
            
            //A linha abaixo muda para a vez do Player 1.
            firstPlayer = true
        }
    }

}

const insertDisk = (selectedColumn, player) => {
    // selectedColumn pode ser um elemento do DOM => const column =  selectedColumn.getAttribute('id'); OU const columnIndex = selectedColumn.lastChild.getAttribute('id').splice(-1)
    const columnIndex = selectedColumn.lastChild.getAttribute("id").slice(0,1);
    const column = boardSize[Number(columnIndex) - 1];
    let diskValue = '';
    const disk = document.createElement("div");

    if(player === true){
        diskValue = "V"
        disk.classList.add("red__piece");
    }else{
        diskValue = "P"
        disk.classList.add("black__piece");
    }
    
    for (let i = 0; i<column.length; i++){
        if (column[i] === 'X'){
            column[i] = diskValue;
            const id = `${columnIndex}-${i+1}`;
            // console.log(id)
            const emptyCell = document.getElementById(id);
            emptyCell.appendChild(disk);
            console.log(boardSize)
    
            break
        }
        
    }

}