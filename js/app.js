'use strict';
let score = 0;
let userName = prompt('Hi, what is your name?')
let message = '';
// console.log(userName);
alert('welcome ' + userName + ' lets play a guessing game')
let work = prompt('Did i work at company?')
/* console.log(work)*/
work.toLowerCase()
if (work == 'yes' || work == 'y') {
    message = 'this is wrong'
} else if (work == 'no' || work == 'n') {
    message = 'this is correct'
    score++
} alert(message);


let age = prompt('Am I 25 years old')
/* console.log(age)  */

if (age == 'yes' || age == 'y') {
    message = 'this is correct'
    score++
} else if (age == 'no' || age == 'n') {
    message = 'this is wrong'
} alert(message);

let country = prompt('do I live in Jordan')
/* console.log(country) */
if (country == 'yes' || country == 'y') {
    message = 'this is correct'
    score++
} else if (country == 'no' || country == 'n') {
    message = 'this is wrong'
} alert(message);


let money = prompt('Am I Millionaire ☻')
/* console.log(money)*/
if (money == 'yes' || money == 'y') {
    message = 'this is correct good job'
    score++
} else if (money == 'no' || money == 'n') {
    message = 'this is wrong ☺'
} alert(message);


let major = prompt('Am I Civil Enginner')
/* console.log(major) */
if (major == 'yes' || major == 'y') {
    message = 'this is correct'
    score++
} else if (major == 'no' || major == 'n') {
    message = 'this is wrong '
} alert(message);
alert('Welcome to my game you have 4 guesses. Guess from 1-10');
let guess;
for (let i = 0; i < 4; i++) {
    let answer = 7;
    guess = prompt('What\'s my favorite number');
    if (answer == guess) {
        alert('You guessed correctly');
        score++
        break;

    } else if (guess == 1 || guess == 2 || guess == 3 || guess == 4 || guess == 5) {
        alert('too low');
    } else if (guess == 6 || guess == 8 || guess == 9 || guess == 10) {
        alert('too high');
    } else {
        alert('you have to choose between 1-10')
    }

}

let sport = ['football', 'steak', 'tennis', 'baseball', 'golf', 'shawerma'];

for (let i = 0; i < sport.length; i++) {
    guess = prompt('Take your time honey you have 6 guesses which of these items belong to sport?football,steak,tennis,baseball,golf,shawerma');
    if (guess == 1 || guess == 3 || guess == 4 || guess == 5) {
        alert('correct');
        score++
        break;
    } else if (guess == 2 || guess == 6) {
        alert('not correct');
    }



}


alert('your score is ' + score +'☻');

