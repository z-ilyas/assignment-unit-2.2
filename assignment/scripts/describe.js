// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable named 'name' and set the value as 'Dane'.
// We write a create a conditional 
// if the value of 'name' matches 'Mary'. We console.log 'Hi, Mary!'
// if the value of 'name' does not match. We console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable named 'secret' and a conditional that
// if the value of 'code' matches '123'. We assign the value 'super' to the variable 'secret' and we multply the value of 'code' by 2. 
// if the value of 'code' is greater than 250. We assign the value 'duper' to the variable 'secret' 
// console.log 'secret' after the conditional has run.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable named 'isStudent' and set a boolean value. We create a varialble named 'age' and set the value '34'.We create a variable name 'zip' and set the value as '55407'. 
// We create a conditional if the variable 'isStudent' is 'true' and the variable 'zip' value is greater than '80000'. We console.log 'You're a student on the West Coast!'.
// If the variable 'isStudent' is 'false' and the variable 'age' is less than '30'. We console.log 'What are your hobbies?'. If the variable 'isStudent' is 'true' then we console.log 'Welcome to Prime!'.
// If it's not true console.log 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'
// FIX - colorOne and ColorTwo were reversed for their values. Also the instructions asked for both colorOne and ColorTwo to be set to purple
// and not just colorOne as shown in the code.  

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'
// FIX - the variable time was set as constant. The also use '||' which mean or. They should have used && instead.

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.
//FIX - the variable 'minAge' was set as a constant. They used <= instead of >= as the instructions asked for greater than or equal to. 
//They also console.log 'no entry' instead of 'enter' and there was no more conditional after that. So the code should have stopped there. 

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

