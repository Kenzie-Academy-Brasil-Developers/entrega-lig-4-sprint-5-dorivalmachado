const board = document.getElementById("gameBoard")

const start = document.getElementById("startButton")


start.addEventListener("click", startRestart)


let boardSize

//Criação de função de Start / Restart
function startRestart() {
    let body = document.getElementsByTagName("body")
    body[0].setAttribute("class", "playerOne--bg")

    

    boardSize = [
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"],
        ["X", "X", "X", "X", "X", "X"]
    ]

    if (start.innerText === "START") {
        createBoard()
        start.innerText = "RESET"
    } else {
        reset()

    }
}

let firstPlayer = true

let drawCounter = 0

function reset() {
    // A primeira coluna é a esquerda
    // A primeira celula é a de baixo
    let cells = document.getElementsByClassName("game__board__cell")
    for (let k = 0; k < cells.length; k++) {
        cells[k].innerHTML = ""
        cells[k].classList.add("playerOne--board")
    }

    firstPlayer = true
    drawCounter = 0
}


// Cria o tabuleiro com as classes e ids prontas
function createBoard() {
    board.classList.add("game__board")
    for (let i = 0; i < boardSize.length; i++) {
        let column = document.createElement("ul")
        column.classList.add("game__board__column")
        column.addEventListener("click", play)
        for (let j = 0; j < boardSize[i].length; j++) {
            let cell = document.createElement("li")
            cell.setAttribute("class", "game__board__cell playerOne--board")
            cell.setAttribute("id", `${i+1}-${j+1}`)
            column.appendChild(cell)
            board.appendChild(column)
        }
    }
}


// Base da função do jogo todo
function play(e) {
    //Verifica se o movimento é válido ou não
    if (e.currentTarget.lastChild.childElementCount === 0) {
        drawCounter++
        // Verifica se é o Player 1 ou 2
        if (firstPlayer === true) {
            insertDisk(e.currentTarget, firstPlayer)

            let body = document.getElementsByTagName("body")
            body[0].setAttribute("class", "playerTwo--bg")

            let cells = document.getElementsByTagName("li")
            for (let i = 0; i < cells.length; i++) {
                cells[i].setAttribute("class", "game__board__cell playerTwo--board")
            }

            firstPlayer = false


        } else {
            insertDisk(e.currentTarget, firstPlayer)

            let body = document.getElementsByTagName("body")
            body[0].setAttribute("class", "playerOne--bg")

            let cells = document.getElementsByTagName("li")
            for (let i = 0; i < cells.length; i++) {
                cells[i].setAttribute("class", "game__board__cell playerOne--board")

            }

            firstPlayer = true
        }
    }
}


// Matheus

function checkHorizontalVictory(arrayLine, arrayColumn) {
    let counter = {
        Horizontal: {
            left: 0,
            right: 0,
            leftAble: true,
            rightAble: true
        },
    };

    let level = 1
    while (level < 4) {
        if (arrayLine - level >= 0) {
            if (boardSize[arrayLine - level][arrayColumn] === boardSize[arrayLine][arrayColumn] && counter.Horizontal.leftAble === true) {
                counter.Horizontal.left++
                /*console.log(boardSize[arrayLine - level][arrayColumn])
                console.log(boardSize[arrayLine][arrayColumn])*/
            } else {
                counter.Horizontal.leftAble = false
            }
        }

        if (arrayLine + level <= 6) {
            if (boardSize[arrayLine + level][arrayColumn] === boardSize[arrayLine][arrayColumn] && counter.Horizontal.rightAble === true) {
                counter.Horizontal.right++
                /*console.log(boardSize[arrayLine + level][arrayColumn])
                console.log(boardSize[arrayLine][arrayColumn])*/
            } else {
                counter.Horizontal.rightAble = false
                console.log()
            }
        }

        level++
    }

    let countHorizontal = counter.Horizontal.left + counter.Horizontal.right

    if (countHorizontal >= 3) {
        console.log(`Venceu a partida na horizontal`)
        victoryStatus = true

    }
}

function checkVerticalVictory(arrayLine, arrayColumn) {
    let counter = {
        Vertical: {
            up: 0
        },
    };

    let level = 1
    while (level < 4) {

        if (boardSize[arrayLine][arrayColumn - level] === boardSize[arrayLine][arrayColumn]) {
            counter.Vertical.up++
        }

        level++
    }

    let countVertical = counter.Vertical.up

    if (countVertical >= 3) {
        console.log(`Venceu a partida na vertical`)
        victoryStatus = true

    }
}

function checkDiagonalVictory(arrayLine, arrayColumn) {
    let counter = {
        DiagonalUp: {
            left: 0,
            right: 0,
            leftAble: true,
            rightAble: true
        },
        DiagonalDown: {
            left: 0,
            right: 0,
            leftAble: true,
            rightAble: true
        }
    };

    let level = 1
    while (level < 4) {
        if (arrayLine - level >= 0) {
            if (boardSize[arrayLine - level][arrayColumn - level] === boardSize[arrayLine][arrayColumn] && counter.DiagonalUp.leftAble === true) {
                counter.DiagonalUp.left++
            } else {
                counter.DiagonalUp.leftAble = false
            }
        }
        if (arrayLine + level <= 6) {
            if (boardSize[arrayLine + level][arrayColumn + level] === boardSize[arrayLine][arrayColumn] && counter.DiagonalUp.rightAble === true) {
                counter.DiagonalUp.right++
            } else {
                counter.DiagonalUp.rightAble = false
            }
        }

        if (arrayLine - level >= 0 && arrayColumn + level <= 6) {
            if (boardSize[arrayLine - level][arrayColumn + level] === boardSize[arrayLine][arrayColumn] && counter.DiagonalDown.leftAble === true) {
                counter.DiagonalDown.left++
            } else {
                counter.DiagonalDown.leftAble = false
            }
        }

        if (arrayLine + level <= 6 && arrayColumn - level >= 0) {
            if (boardSize[arrayLine + level][arrayColumn - level] === boardSize[arrayLine][arrayColumn] && counter.DiagonalDown.rightAble === true) {
                counter.DiagonalDown.right++
            } else {
                counter.DiagonalDown.rightAble = false
            }
        }

        level++
    }

    let countDiagonalUp = counter.DiagonalUp.left + counter.DiagonalUp.right
    let countDiagonalDown = counter.DiagonalDown.left + counter.DiagonalDown.right

    if (countDiagonalUp >= 3 || countDiagonalDown >= 3) {
        console.log(`Venceu a partida na diagonal`)
        victoryStatus = true

    }
}

let victoryStatus = false

function draw() {
    console.log("Empate!")
    
}
// Matheus


function insertDisk(selectedColumn, player) {
    const columnIndex = selectedColumn.lastChild.getAttribute("id").slice(0, 1);
    const boardSizeLineIndex = Number(columnIndex) - 1;
    const boardSizeLine = boardSize[boardSizeLineIndex];
    let diskValue = '';
    const disk = document.createElement("div");

    if (player === true) {
        diskValue = "V"
        disk.classList.add("red__piece");
    } else {
        diskValue = "P"
        disk.classList.add("black__piece");
    }

    let attemptFindEmptyCell = 0;

    for (let i = 0; i < boardSizeLine.length; i++) {
        attemptFindEmptyCell++

        if (boardSizeLine[i] === 'X') {

            boardSizeLine[i] = diskValue;
            const id = `${columnIndex}-${i+1}`;
            const emptyCell = document.getElementById(id);

            showFallAnimation(selectedColumn, disk, emptyCell, attemptFindEmptyCell)

            emptyCell.appendChild(disk);

            checkHorizontalVictory(boardSizeLineIndex, i);
            checkVerticalVictory(boardSizeLineIndex, i);
            checkDiagonalVictory(boardSizeLineIndex, i);

            if (drawCounter === 42 && victoryStatus === false) {
                draw()
            }

            break
        }

    }

}

function showFallAnimation(column, disk, cell, counter) {

    const columnHeight = column.clientHeight;
    const cellHeight = cell.clientHeight
    const gap = columnHeight / 6 - cellHeight

    disk.classList.add("position-abs");
    disk.style.top = `-${cellHeight}px`

    setTimeout(() => disk.style.top = `${cellHeight*(7-counter) - (gap*(counter-1))}px`, 300)
    setTimeout(() => {
        disk.removeAttribute("style");
        disk.classList.remove("position-abs");
    }, 1300)

}