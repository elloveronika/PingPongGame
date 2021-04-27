document.querySelector('.player1').addEventListener('click', resultsOne)
document.querySelector('.player2').addEventListener('click' , resultsTwo)
const selection = document.querySelector('#nums')
let reset = document.querySelector('.reset').addEventListener('click', resetAll)

let onePlayer = 0
let twoPlayer = 0
let winner = 3
let gameOver = false;

selection.addEventListener('change', function() {
    winner = +this.value
    resetAll()
    
}) // ayudaaaaaa


function resultsOne() {

if(winner == onePlayer || winner == twoPlayer){
        gameOver = true
 }else{
    onePlayer+= 1
    document.querySelector('.p1').innerText =  onePlayer
    
}
}


function resultsTwo(){

if(winner == onePlayer || winner == twoPlayer){
        gameOver = true
}else{

    twoPlayer+= 1
    document.querySelector('.p2').innerText =  twoPlayer
    
}
}
function resetAll(){
    twoPlayer = 0
    onePlayer = 0
    document.querySelector('.p1').innerText = onePlayer
    document.querySelector('.p2').innerText = twoPlayer


}
