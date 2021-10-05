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
// startRestart()

// let a =[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// let b = [5,6,7,8]
// let move[c][d]=a[1][2]
// console.log(b)
// console.log(a[1].indexOf(move))

 function victory(move){
    


    // move = boardSize[i][j] //coluna(i)/linha(j)

    
    let vict = false
    let counter =0
    let previusVert = 0
    let previusHor = 0
    let previusDiag = 0
    let afterVert = 0
    let afterHor = 0
    let afterDiag = 0
    while (vict===false){
        
        if(move[i-1][j]==move[i][j] ||move[i][j-1]==move[i][j]){
            counter++
        // }
    }

 }


// Matheus
