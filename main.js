const elements = {
    score : null,
    answer : null,
    choices : null
};


//Creation d'un tableau de mot. Possibilité de ce connecter à une API
const words = [
    'JAVASCRIPT',  // words[0]
    'STYLESHEET',  // words[1]
    'LANGUAGE'     // words[2]
    
];

// variable vide qui recevra le mot qui sera tiré par pickword
let word = '';


const init = () => {
    //console.log('>> #init');
    elements.score = document.querySelector('#score');
    elements.choices = document.querySelector('#choices');
    elements.answer = document.querySelector('#answer');
    
    const pickword = () => {
        const randomIndex = getRandomInt(0, words.length -1)
        return words[randomIndex]
    };
    
    // selection du mot avcc la fonction pickword
    word = pickword();
    
    // create word mapping (une reference)
    // selectionner toute notre lettre (choix)
    // create choices mapping
    // afficher les mots
    // afficher les  ww
    // afficher les scores
    // ecouter les evenements de souris quand je click sur une lettre celle-ci va faire une action
    // ecouter les evenemnets de keyboard
    //check letter (verifier si la lettre est dans le mot)
    // si elle n'est  dans le mot ajout au socre et afficher la lettre
    // fin de partie si le score est au max on perd le jeu
    // si toute les lettres ont été decouverte on gagne
};


const gennerateChoices = () => {
    for(let index = 65; index <=90; index++) {
        
    }
};



window.addEventListener('load', () => {
    init();
});

//same as # 1
// Window.onload = init;
// same as # 2
// windows.addEventListener('load', init);
// same as # 3
// windows.onload = () => { init();};


/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 31:08