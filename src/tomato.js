let workMinutes = 25;
let time = workMinutes * 60;
let timerInterval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
    if (time > 0) {
        time--;
        updateDisplay();
    } else {
        clearInterval(timerInterval);
        alert("Temps écoulé ! 🍅 Pause bien méritée.");
    }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    pauseTimer();
    time = workMinutes * 60;
    updateDisplay();
}

updateDisplay();

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

