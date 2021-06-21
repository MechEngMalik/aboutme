'use strict';
let q1 = prompt('do you know me from befor?').toLowerCase();

switch (q1) {
case 'yes':
case 'y':
  alert('ok nice ;)');
  break;
default:
  alert('sorry for you X)');

}
let q2 = prompt('do you think iam an engineer?').toLowerCase();
switch (q2) {
case 'yes':
case 'y':
  alert('ok nice ;)');
  break;
default:
  alert('sorry for you X)');

}
let q3 = prompt('am I older than 25?').toLowerCase();
switch (q3) {
case 'yes':
case 'y':
  alert('correct answer ;)');
  break;
default:
  alert('wrong answer X)');

}
let q4 = prompt('do you want my number?').toLowerCase();
switch (q4) {
case 'yes':
case 'y':
  alert('ok nice ;)');
  break;
default:
  alert('sorry for you X)');

}
let q5 = prompt('do you think i will be a decent programmer?').toLowerCase();
switch (q5) {
case 'yes':
case 'y':
  alert('ok nice ;)');
  break;
default:
  alert('sorry for you X)');

}
// eslint-disable-next-line no-unused-vars
let userName = prompt('what is your name?');
alert('wellcome Mr/Ms ' + userName+ ' to my world' );
alert('let\'s go ' + userName + ' to correct your info if have a wrong answer ;)');



