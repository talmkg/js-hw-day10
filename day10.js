const movies = require("./movies");
/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
let test = 23;
console.log("Exercise A: done");
/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
let sum = 10 + 20;
console.log("Exercise B: " + sum);

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log("Exercise C: " + getRandomInt(20)); /*max, limit for random number*/
/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
const me = new Object();
me.name = "Tim";
me.surname = "Afanasiev";
me.age = 18;
console.log("Exercise D: done!");
/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/
delete me.age;
console.log("Exercise E: done!");

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/
me.lang1 = "HTML";
me.lang2 = "CSS";
me.lang3 = "JavaScript";
console.log("Exercise F: done!");
/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

delete me.lang3;
console.log("Exercise G: done!");

// JS Functions
/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.
*/
let random;
random = Math.floor(Math.random() * 6);
console.log("Exercise 1: " + random);
/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("Exercise 2: " + whoIsBigger(20, 10));
/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/

function SplitMe(str) {
  return str.split(" ");
}
console.log("Exercise 3: " + SplitMe("Wassup my name is Tim"));
/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

function deleteOne(boolean, str1) {
  if (boolean > 1) {
    return str1.slice(1);
  } else {
    return str1.slice(0, -1);
  }
}
console.log("Exercise 4:", deleteOne(0, "hello"));
/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/
function onlyLetters(string3) {
  return string3.replace(/[0-9]/g, "");
}
console.log("Exercise 5: " + onlyLetters("Maybe 6 or 8")); // 👉️ a b c

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
function isThisAnEmail(email) {
  let validmail =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/gi;
  if (validmail.test(email)) {
    /*test = Returns a Boolean value that indicates whether or not a pattern exists in a searched string.*/
    return true;
  } else {
    return false;
  }
}
console.log("Exercise 6: " + isThisAnEmail("tim@gmail.com"));
/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
function whatDayIsIt() {
  let today = new Date();
  let whatDayLetters = today.toLocaleString("default", { weekday: "long" });
  return whatDayLetters;
}
console.log("Exercise 7: " + whatDayIsIt());
/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
function dice() {
  min = 1;
  max = 6;
  range = max - min + 1;
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * range) + min;
    return rand;
  }
}
console.log("Exercise 8: " + dice());
/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.

*/

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
function isTodayMyBirthday(randomDate) {
  let thisDay = new Date();
  if (
    randomDate.getDate() === thisDay.getDate() &&
    randomDate.getMonth() === thisDay.getMonth()
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(
  "Exercise 10: Is today my birthday? ",
  isTodayMyBirthday(new Date("10-10"))
);
// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
function deleteProp(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    //make sure the property exists
    delete obj[prop];
  }
  return obj;
}

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
function oldestMovie(arr) {
  let oldest = arr[0].Year;
  let movie = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Year < oldest) {
      oldest = arr[i].Year;
    }
  }
  return movie;
}
const oldestMovieObj = oldestMovie(movies);

console.log(
  "Exercise 12: " +
    oldestMovieObj.Title +
    " is the oldest movie made in " +
    oldestMovieObj.Year
);

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
function onlyTheTitles(arr) {
  let titles = [];
  for (let i = 0; i < arr.length; i++) {
    titles.push(arr[i].Title);
  }
  return titles;
}
/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
