let gameSequence = [];
let userSequence = [];

let btns = ["red", "yellow", "green", "blue"];

let started = false;
let level = 0;

//Step 1: 
let h2 = document.querySelector("h2");
document.addEventListener("keypress", () => {
    if(started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }



    //Step 2:
    function gameFlash(btn) {
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 250);
    }

    function userFlash(btn) {
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        }, 250);
    }

    function levelUp() {
        userSequence = [];
        level++;
        h2.innerText = `Level ${level}`;

        //random button choose
        let randIdx = Math.floor(Math.random() *3);
        let randColor = btns[randIdx];
        let randBtn = document.querySelector(`.${randColor}`); 
        gameSequence.push(randColor);
        console.log( gameSequence);
        // console.log(`randIdx: ${randIdx}, randColor: ${randColor}`); 
        // console.log(randBtn);
        gameFlash(randBtn);
    }

    function checkAns(idx) {
        // console.log("curr level : " + level);
        // let idx = level - 1;
        if(userSequence[idx] === gameSequence[idx]) {
            // console.log("same value");
            if(userSequence.length == gameSequence.length) {
                setTimeout(levelUp, 1000);
            }
        }
        else{
            h2.innerHTML = `Game over! Your score was <b>${level}</b> <br/> Press any key to start.`
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(() => {
                document.querySelector("body").style.backgroundColor = "#fff";
            }, 150);
            reset();
        }
    }

    //Step 3:
    function btnPress() {
        // console.log(this);
        let btn = this;
        userFlash(btn);

        userColor = btn.getAttribute("id");
        // console.log(userColor);
        userSequence.push(userColor)
        checkAns(userSequence.length - 1);
    }

    let allBtns = document.querySelectorAll(".btn");
    for(btn of allBtns) {
        btn.addEventListener("click", btnPress);
    }

    function reset() {
        started = false;
        gameSequence = [];
        userSequence = [];
        level = 0;
    }

});
