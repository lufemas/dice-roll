// A random Number between 1 and 6, inclusive

/*
- Store a variable with the rolled number, let's call
- When the user clicks on the ROLL button it'll assign a random value between 1 and 6
- Depending on the number we rolled the briwser will show the correct image
- Change the number rolled displayed on the browser
*/

const $ = document;
const $rollBtn = $.getElementById(`roll-btn`);
const $diceFaces = $.getElementsByClassName(`dice-face`);
const $scoreNumber = $.getElementById(`score-number`);

// - When the user clicks on the ROLL button it'll assign a random value between 1 and 6
$rollBtn.addEventListener(`click`, function(e) {

    // - Store a variable with the rolled number, let's call
    let roll = Math.floor(Math.random() * 6) + 1

    // - Change the number rolled displayed on the browser
    $scoreNumber.innerText = roll;

    // Debugging
    console.log(roll);  // 1, 2, 3, 4, 5, or 6

    // - Depending on the number we rolled the briwser will show the correct image
    for( const face of $diceFaces ){
        if(face.id === `face-${roll}`) {
            face.classList.add(`show-face`)
        }else {
            face.classList.remove(`show-face`)
            console.log(face.innerHTML)
        }
    }

})




