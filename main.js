/* ====== MAIN JAVASCRIPT ====== */

/* vvvvvvvvvvvvvvv FLOWING COLOR CHANGE CODE vvvvvvvvvvvvvvvvvv */
// const letter1 = document.getElementById('letter1');
// const letter2 = document.getElementById('letter2');
// const letter3 = document.getElementById('letter3');
// const letter4 = document.getElementById('letter4');
// const letter5 = document.getElementById('letter5');
// const letter6 = document.getElementById('letter6');
// const letter7 = document.getElementById('letter7');
// const letter8 = document.getElementById('letter8');
// const letter9 = document.getElementById('letter9');
// const letter10 = document.getElementById('letter10');
// const letter11 = document.getElementById('letter11');
// const letter12 = document.getElementById('letter12');

// function changeColor() {
//   letter1.style.color = 'rgb(21, 39, 84)';
//   letter2.style.color = 'rgb(19, 75, 188)';
//   letter3.style.color = 'rgb(33, 101, 237)';
//   letter4.style.color = 'rgb(108, 154, 245)';
//   letter5.style.color = 'rgb(113, 203, 239)';
//   letter6.style.color = 'rgb(61, 152, 188)';
//   letter7.style.color = 'rgb(25, 110, 143)';
//   letter8.style.color = 'rgb(45, 65, 46)';
//   letter9.style.color = 'rgb(9, 70, 95)';
//   letter10.style.color = 'rgb(104, 104, 104)';
//   letter11.style.color = 'rgb(157, 227, 254)';
//   letter12.style.color = 'rgb(235, 248, 253)'; 
  // letter1.style.transition = 'color .02s 1s';
  // letter2.style.transition = 'color .02s 1s';
  // letter3.style.transition = 'color .02s 1s';
  // letter4.style.transition = 'color .02s 1s';
  // letter5.style.transition = 'color .02s 1s';
  // letter6.style.transition = 'color .02s 1s';
  // letter7.style.transition = 'color .02s 1s';
  // letter8.style.transition = 'color .02s 1s';
  // letter9.style.transition = 'color .02s 1s';
  // letter10.style.transition = 'color .02s 1s';
  // letter11.style.transition = 'color .02s 1s';
  // letter12.style.transition = 'color .02s 1s';
// };

// function returnColor() {
//   letter1.style.color = 'white';
//   letter2.style.color = 'white';
//   letter3.style.color = 'white';
//   letter4.style.color = 'white';
//   letter5.style.color = 'white';
//   letter6.style.color = 'white';
//   letter7.style.color = 'white';
//   letter8.style.color = 'white';
//   letter9.style.color = 'white';
//   letter10.style.color = 'white';
//   letter11.style.color = 'white';
//   letter12.style.color = 'white';
  // letter1.style.transition = 'color .02s 1s';
  // letter2.style.transition = 'color .02s 1s';
  // letter3.style.transition = 'color .02s 1s';
  // letter4.style.transition = 'color .02s 1s';
  // letter5.style.transition = 'color .02s 1s';
  // letter6.style.transition = 'color .02s 1s';
  // letter7.style.transition = 'color .02s 1s';
  // letter8.style.transition = 'color .02s 1s';
  // letter9.style.transition = 'color .02s 1s';
  // letter10.style.transition = 'color .02s 1s';
  // letter11.style.transition = 'color .02s 1s';
  // letter12.style.transition = 'color .02s 1s';
// }

// letter1.onmouseover = changeColor;
// letter1.onmouseleave = returnColor;
// letter6.onclick = changeColor;

///////////////////////////////////////////////////////////////////////////////

// class User {
//   set name(value) {
//     this._name = value;
//   }
// }

///////////////////////////////////////////////////////////////////////////////

//[1, 4, 8, 14, 21]
//[1, 3, 4, 6, 7, 9]
const arrayToSum = [1000, 300, 400, 600, 700, 900, 1100]

const sum = arrayToSum.reduce((accumulator, currentValue)=> {
// console.log(accumulator);
// console.log(currentValue);
return accumulator + currentValue;
}, 0);

console.log(sum);

///////////////////////////////////////////////////////////////////////////////

const arrayOfPayments = [1000, 300, 400, 600, 700, 900, 1100]

const payoff = arrayOfPayments.reduce((accumulator, currentValue)=> {
// console.log(accumulator);
// console.log(currentValue);
return accumulator - currentValue;
}, 10000);

console.log(payoff);

///////////////////////////////////////////////////////////////////////////////