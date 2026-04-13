let buttons = document.querySelectorAll("button");
let result = document.querySelector("h3");
let playerimg = document.querySelector("#playerImg");
let compimg = document.querySelector("#compImg");
let scorep = document.querySelector("#yourScore");
let scorec = document.querySelector("#compScore");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");

var youcount = 0;
var compcount = 0;

function comp_choice() {
    var choices = ["Rock", "Paper", "Scissor"];
    return choices[Math.floor(Math.random() * 3)];
}

document.getElementById("resetBtn").addEventListener("click", function () {
    youcount = 0;
    compcount = 0;
    scorep.textContent = 0;
    scorec.textContent = 0;
    result.textContent = "Result :";
    result.className = "";
});

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (btn.id === "resetBtn") return;

        var yourchoice = btn.textContent.trim();
        var compchoice = comp_choice();

        p1.textContent = "You played " + yourchoice;
        p2.textContent = "Computer played " + compchoice;

        playerimg.src = "images/" + yourchoice + ".png";
        compimg.src = "images/" + compchoice + ".png";

        // shake animation
        playerimg.classList.remove("shake");
        void playerimg.offsetWidth;
        playerimg.classList.add("shake");

        compimg.classList.remove("shake");
        void compimg.offsetWidth;
        compimg.classList.add("shake");

        // result + colors
        result.className = "";
        void result.offsetWidth;

        if (yourchoice === compchoice) {
            result.className = "draw";
            result.textContent = "Result : Draw!";
        } else if (
            yourchoice === "Rock" && compchoice === "Scissor" ||
            yourchoice === "Scissor" && compchoice === "Paper" ||
            yourchoice === "Paper" && compchoice === "Rock"
        ) {
            result.className = "win";
            result.textContent = "Result : You Win! 🎉";
            scorep.textContent = ++youcount;
        } else {
            result.className = "lose";
            result.textContent = "Result : You Lose! 😢";
            scorec.textContent = ++compcount;
        }
    });
});