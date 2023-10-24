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
        cells = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
            ];
    }

    let checkColumns = (sign) => {
        for(let i = 0; i<cells.length; i++){
        let column = []
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
        debugger;
        if(checkRows(sign) || checkColumns(sign) || checkDiagnals(sign) ){
        
            return true;
        }
        return false;
    }

    //check if there is more steps to play or ended with draw
    let checkGameStatus = () =>
    {
        for (let i = 0; i < cells.length; i++) {
            const row = cells[i];
            if(row.includes(0))
            //there more moves to play
            return true;
            
        }
        //no moves => game result : draw
        return false;
    }

    

return {CheckWinner, getCells, resetCells, chooseMove, checkGameStatus}
})();

const displayAndButtonController = (()=>{
    
    const xtxt = document.querySelector('#x');
    const otxt = document.querySelector('#o');

    const restButton = document.querySelector('#resetBtn');

    const cellCont = document.querySelector('.gameCont');
    const cellArr = cellCont.children;

    let glow = (playerTurn) => {
        const glowClass = "glowPlayerBg";
        if( playerTurn == 'o'){
            otxt.classList += " " + glowClass;
            xtxt.classList.remove(glowClass);
         }else{
            xtxt.classList += " " + glowClass;
            otxt.classList.remove(glowClass);

         }
    }
    
    
    return {otxt, xtxt, restButton, cellArr, glow};
})();

const gameController = (()=>{


    const player1 = player('x');
    const player2 = player('o');

    let playerTurn = player1;
    let gameStat = true;

    displayAndButtonController.glow(playerTurn.getSign);

    for(let i = 0; i<gameboard.getCells().length; i++){
    for(let j = 0; j<gameboard.getCells()[i].length; j++){
        displayAndButtonController.cellArr[(3*i)+j]
        .addEventListener('click' , () =>{
            if(gameboard.chooseMove(i,j,playerTurn.getSign())){

                displayAndButtonController.cellArr[(3*i)+j]
                .firstChild.textContent = playerTurn.getSign(); 
                console.log(gameboard.getCells());

                if(gameboard.CheckWinner(playerTurn.getSign())){
                    alert('the winner is ' + playerTurn.getSign());   
                }

                if(gameboard.checkGameStatus()){
                    playerTurn = playerTurn == player1 ? player2 : player1;
                    displayAndButtonController.glow(playerTurn.getSign());
                }else{
                    alert('draw');
                }

            }else{
                alert('already taken');
            }
        });

        displayAndButtonController.restButton.addEventListener('click', 
        () => {
            gameboard.resetCells();
            playerTurn = player1;
            displayAndButtonController.glow(playerTurn.getSign())
            for(let i = 0; i<displayAndButtonController.cellArr.length; i++)
            displayAndButtonController.cellArr[i].firstChild.textContent = "";
        });
        
    }
}



})();

