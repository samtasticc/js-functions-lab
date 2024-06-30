/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult() {
    if (adult = 18)
        console.log('Adult') 
    // } else {
    //     console.log('Minor')       
}

console.log('Exercise 2 Result:', isAdult(21)); // i changed my code so many times and i received various syntax errors. when my code did work, i received a bool (true) instead of the intended output. my current code keeps telling me "else" is unexpected.

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(vowel) {
    if (vowel === "a", "e", "i", "o", "u")
        console.log(true) /*{
    } else {
        console.log(false)
    }*/
}

console.log('Exercise 3 Result:', isCharAVowel("a")); // i keep receiving the error that "else" was unexpected.



