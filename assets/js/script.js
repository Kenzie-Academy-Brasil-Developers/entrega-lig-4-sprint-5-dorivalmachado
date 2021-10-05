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
}