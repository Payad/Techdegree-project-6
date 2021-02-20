const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn__reset')[0];


let missed = 0;

const overlay = document.getElementById('overlay');
btn_reset.addEventListener('click', (e) => {
    missed = 0;
    //reset live hearts
    let imgReplace = document.querySelectorAll('.tries img');
    imgReplace.forEach(imgReplace => {
        imgReplace.src = 'images/liveHeart.png';
    });
        //reset phrase UL/clear phrase display
        const ul = document.querySelector('ul');
        ul.innerHTML = '';
    
        // enable qwerty buttons
        const qwertyButtons = qwerty.querySelectorAll('button');
        qwertyButtons.forEach(button => {
            button.removeAttribute('disabled');
            button.classList.remove('chosen');
           //not sure if button.disabled is correct or in the right place?
            button.disabled = false;
        });
        const phraseArray = getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
        
    overlay.style.display = 'none';
});

//Phrases
 const phrases = [
    'set up basecamp or a buffet',
    'genetically engineered tyrannosaur',
    'the islands of la cinco muertes',
    'that was not on ingens list',
    'the destruction of isla nublar',
];

//function that gets a random phrase from array
function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)].split('');
}
getRandomPhraseAsArray(phrases);

//function that adds letters of a phrase to display
function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
   for (let i = 0; i < arr.length; i += 1) {
       let li = document.createElement('li');
       ul.appendChild(li);
       li.textContent = arr[i];
        if (arr[i] === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    }
}


//a function that checks if letter is correct
function checkLetter(qwertyButton) {
    let li = document.getElementsByClassName('letter');
    let match = null;

    for (let i = 0; i < li.length; i += 1) {
        if (li[i].textContent === qwertyButton.textContent) {
            li[i].classList.add('show');
            match = li[i].textContent;
        } else {
            li[i].classList.add('null');
        }
       
    }
    return match;
}


// function that checks if button has been clicked
//  const qwertyDiv = document.querySelectorAll('div > qwerty');
    // const qwertyDiv = document.querySelectorAll('#qwerty');
// keyrow = document.querySelectorAll('.keyrow > button');
// const letterFound = checkLetter(button);
qwerty.addEventListener('click', (e) => {
    // const letterFound = checkLetter(button); 
    const button = e.target;
    const letterFound = checkLetter(button);
    if (button.tagName === "BUTTON") {
    button.classList.add('chosen');
    button.disabled = true;
} if (letterFound === null) {
    // const letterFound = checkLetter(button);
    const imgReplace = document.getElementsByTagName('img');
    imgReplace[missed].src = 'images/lostHeart.png';
    missed += 1;
    // const letterFound = checkLetter(button);
}
// const letterFound = checkLetter(button);



// qwerty.addEventListener('click', (e) => {
//     const button = e.target;
//     if (button.tagName === "BUTTON") {
//         button.classList.add('chosen');
//         button.disabled = true;
//     } else {
//         button.disabled = false;
//     }


    // const letterFound = checkLetter(button);

                // if (letterFound === null) {

                //     const scoreboard = document.getElementById('scoreboard');
                //     const ol = scoreboard.firstElementChild;
                //     const li = ol.firstElementChild;
                //     ol.removeChild(li);
                // }
               
        //     if (letterFound === null) {
        //         const imgReplace = document.getElementsByTagName('img');
        //         imgReplace[missed].src = 'images/lostHeart.png';
        //         missed += 1;
        // }

        checkWin();

        //function that checks if the game has been won
function checkWin() {
    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    const title = document.querySelector('.title');
    if (show.length === letter.length) {
        //headline showing person won
        title.innerHTML = 'You guessed the Jurassic Phrase!!';
        overlay.classList.add('win');
        overlay.style.display = "flex";
        //add reset button
        btn_reset.textContent = "Play again?"
    } else if (missed == 5) {
        //headline showing person lost
        title.innerHTML = 'Sorry the phrase is incorrect. Try again?';
        overlay.classList.add('lose');
        overlay.style.display = "flex";
        //add reset button
        btn_reset.textContent = "Try and guess the Jurassic Phrase again?"
    }


}
    });

     
