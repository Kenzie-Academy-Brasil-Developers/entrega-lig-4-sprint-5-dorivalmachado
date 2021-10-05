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
    // A primeira coluna é a esquerda
    // A primeira celula é a de baixo
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
    console.log(move.indexOf())
}


// Matheus

 function victory(i,j,player){
    let vict = false
    let counterVertical = 0
    let counterHorizontal = 0
    let counterDiagonal = 0
    let level = 1
    while (level<4){
        if(move[i-level][j]==move[i][j] ||move[i+level][j]==move[i][j]){
            counterVertical++
        }
        if(move[i][j-level]==move[i][j]||move[i][j+level]==move[i][j]){
            counterHorizontal++
        }
        if(movel[i-level][j-level]||movel[i+level][j+level]){
            counterDiagonal++
        }
        level++
    }
    if(counterVertical>3||counterHorizontal>3||counterDiagonal>3){
        vict=true
        console.log(`O ${player} venceu a partida`)
        return true
    }
    else {
        return false
    }
 }
// Matheus
