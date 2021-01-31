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

// function that checks for letter in phrase

// function checkLetter(button) {
//     button.addEventListener('click', (e) => {
//     const button = document.getElementsByClassName('letter');
//     const li = document.getElementsByTagName('li');
//     const isChecked = e.target.button;
//     const match = null;


    function checkLetter(qwertyButton) {
        // console.log(qwertyButton);
       
        let li = document.getElementsByTagName = ('li');
        let match = 'null';
        // qwertyButton.addEventListener('click', (e) => {
            for (let i = 0; i < qwertyButton.length; i += 1) {
            if (qwertyButton === 'letter') {
                qwertyButton[i].className = 'show';
            } else {
                qwertyButton[i].className = 'null';
            }
            if (qwertyButton === match) {
                qwertyButton[i].textContent = 'match'
            } else {
                qwertyButton[i].textContent = '';
            }
        }
        // });
        
    }

    // function checkLetter(button) {
    //     // console.log(button);
    //     // const button = document.querySelector('button');

    //     button.addEventListener('click', (e) => {

    //     });


    // for (let i = 0; i < button.length; i += 1) {
    //     let button = document.getElementsByTagName('li');
    //     button.appendChild(li);
    //     button.textContent = button[i];
    //     // const isChecked = e.target.checked;

    //     if (button[i] === 'letter') {
    //         button[i].className = 'show';
    //     } else {
    //         button[i].className = 'null';
    //     }
    

        // if (button[i].matches('letter')) {
        //     button[i].className = 'show';
        // } else {
        //     button[i].className = 'null';
        // }

        // if (isChecked === 'match') {
        //     li.className = 'show';
        // } else {
        //     li.className = 'null';
        // }
    // }


    // };




    // const button = document.getElementsByClassName('letter');
    // const li = document.getElementsByTagName('li');
    // for (let i = 0; i < button.length; i += 1) {
    //     const isChecked = e.target.checked;
    //     if (isChecked === 'matched') {
    //         button.className = 'show';
    //     } else {
    //         button.className = '';
    //     }
    // }
// const checkLetter = button ('click', (e) {
// const li = document.getElementsByTagName('li');
// const match = document.createElement('match');
// let match = null;
// }





// }
// for (let i = 0; i < li.length; i += 1) {
// if (match) {
//     li.style.display = 'show';
//     li.button.textContent = 'match';
// }
// }
// return match;
// };

// qwerty.addEventListener('click', (e) => {
    // let click = button.filter(function(btn_reset) {
    //     return click;
    // });
    // checkLetter(match.value);


//function that checks if game has been won or lost
// const checkWin = () => {

// };



