let timer = document.getElementById("timer")

let intervalId = setInterval(minusSecond, 1000);

function minusSecond() {
    timer.textContent--;
    if (timer.textContent == 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(intervalId);
    }
}
