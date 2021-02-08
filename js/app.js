'use strict';
let userName = prompt('Hi, what is your name?')
let message = '' ;
// console.log(userName);
alert('welcome ' + userName + ' lets play a guessing game')
let work = prompt('Did i work at company?')
/* console.log(work)     */
work.toLowerCase()
if (work == 'yes' || work == 'y') {
    message = 'this is wrong'
} else if (work == 'no' || work == 'n') {
    message = 'this is correct'
} alert(message);


let age = prompt('Am I 25 years old')
/* console.log(age)     */

if (age =='yes' || work == 'y') {
    message = 'this is correct'
} else if (age == 'no' || age == 'n') {
    message = 'this is wrong'
} alert(message);

let country = prompt('do I live in Jordan')
/* console.log(country)     */
if (country == 'yes' || country == 'y') {
    message = 'this is correct'
} else if (country == 'no' || country == 'n') {
    message = 'this is wrong'
} alert(message);


let money = prompt('Am I Millionaire ☻')
/* console.log(money)     */
if (money == 'yes' || money == 'y') {
    message = 'this is correct good job'
} else if (money == 'no' || money == 'n' ) {
    message = 'this is wrong ☺'
} alert(message);


let major = prompt('Am I Civil Enginner')
/* console.log(major)     */
if (major == 'yes' || major == 'y') {
    message = 'this is correct'
} else if (major == 'no' || major == 'n' ) {
    message = 'this is wrong '
} alert(message);