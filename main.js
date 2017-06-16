(function () {
  'use scrict';


var display = document.getElementById('display');


function clearDisplay(event) {
  display.value = '';
}

function numbers(event) {
  display.value += this.value;
}


function evaluation(event) {
  // var empty = num[0]
  var answer = display.value.split(" ");
  console.log(typeof answer);
  console.log('answer', answer);
  for (var i = 0; i < answer.length; i++) {
    if (answer[1] === '+'){
      answer[0]= +answer[0];
      answer[2]= +answer[2];
      display.value=answer[0] + answer[2];
    } else if (answer[1] === '-') {
      answer[0]= +answer[0];
      answer[2]= +answer[2];
      display.value=answer[0] - answer[2];
    } else if (answer[1] === '/'){
      answer[0]= +answer[0];
      answer[2]= +answer[2];
      display.value=answer[0] / answer[2];
    } else if (answer[1] === '*'){
      answer[0]= +answer[0];
      answer[2]= +answer[2];
      display.value=answer[0] * answer[2];
    }
  }
}

document.getElementById("c").addEventListener("click", clearDisplay);

var elements = document.querySelectorAll('.input');

for(var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', numbers);
}

document.getElementById("equals").addEventListener("click", evaluation);












// // this selectors all elements with the class num
// var elements = document.querySelectorAll('.input');
//
// // loop over all elements and add an event listener
// // console.log('elements', elements.length);
// for(var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener('click', numbers);
// }

// document.querySelectorAll('.num').addEventListener('click', numbers);
// document.getElementById("zero").addEventListener("click", numbers);
// document.getElementById("one").addEventListener("click", numbers);
// document.getElementById("two").addEventListener("click", numbers);
// document.getElementById("three").addEventListener("click", numbers);
// document.getElementById("four").addEventListener("click", numbers);
// document.getElementById("five").addEventListener("click", numbers);
// document.getElementById("six").addEventListener("click", numbers);
// document.getElementById("seven").addEventListener("click", numbers);
// document.getElementById("eight").addEventListener("click", numbers);
// document.getElementById("nine").addEventListener("click", numbers);

// document.getElementById("divide").addEventListener("click", operation);
// document.getElementById("multiply").addEventListener("click", operation);
// document.getElementById("minus").addEventListener("click", operation);
// document.getElementById("add").addEventListener("click", operation);
//
// document.getElementById("decimal").addEventListener("click", decimal);
// document.getElementById("equals").addEventListener("click", evaluation);
//
// function decimal(event) {
//     var display = document.getElementById('display');
//     display.value += '.';
// }

// function operation(event) {
//     var display = document.getElementById('display');
//     display.value += this.value;
// }
//       if ('+') {
//         string[0] + string[2] = answer;
//       }
//
//
//
//     if ("+"){
//     string[0] + string[2]
//   } if else ("-") {
//     string[0] - string[2];
//   }
//
//     if "/";
//     string[0] / string[2];
//     if "*";
//     string[0] * string[2];
// }


//alert(typeof(numbers));
//alert(numbers);
}());
