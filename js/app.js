'use strict';

eslint-disable-next-line no-unused-vars
let userName = prompt('what is your name?');
alert('wellcome Mr/Ms ' + userName+ ' to my world' );
alert('let\'s go ' + userName + ' to see some quastion ;)');




let score = 0;

function tq1(){

  let q1 = prompt('do you know me from befor?').toLowerCase();

  switch (q1) {
  case 'yes':
  case 'y':
    alert('ok nice ;)');
    score++;
    break;
  default:
    alert('sorry for you X)');
  
  }
}

tq1();






function tq2(){

  let q2 = prompt('do you think iam an engineer?').toLowerCase();
  switch (q2) {
  case 'yes':
  case 'y':
    alert('ok nice ;)');
    score++;
    break;
  default:
    alert('sorry for you X)');
  
  }
  


}


tq2();



function tq3(){

  let q3 = prompt('am I older than 25?').toLowerCase();
  switch (q3) {
  case 'yes':
  case 'y':
    alert('correct answer ;)');
    score++;
    break;
  default:
    alert('wrong answer X)');
  
  }

}

tq3();




function tq4(){

  let q4 = prompt('do you want my number?').toLowerCase();
  switch (q4) {
  case 'yes':
  case 'y':
    alert('ok nice ;)');
    score++;
    break;
  default:
    alert('sorry for you X)');
  
  }
  

}

tq4();




function tq5(){

  let q5 = prompt('do you think i will be a decent programmer?').toLowerCase();
  switch (q5) {
  case 'yes':
  case 'y':
    alert('ok nice ;)');
    score++;
    break;
  default:
    alert('sorry for you X)');
  
  }
  
}

tq5();


function tq6(){
  for (let i = 0; i <= 4 ; i++) {
    let q6 =Number (prompt('how much is my experience?'));
  
  
    if (q6===2) {
      alert('correct');
      // score++;
      break;
  
    } else if (q6 > 2) {
      alert('too higth');
  
    }
    else {
  
      alert(' too low');
  
    }
    if(i == 4){
      alert('the answer is 2');}
  }
  

}

tq6();







function tq7(){

let j=0;

let qarr = ['football','boxing','basketball'];
for (let i = 1; i <= 6; i++) {
  let q7 =  prompt('what is my favorite type of sport?');
  for( j = 0; j < qarr.length; j++) {
    if(q7 == qarr[j]) {
      alert('well done lets see your final score');
      // score++;
      break;

    }
  }
  if(q7 == qarr[j]){
    break;
  }




}
}


tq7();

alert('your score  ' + 'score' + '/7');