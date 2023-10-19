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

    let checkRows = (sign) => {
        for(let i = 0; i < cells.length; i++ ){

            if(cells[i].every(cell => cell == sign)){
                return isWinner;
            }
        }
        return false;
    }

    checkColumns = (sing) => {
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
    
    checkDiagnals = (sign) => {
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
        revDiagonal = cells[i][cells.length - i-1]
       }
       if(revDiagonal.every(cell => cell == sign )){
        return true;
       }

       return false;

    }

return {}
})();
