var timer = 6;
var score = 0;
var hitrn;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}


function makeBubble(){
    var clutter = "";

    for(let i=0; i<84; i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } 
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

getNewHit();
runTimer();
makeBubble();