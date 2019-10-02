import { guessResult } from '../autre.js';

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('does a correct guess result in 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    
    const guess = 1; 
    const compareNumbers = 1; 
    //Act 
    // Call the function you're testing and set the result to a const

    const result = guessResult(guess, compareNumbers); 
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});
