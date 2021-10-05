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


            //A linha abaixo muda para a vez do Player 2
            firstPlayer = false
        }
    } else {
        if (e.currentTarget.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui
        

            //A linha abaixo muda para a vez do Player 1.
            firstPlayer = true
        }
    }

}

// Receber jogador ou pedra
// Array tabuleiro no escopo global
// Receber coluna
// Verificar se célula x_y possui filho. Se não appendChild pedra na célula
// Atualizar array

const insertDisk = (selectedColumn, player) => {
    // selectedColumn pode ser um elemento do DOM => const column =  selectedColumn.getAttribute('id'); OU const columnIndex = selectedColumn.lastChild.getAttribute('id').splice(-1)
    // const column = arrayTabuleiro[columnIndex]
    // const disk = player ? "V" : "P"
    // for (let i = 0; i<column.length; i++){
    //     if (column[i] === 'X'){
    //         column[i] = disk;
    //         const id = `#nome${i}_${columnIndex}`;
    //         const emptyCell = document.querySelector(id);
    //         emptyCell.appendChild(disk);
    //     }
    //     else{
    //         break
    //     }
    // }

    //  OU

    // for (let i = column.length-1; i>=0; i--){
    //     if (column[i] === 'X'){
    //         column[i] = disk;
    //         const id = `#nome${i}_${columnIndex}`;
    //         const emptyCell = document.querySelector(id);
    //         emptyCell.appendChild(disk);
    //         break
    //     }
    //   
    // }