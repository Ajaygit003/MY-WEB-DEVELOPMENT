let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = "";
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let display = document.getElementById("display");

// add event listeners to buttons
startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);

// function to update time
function updateTime() {
    if (seconds < 59) {
      seconds++;
    } else {
      seconds = 0;
      if (minutes < 59) {
        minutes++;
      } else {
        minutes = 0;
        hours++;
      }
    }
  
    // Leading Zero
    let Hours = hours;
    if (hours < 10) {
      Hours = "0" + hours;
    }
  
    let Minutes = minutes;
    if (minutes < 10) {
      Minutes = "0" + minutes;
    }
  
    let Seconds = seconds;
    if (seconds < 10) {
      Seconds = "0" + seconds;
    }
  
    display.innerHTML = Hours + ":" + Minutes + ":" + Seconds;
}

// function to start stopwatch
function start() {
    interval = setInterval(updateTime, 1000);
}

// function to stop stopwatch
function stop() {
    clearInterval(interval);
}

// function to reset stopwatch
function reset() {
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  display.innerHTML = "00:00:00";
}
