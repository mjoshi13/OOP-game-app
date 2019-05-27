//Mehul Vikas Joshi
//Game.js
//This is an oop game in javascript

class Game {
    constructor() {
        this.missed = 0;
        

        this.phrases = [
            new Phrase("here is to the crazy ones"),
            new Phrase("the misfits"), 
            new Phrase("the rebels the troublemakers"),
            new Phrase("the round pegs in the square holes"), 
            new Phrase("the ones who see things differently"),
            new Phrase("they are not fond of rules"),
            new Phrase("they push the human race forward")
        ];
        this.activePhrase = null;
        this.life = 4;
    }

    startGame() {
        let div = document.querySelector("div.main-container div#overlay");
        div.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    handleInteraction(letter) {
        let qwerty = document.querySelectorAll("div#qwerty.section button");
        //Disable the given letter on the keyboard
        let i = 0; 
        for(i = 0; i < qwerty.length; i++) {
            if(letter === qwerty[i].innerText) {
                qwerty[i].disabled = true;
                break; 
            } 
        }
        //check to see if the letter is in the phrase
        if(this.activePhrase.phrase.includes(letter)) {
            qwerty[i].classList.add("chosen");
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()) {
                this.gameOver(); 
            }
        } else {
            qwerty[i].classList.add("wrong");
            this.removeLife(); 
        }
    }

    removeLife() {
        let div = document.querySelectorAll(".tries");
        this.missed++;
        div[this.life].innerHTML = "<img src='images/lostHeart.png' alt='Heart Icon' height='35' width='30'>";
        if(this.missed < 5) {
            this.life--;
        } else {
            this.gameOver(); 
        }
    }

    checkForWin() {
        let d = document.querySelector("#phrase ul");
        if(d.innerHTML.includes("hide")) {
            return false; 
        } else {
            return true; 
        }
    }

    gameOver() {
        let div = document.querySelector("div.main-container div#overlay");
        div.style.display = "block";
        if(this.missed < 5) {
            div.className = "win";
            div.querySelector("h1").innerText = "YOU WON!!!! :)!@#$%% Please wait 2 seconds while we set up the next round"
            div.querySelector("button").disabled = true; 
        } else {
            div.className = "lose";
            div.querySelector("h1").innerText = "Sorry we regret to inform you that we can not let you win at the moment :( Please wait 2 seconds before starting the next game!";
            div.querySelector("button").disabled = true; 
        }
        
        this.resetGame(); 

    }


    resetGame() {
        document.querySelector("div#phrase.section ul").innerHTML = "";
        let qwerty = document.querySelectorAll("div#qwerty.section button");
        let div = document.querySelectorAll(".tries");
        for(let i = 0; i < qwerty.length; i++) {
            qwerty[i].disabled = false;
            qwerty[i].className = "key"; 
        }
        for(let i = 0; i < div.length; i++) {
            div[i].innerHTML = "<img src='images/liveHeart.png' alt='Heart Icon' height='35' width='30'>"
        }
        this.missed = 0; 
        this.life = 4;
       setTimeout(function() {window.location.reload();}, 2000);

    }
}