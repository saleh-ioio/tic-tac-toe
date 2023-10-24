const player = function (sign){
let _sign = sign;

let getSign = () => _sign;

return {
    getSign
}
}



const gameboard = (function (){
    
    let cells = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    let getCells = () => {
        return cells};

    let checkRows = (sign) => {
        for(let i = 0; i < cells.length; i++ ){

            if(cells[i].every(cell => cell == sign)){
                return true;

            }
        }
        return false;
    }

    let chooseMove = (rowNum, column, sign) => {
        if(cells[rowNum][column]== 0){
            cells[rowNum][column] = sign;
            return true;
        }else{
            return false;
        }
    }

    let resetCells = () => {
        getCells = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    }

    let checkColumns = (sign) => {
        let column = []
        for(let i = 0; i<cells.length; i++){
            for(let j=0; j<cells[i].length; j++){
                column.push( cells[j][i]);
            }

            if(column.every(cell => cell == sign)){
                return true;
            }
        }
        return false;
    }
    

    let checkDiagnals = (sign) => {
        let diagonal = [];
        //diagonal
       for (let i = 0; i < cells.length; i++) {
        diagonal.push(cells[i][i]); 
        
       }
       if(diagonal.every(cell => cell == sign)){
        return true;
       }

       let revDiagonal = [];
       //reverse diagonal
       for (let i = 0; i < cells.length; i++) {
        revDiagonal.push( cells[i][cells.length - i-1])
       }
       if(revDiagonal.every(cell => cell == sign )){
        return true;
       }

       return false;

    }

    let CheckWinner = (sign) => {
        
        if(checkRows(sign) || checkColumns(sign) || checkDiagnals(sign) ){
            return true;
        }
    }

    

return {CheckWinner, getCells, resetCells, chooseMove}
})();
