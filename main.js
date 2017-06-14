(function () {
  'use scrict';



function clearDisplay(event) {
  // alert('hweihifhwh');
    var display = document.getElementById('display');
    display.value = '';
}


function numbers(event) {
    var display = document.getElementById('display');
    display.value += this.value;
}

function decimal(event) {
    var display = document.getElementById('display');
    display.value += '.';
}

function operation(event) {
    var display = document.getElementById('display');
    display.value += this.value;
}

function evaluation(event) {
    var display = document.getElementById('display');
    alert('yes?');
    display.value;
    alert(display.value);
}

//alert(typeof(numbers));
//alert(numbers);
document.getElementById("c").addEventListener("click", clearDisplay);

document.getElementById("zero").addEventListener("click", numbers);
document.getElementById("one").addEventListener("click", numbers);
document.getElementById("two").addEventListener("click", numbers);
document.getElementById("three").addEventListener("click", numbers);
document.getElementById("four").addEventListener("click", numbers);
document.getElementById("five").addEventListener("click", numbers);
document.getElementById("six").addEventListener("click", numbers);
document.getElementById("seven").addEventListener("click", numbers);
document.getElementById("eight").addEventListener("click", numbers);
document.getElementById("nine").addEventListener("click", numbers);

document.getElementById("divide").addEventListener("click", operation);
document.getElementById("multiply").addEventListener("click", operation);
document.getElementById("minus").addEventListener("click", operation);
document.getElementById("add").addEventListener("click", operation);

document.getElementById("decimal").addEventListener("click", decimal);
document.getElementById("equals").addEventListener("click", evaluation);



}());
