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
   for (let i = 0; i < arr.length; i += 1) {
       let li = document.createElement('li');
       const isLetter = "abcdefghijklmnopqrstuvwxyz";
       if (isLetter) {
        isLetter.appendChild('li').addClassName('letter');
       } else {
           isLetter.appendChild('li').addClassName('space');
       }
       
       let arr = ul.appendChild('#phrase > li').innerHTML;
       
    //    arr.appendChild('#phrase');
       
    //    const list = arr.array[i];
    // list = document.createElement('li');
    // document.getElementsByClassName('letter').appendChild('ul#phrase > li');
   
    // li.appendChild('ul#phrase');

    // if (isLetter) {
    //     phrases[i].addItemInput.value;
    // } else {
    //     display = 'space';
    // }
   }

}

// const phraseArray = getRandomPhraseAsArray(phrases);
// addPhraseToDisplay(phraseArray);

//function that checks for letter in phrase
// const checkLetter = button => {
// const li = document.getElementsByTagName('li');
// const match = document.createElement('match');
// let match = null;

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


