var actual_number = null;
var actual_operation = null;
//Store result
var result = null;

//null variables for change in the future

var button_clear = document.getElementById('button_clear');
var button_result = document.getElementById('button_result');
var button_division = document.getElementById('button_division');
var button_multiplication = document.getElementById('button_multiplication');
var button_sum = document.getElementById('button_sum');
var button_rest = document.getElementById('button_rest');
var button0 = document.getElementById('button0');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');




//UpdateDisplay for organization
function updateDisplay(){
    document.getElementById('actual-operation').innerHTML = actual_operation === null?'':actual_operation;
    document.getElementById('actual-number').innerHTML = actual_number === null?'':actual_number;
};

//Show result 
function updateDisplay(result){
    document.getElementById('actual-operation').innerHTML = actual_operation === null?'':actual_operation;
    // Si result es undefined, muestra el valor de actual_number, si no, muestra el valor de result
    document.getElementById('actual-number').innerHTML = result === undefined ? (actual_number === null?'':actual_number) : result;
};


//Calculate result
function getResult(actual_operation){
    return eval(actual_operation);
}

//Clear ✅
button_clear.addEventListener('click', function () {
    actual_number = null;
    actual_operation = null;
    document.getElementById('actual-operation').innerHTML = 0;
    document.getElementById('actual-number').innerHTML = 0;
});

//Numbers 

button0.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '0' : actual_number + '0';
    actual_operation = actual_operation === null? '0' : actual_operation + '0';
    updateDisplay();
});

button1.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '1' : actual_number + '1';
    actual_operation = actual_operation === null? '1' : actual_operation + '1';
    updateDisplay();
});

button2.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '2' : actual_number + '2';
    actual_operation = actual_operation === null? '2' : actual_operation + '2';
    updateDisplay();
});

button3.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '3' : actual_number + '3';
    actual_operation = actual_operation === null? '3' : actual_operation + '3';
    updateDisplay();
});

button4.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '4' : actual_number + '4';
    actual_operation = actual_operation === null? '4' : actual_operation + '4';
    updateDisplay();
});

button5.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '5' : actual_number + '5';
    actual_operation = actual_operation === null? '5' : actual_operation + '5';
    updateDisplay();
});

button6.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '6' : actual_number + '6';
    actual_operation = actual_operation === null? '6' : actual_operation + '6';
    updateDisplay();
});

button7.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '7' : actual_number + '7';
    actual_operation = actual_operation === null? '7' : actual_operation + '7';
    updateDisplay();
});

button8.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '8' : actual_number + '8';
    actual_operation = actual_operation === null? '8' : actual_operation + '8';
    updateDisplay();
});

button9.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '9' : actual_number + '9';
    actual_operation = actual_operation === null? '9' : actual_operation + '9';
    updateDisplay();
});

//Operators
button_division.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '/' : actual_number + '/';
    actual_operation = actual_operation === null? '/' : actual_operation + '/';
    updateDisplay();
});

button_multiplication.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '*' : actual_number + '*';
    actual_operation = actual_operation === null? '*' : actual_operation + '*';
    updateDisplay();
});

button_sum.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '+' : actual_number + '+';
    actual_operation = actual_operation === null? '+' : actual_operation + '+';
    updateDisplay();
});

button_rest.addEventListener('click', function () {
    //if actual_number = null assing the valor if not concat the valor
    actual_number = actual_number === null ? '-' : actual_number + '-';
    actual_operation = actual_operation === null? '-' : actual_operation + '-';
    updateDisplay();
});

//Result
button_result.addEventListener('click', function(){
    result = getResult(actual_operation);
    updateDisplay(result);
});



