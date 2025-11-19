let name = prompt("Введіть ім'я:") || "User";
document.getElementById("username").textContent = "Гравець: " + name;

let userWin = 0;
let comuterWin = 0;

function stopGame() {
    userWin = 0;
    comuterWin = 0;

    document.getElementById("userWin").textContent = 0;
    document.getElementById("comuterWin").textContent = 0;

    document.getElementById("userScd").textContent = 0;
    document.getElementById("comuterScd").textContent = 0;

    alert("Гра почнеться знову!");
}

document.getElementById("random_number").onclick = function () {

    let user = Math.floor(Math.random() * 10) + 1;
    let comuter = Math.floor(Math.random() * 10) + 1;

    document.getElementById("userScd").textContent = user;
    document.getElementById("comuterScd").textContent = comuter;

    if (user > comuter) {
        userWin++;
    } else if (comuter > user) {
        comuterWin++;
    }

    document.getElementById("userWin").textContent = userWin;
    document.getElementById("comuterWin").textContent = comuterWin;

    if (userWin === 3) {
        alert(name + " переміг!");
        stopGame();
    }
    if (comuterWin === 3) {
        alert("Комп’ютер переміг!");
        stopGame();
    }
};