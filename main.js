(function () {
  'use scrict';


document.getElementById("display").addEventListener("click", clearDisplay());
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calculationFinished = true;
    operation = operations.none;
}






}());
