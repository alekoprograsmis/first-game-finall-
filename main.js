var cube = document.querySelector('.player')
var score = 0;
var uscore = document.querySelector('h1')
var reset  =document.querySelector('.reset')

cube.addEventListener('click',() => {
    var randX = Math.floor(Math.random() * 300)
    var randY = Math.floor(Math.random() * 300)
    
    score ++;
    uscore.innerText = `score: ${score}`
    win();
    

    cube.style.marginLeft = randX + 'px';
    cube.style.marginTop = randY + 'px';
})
function win (){
    if(score >30){
        alert('you beat first level')
    }
}
reset.addEventListener('click', () =>{
    score = 0
    uscore.innerText = `score: ${score}`
})

