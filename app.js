const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btn_reset = document.getElementsByClassName('btn__reset')[0];
// const missed = document.createElement('missed');
// const isLetter = document.createElement('isLetter');
// const isLetter = true;
// const space = document.createElement('space');
let missed = 0;
// const phrases = document.createElement('phrases');

const overlay = document.getElementById('overlay');
btn_reset.addEventListener('click', (e) => {
    // if (e.target.className === 'btn_reset') {
    // btn_reset
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
// for (let i = 0; i < phrases.length; i += 1) {
        //     phrases[i].style.display = '';
    // for (let i = 0; i < arr.length; i += 1) {
    //     arr[i].arr.style.display = ''; 
    // }
        // getRandomPhraseAsArray(phrases);
        // phrases = arr[Math.floor(Math.random() * arr.length)];
        // for (let i = 0; i < phrases.length; i += 1) {
        //     phrases[i].arr.style.display = '';

        // }
        // return phrases[i];
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
  
    // const randomPhrase = getRandomPhraseAsArray(phrases);
    // addPhraseToDisplay(randomPhrase);


const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

    
function checkLetter(qwertyButton) {
        // console.log(qwertyButton);
       
        let li = document.getElementsByClassName('letter');
        let match = 'null';
        
            for (let i = 0; i < li.length; i += 1) {
            if (li[i].textContent === qwertyButton) {
                li[i].classList.add('show');
                match += 1;
            } else if (li[i].textContent !== qwertyButton) {
                li[i].textContent.add('null');
                letterFound = 'null';
                match += 0;
            }
                match = li[i].textContent;
        }
        return match;
            // li[i].textContent === match;
            // return match;
            // }
            //or
            // return li[i].textContent === match;
            // const match = li[i].textContent;
            // return match;
}
        

            // const match = li[i].textContent(match);

// function that checks if button has been clicked
qwerty.addEventListener('click', (e) => {
    // let click = button.filter(function(btn_reset) {
    //     // return click;
    // });
    const qwertyButton = document.querySelector('#qwerty');
    if (e.target.tagName === 'qwertyButton') {
        document.getElementById('qwerty').disabled = false;
    } else {
        document.getElementById('qwerty').disabled = true;
        qwertyButton.classList.add('chosen');
        // document.getElementById("myBtn").disabled = true;
    }

    // // created a variable and put qButton as an arguement?
    const letterFound = checkLetter(qwertyButton);
    });
    
//function that checks if game has been won or lost
// const checkWin = () => {}

// 