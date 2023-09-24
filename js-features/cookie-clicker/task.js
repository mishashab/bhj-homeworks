let clicker__counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = function () {
    clicker__counter.textContent++;
    
    if (clicker__counter.textContent % 2 == 1) {
        cookie.width += 40;
    } else{
        cookie.width -= 40;
    }
}