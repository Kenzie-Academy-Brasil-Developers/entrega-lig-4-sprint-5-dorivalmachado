const board = document.getElementById("gameBoard")

const start = document.getElementById("startButton")


start.addEventListener("click", startRestart)


let boardSize

//Criação de função de Start // Restart
function startRestart() {
    let body = document.getElementsByTagName("body")
    body[0].setAttribute("class", "playerOne--bg")

    let board = document.getElementsByClassName("")


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


function reset() {
    // A primeira coluna é a esquerda
    // A primeira celula é a de baixo
    let cells = document.getElementsByClassName("game__board__cell")
    for (let k = 0; k < cells.length; k++) {
        cells[k].innerHTML = ""
        cells[k].classList.add("playerOne--board")
    }
    firstPlayer = true
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

// Armazena o estado de quem é a vez de jogar
let firstPlayer = true

// Base da função do jogo todo
function play(e) {
    // Verifica se é o Player 1 ou 2
    if (firstPlayer === true) {
        //Verifica se o movimento é válido ou não
        if (e.currentTarget.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui
            insertDisk(e.currentTarget, firstPlayer)
            
            let body = document.getElementsByTagName("body")
            body[0].setAttribute("class", "playerTwo--bg")

            let cells = document.getElementsByTagName("li")
            for(let i=0; i< cells.length; i++){
                cells[i].setAttribute("class", "game__board__cell playerTwo--board")
            }
            //A linha abaixo muda para a vez do Player 2
            firstPlayer = false
            
        }
    } else {
        if (e.currentTarget.lastChild.childElementCount === 0) {
            //Se for válido, o código da adição da peça vai aqui
            insertDisk(e.currentTarget, firstPlayer)

            let body = document.getElementsByTagName("body")
            body[0].setAttribute("class", "playerOne--bg")
        
            let cells = document.getElementsByTagName("li")
            for(let i=0; i< cells.length; i++){
                cells[i].setAttribute("class", "game__board__cell playerOne--board")
                
            }


            //A linha abaixo muda para a vez do Player 1.
            firstPlayer = true
        }
    }
}


// Matheus

function checkHorizontalVictory(arrayLine,arrayColumn){
    let counter={
        Horizontal:{left:0,right:0,leftAble:true,rightAble:true},
    };
    
    let level = 1
    while (level<4){
        if(arrayLine-level>=0){
            if(boardSize[arrayLine-level][arrayColumn]===boardSize[arrayLine][arrayColumn]&&counter.Horizontal.leftAble===true){
                counter.Horizontal.left++
            }else{
                counter.Horizontal.leftAble===false
            }
        }
        
        if(arrayLine+level<=6){
            if(boardSize[arrayLine+level][arrayColumn]===boardSize[arrayLine][arrayColumn]&&counter.Horizontal.rightAble===true){
                counter.Horizontal.right++
            }else{
                counter.Horizontal.rightAble===false
            }
        }
        
        level++
    }

    let countHorizontal=counter.Horizontal.left+counter.Horizontal.right
    
    if(countHorizontal >= 3){
        console.log(`Venceu a partida na horizontal`)
        return true
    }else {
        return false
    }
}

function checkVerticalVictory(arrayLine,arrayColumn){
    let counter={
        Vertical:{up:0},
    };
    
    let level = 1
    while (level<4){
        
        if(boardSize[arrayLine][arrayColumn-level]===boardSize[arrayLine][arrayColumn]){
            counter.Vertical.up++
        }
        
        level++
    }

    let countVertical=counter.Vertical.up
    
    if(countVertical >= 3){
        console.log(`Venceu a partida na vertical`)
        return true
    }else {
        return false
    }
}

function checkDiagonalVictory(arrayLine,arrayColumn){
    let counter={
        DiagonalUp:{left:0,right:0,leftAble:true,rightAble:true},
        DiagonalDown:{left:0,right:0,leftAble:true,rightAble:true}
    };
    
    let level = 1
    while (level<4){
        if(arrayLine-level>=0){
            if(boardSize[arrayLine-level][arrayColumn-level]===boardSize[arrayLine][arrayColumn]&&counter.DiagonalUp.leftAble===true){
                counter.DiagonalUp.left++
            }else{
                counter.DiagonalUp.leftAble===false
            } 
        }
        if(arrayLine+level<=6){
            if(boardSize[arrayLine+level][arrayColumn+level]===boardSize[arrayLine][arrayColumn]&&counter.DiagonalUp.rightAble===true){
                counter.DiagonalUp.right++
            }else{
                counter.DiagonalUp.rightAble===false
            } 
        }
        
        if (arrayLine-level>=0 && arrayColumn+level<=6){
            if(boardSize[arrayLine-level][arrayColumn+level]===boardSize[arrayLine][arrayColumn]&&counter.DiagonalDown.leftAble===true){
                counter.DiagonalDown.left++
            }else{
                counter.DiagonalDown.leftAble===false
            }
        }

        if(arrayLine+level<=6 && arrayColumn-level>=0){
            if(boardSize[arrayLine+level][arrayColumn-level]===boardSize[arrayLine][arrayColumn]&&counter.DiagonalDown.rightAble===true){
                counter.DiagonalDown.right++
            }else{
                counter.DiagonalDown.rightAble===false
            }  
        }
    
        level++
    }

    let countDiagonalUp=counter.DiagonalUp.left+counter.DiagonalUp.right
    let countDiagonalDown=counter.DiagonalDown.left+counter.DiagonalDown.right
    
    if(countDiagonalUp >= 3 || countDiagonalDown >= 3){
        console.log(`Venceu a partida na diagonal`)
        return true
    }else {
        return false
    }
}
// Matheus


const insertDisk = (selectedColumn, player) => {
    // selectedColumn pode ser um elemento do DOM => const column =  selectedColumn.getAttribute('id'); OU const columnIndex = selectedColumn.lastChild.getAttribute('id').splice(-1)
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

    for (let i = 0; i < boardSizeLine.length; i++) {
        if (boardSizeLine[i] === 'X') {
            boardSizeLine[i] = diskValue;
            const id = `${columnIndex}-${i+1}`;
            const emptyCell = document.getElementById(id);
            emptyCell.appendChild(disk);
            checkHorizontalVictory(boardSizeLineIndex,i);
            checkVerticalVictory(boardSizeLineIndex,i);
            checkDiagonalVictory(boardSizeLineIndex,i);
            break
        }

    }

}

