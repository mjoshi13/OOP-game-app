//Mehul Vikas Joshi
//Phrase.js
//This is an oop game in javascript

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    addPhraseToDisplay() {
        let list = document.querySelector("div#phrase.section ul");
        for(let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement("li");
            if(this.phrase.charAt(i) === " ") {
                li.setAttribute("class", "space");
                li.innerText =  " ";
            } else {
                li.setAttribute("class", "hide letter " + this.phrase.charAt(i));
                li.innerText = this.phrase.charAt(i); 
           
            }
            list.appendChild(li);
        }
    
    }

    checkLetter(letter) {
        for(let i = 0; i < this.phrase.length; i++) {
            if(letter === this.phrase.charAt(i)) {
                return true;
            }

        }
        return false;
    }

    showMatchedLetter(letter) {
        let list = document.querySelector("div#phrase.section ul").children;
        for(let i = 0; i < this.phrase.length; i++) {
            if(letter === this.phrase.charAt(i)) {
                list[i].className = "show letter " + this.phrase.charAt(i);
                // list[i].setAttribute("class", "show letter " + this.phrase.charAt(i));
            }
        }

    }
}