const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn__reset')[0];

let missed = 0;


const overlay = document.getElementById('overlay');
btn_reset.addEventListener('click', (e) => {
    overlay.style.display = 'none';
});

 const phrases = [
    'Set up baseCamp or a buffet',
    'Genetically engineered Tyrannosaur',
    'The Islands of La Cinco Muertes',
    'That was not on Ingens list',
    'The destruction of Isla Nublar',
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
        if (arr[i] === '') {
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
    let match = 'null';

    for (let i = 0; i < li.length; i += 1) {
        if (li[i].textContent === qwertyButton.textContent) {
            li[i].classList.add('show');
        } else {
            li[i].classList.add('null');
        }
        match = li[i].textContent;
    }
    return match;
}


// function that checks if button has been clicked
qwerty.addEventListener('click', (e) => {
    // let click = button.filter(function(btn_reset) {
    //     // return click;
    // });
    // const qwertyButton = document.querySelector('#qwerty');
    button.filter(function(btn_reset) {
    const button = e.target;
    const qwertyButton = document.querySelector('#qwerty');
    });
    if ('click' !== qwertyButton) {
    // if (e.target.tagName === 'qwertyButton') {
        document.getElementById('qwerty').disabled = false;
    } else {
        document.getElementById('qwerty').disabled = true;
        qwertyButton.classList.add('chosen');
        // document.getElementById("myBtn").disabled = true;
    }

    // // created a variable and put qButton as an arguement?
    const letterFound = checkLetter(button);
    });
    
//function that checks if game has been won or lost
// const checkWin = () => {}

