const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn__reset')[0];

let missed = 0;


const overlay = document.getElementById('overlay');
btn_reset.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

 const phrases = [
    'set up baseCamp or a buffet',
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




//function that adds letters of phrase to display
function addPhraseToDisplay(arr) {
    // console.log(arr);
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

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


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
qwerty.addEventListener('click', (e) => {
    const button = e.target;
    if (button.tagName === "BUTTON") {
        button.classList.add('chosen');
        button.disabled = true;
    } else {
        button.disabled = false;
    }
    const letterFound = checkLetter(button);

                // if (letterFound === null) {

                //     const scoreboard = document.getElementById('scoreboard');
                //     const ol = scoreboard.firstElementChild;
                //     const li = ol.firstElementChild;
                //     ol.removeChild(li);
                // }
               
            if (letterFound === null) {
                const imgReplace = document.getElementsByTagName('img');
                imgReplace[missed].src = 'images/lostHeart.png';
                missed += 1;
        }

            checkWin();
    });

//function that checks if game has been won or lost
// const checkWin = () => {

// }
// function checkWin() {
//     document.getElementById('overlay');
//     const letter = document.getElementsByClassName('letter');
//     const show = document.getElementsByClassName('show');
//     if (show.length === letter.length) {
//         overlay.classList.add("win");
//         overlay.style.display = "flex";
//         document.querySelector([title="You Win!!"]);
//     } else {
//         overlay.classList.add("lose");
//         overlay.style.display = "flex";
//         document.querySelector([title="You Lose"]);
       
//     }
// }

function checkWin() {
    const letter = document.getElementsByClassName('letter');
    const show = document.gfetELementByClassName('show');
    const title = document.querySelector('.title');
    if (show.length === letter.length) {
        title.innerHTML = 'You Win!!';
        overlay.classList.add('win');
        overlay.style.display = "flex";
    } else {
        title.innerHTML = 'You Lose';
        overlay.classList.add('lose');
        overlay.style.display = "flex";
    }


    }

