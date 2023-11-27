let minMaxOutput = document.getElementById('min-maxOutput');
let calButton1 = document.getElementById('calButt1');
let calButton2 = document.getElementById('calButt2');
//array
let minMaxArray = [23,32,1,45,5];
// function to calculate min value
function min() {
    //using a rest parameter to loop through every value in the array
   let result = Math.min(...minMaxArray);
    minMaxOutput.value = result;
}
// function to calculate max value
function max() {
    //using a rest parameter to loop through every value in the array
    let result = Math.max(...minMaxArray);
    minMaxOutput.value = result;
}
calButton1.addEventListener('click', min);
calButton2.addEventListener('click', max);
