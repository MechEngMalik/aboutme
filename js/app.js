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


// let q6 =Number (prompt('how much is my experience?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q6===2) {
//     alert('correct');
//     break;

//   } else if (q6>2) {
//     alert('too higth');
//     q6= Number( prompt('how much is my experience?'));

//   }
//   else {
//     alert(' too low');
//     q6=Number( prompt('how much is my experience?'));

//   }

// }

// alert('the answer is 2');


// let q7 =Number( prompt('how much old am I?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q7===28) {
//     alert('correct');
//     break;

//   } else if (q7>28) {
//     alert('too higth');
//     q7 =Number( prompt('how much old am I?'));

//   } else {
//     alert(' too low');
//     q7 =Number( prompt('how much old am I?'));

//   }
// }


// let q8 =Number( prompt('in what year i graduated?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q8===2017) {
//     alert('correct');
//     break;

//   } else if (q8>2017) {
//     alert('too higth');
//     q8 =Number( prompt('in what year i graduated?'));

//   } else {
//     alert(' too low');
//     q8 =Number( prompt('in what year i graduated?'));

//   }
// }

// let q9 =Number( prompt('when was i born?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q9===1993) {
//     alert('correct');
//     break;

//   } else if (q9>1993) {
//     alert('too higth');
//     q9 =Number( prompt('when was i born?'));

//   } else {
//     alert(' too low');
//     q9 =Number( prompt('when was i born?'));

//   }
// }

// let q10 =Number( prompt('what is my favorite number?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q10===7) {
//     alert('correct');
//     break;

//   } else if (q10>7) {
//     alert('too higth');
//     q10 =Number( prompt('what is my favorite number?'));

//   } else {
//     alert(' too low');
//     q10 =Number( prompt('what is my favorite number?'));

//   }
// }

// let q11 =Number( prompt('how much time i traveled?'));
// for (let i = 0; i < 3 ; i++) {


//   if (q11===1) {
//     alert('correct');
//     break;

//   } else if (q11>1) {
//     alert('too higth');
//     q11 =Number( prompt('how much time i traveled?'));

//   } else {
//     alert(' too low');
//     q11 =Number( prompt('how much time i traveled?'));

//   }
// }

for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['bmw','marcedes','ford'];
  let userInput =prompt('what is my favorite type of cars?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['malik','mohammad','ahmad'];
  let userInput =prompt('what is my favorite name?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['mansaf','bezza','craps'];
  let userInput =prompt('what is my favorite type of food?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['football','boxing','basketball'];
  let userInput =prompt('what is my favorite type of sport?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['water','coffe','tea'];
  let userInput =prompt('what is my favorite type of drinks?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['brown','black','red'];
  let userInput =prompt('what is my favorite type of color?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}
for (let i = 0; i < 6; i++) {
  let Countscour=i+1;
  let qarr= ['jordan','algeria','palestine'];
  let userInput =prompt('what is my favorite countrys?').toLowerCase;
  if(qarr[0]===userInput || qarr[1] === userInput || qarr[2]===userInput){
    alert('well done ' + ' you did it in [' + Countscour + '] time');
    break;

  }else{alert('wrong answer :D, try again');}

}

