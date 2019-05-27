//Mehul Vikas Joshi
//app.js
//This is an oop game in javascript

const startButton = document.querySelector("div.main-container div#overlay button");
const qwerty = document.querySelector("div#qwerty.section");
let letters = "abcdefghijklmnopqrstuvwxyz";
let letters_guessed = [];

startButton.addEventListener("click", ()=>{ 
    let game = new Game();
    game.startGame(); 
    qwerty.addEventListener("click", (e)=> {
        if(e.target.innerText.length === 1) {
            game.handleInteraction(e.target.innerText);
        } 
    });

    document.addEventListener("keydown", (e)=>{
        if(letters.includes(e.key) && !letters_guessed.includes(e.key)) {
            game.handleInteraction(e.key);
            letters_guessed.push(e.key);
        }
    });


});









