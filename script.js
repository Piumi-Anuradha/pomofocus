const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");


let interval 
let timeLeft = 1500;

function updateTimer(){
  let minutes = Math.floor(timeLeft/60)
  let seconds = timeLeft % 60
}

function startTimer(){
  interval = setInterval(()=>{
    
  },1000)
}

function stopTimer(){
  console.log("stop");
}

function resetTimer(){
  console.log("reset");
}



startEl.addEventListener("click",startTimer)
stopEl.addEventListener("click",stopTimer)
resetEl.addEventListener("click",resetTimer)
