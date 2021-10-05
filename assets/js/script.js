const board = document.getElementById("gameBoard")
const start = document.getElementById("startButton")
console.log(start)


start.addEventListener("click", startRestart)
board.addEventListener("click", clickState)
board.style.cursor = "pointer"


//Criação de função de Start // Restart
function startRestart () {
    if(start.innerText === "Start"){
        board.style.display = "flex"
        start.style.display = "none"
        start.innerText = "Restart"
    } else {
        board.style.display = "flex"
        reset()
    }
}


function reset() {
    let cells = document.getElementsByClassName("game__board__cell")
        for(let k = 0; k < cells.length; k++) {
            cells[k].innerHTML = ""
        }
}



//Deixei o tamanho do board setado para 7x6, mas dá para modificar em um looping. Se quiserem criar um seletor de tamanho do mapa, eu faço.
let boardSize = [
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"],
    ["X", "X", "X", "X", "X", "X"]
]

// Cria o tabuleiro com as classes e ids prontas
for (let i = 0; i < boardSize.length; i++) {
    let column = document.createElement("ul")
    column.classList.add("game__board__column")
    for (let j = 0; j < boardSize[i].length; j++) {
        let cell = document.createElement("li")
        cell.classList.add(`game__board__cell`)
        cell.setAttribute("id", `${i+1}-${j+1}`)
        column.appendChild(cell)
        board.appendChild(column)
    }
}

// Armazena o estado de quem é a vez de jogar
let firstPlayer = true
// Base da função do jogo todo
function clickState(e) {
    console.log(firstPlayer)
    // Verifica se é o Player 1 ou 2
    if (firstPlayer === true) {
        //Verifica se o movimento é válido ou não
        if (e.currentTarget.lastChild.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui


            //A linha abaixo muda para a vez do Player 2.
            firstPlayer = false
        }
    } else {
        if (e.currentTarget.lastChild.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui



            //A linha abaixo muda para a vez do Player 1.
            firstPlayer = true
        }
    }
}