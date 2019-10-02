let y = Math.floor(Math.random() * 20 + 1); 
let guess = 0; 

document.getElementById('userGuess').onclick = function(){ 
 
    let x = document.getElementById('yourGuess').value; 

    if (x == y) 
    {	 
        alert('Nice work! You guessed my number in '
        + guess + ' tries '); 
    } 

    else if (x > y)
    {	 
        guess++; 
        alert('Your number was too high!'); 
    } 

    else
    { 
        guess++; 
        alert('Your number was too low!'); 
    } 

    if (guess === 1)
    {
        alert('you have 3 guesses remaining');
    }

    if (guess === 2)
    {
        alert('you have 2 guesses remaining');
    }

    if (guess === 3)
    {
        alert('you have 1 guesses remaining');
    }

    if (guess === 4)
    {
        alert('Sorry! You have lost the guessing game. Please try again!');
        location.reload();
    }

}; 
