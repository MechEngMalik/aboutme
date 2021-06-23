'use strict';
// let q1 = prompt('do you know me from befor?').toLowerCase();

// switch (q1) {
// case 'yes':
// case 'y':
//   alert('ok nice ;)');
//   break;
// default:
//   alert('sorry for you X)');

// }
// let q2 = prompt('do you think iam an engineer?').toLowerCase();
// switch (q2) {
// case 'yes':
// case 'y':
//   alert('ok nice ;)');
//   break;
// default:
//   alert('sorry for you X)');

// }
// let q3 = prompt('am I older than 25?').toLowerCase();
// switch (q3) {
// case 'yes':
// case 'y':
//   alert('correct answer ;)');
//   break;
// default:
//   alert('wrong answer X)');

// }
// let q4 = prompt('do you want my number?').toLowerCase();
// switch (q4) {
// case 'yes':
// case 'y':
//   alert('ok nice ;)');
//   break;
// default:
//   alert('sorry for you X)');

// }
// let q5 = prompt('do you think i will be a decent programmer?').toLowerCase();
// switch (q5) {
// case 'yes':
// case 'y':
//   alert('ok nice ;)');
//   break;
// default:
//   alert('sorry for you X)');

// }
// // eslint-disable-next-line no-unused-vars
// let userName = prompt('what is your name?');
// alert('wellcome Mr/Ms ' + userName+ ' to my world' );
// alert('let\'s go ' + userName + ' to correct your info if have a wrong answer ;)');



for (let i = 0; i <= 4 ; i++) {
  let q6 =Number (prompt('how much is my experience?'));


  if (q6===2) {
    alert('correct');
    break;

  } else if (q6>2) {
    alert('too higth');
    q6= Number( prompt('how much is my experience?'));

  }
  else {
    alert(' too low');
    q6=Number( prompt('how much is my experience?'));
    i = 5;

  }
  if(i === 4){
  alert('the answer is 2');
}


}

alert('the answer is 2');




for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['football','boxing','basketball'];
  let userInput =prompt('what is my favorite type of sport?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
