
//Value function
function btnOne(){
    calc.text.value+='1';
    
}
function btnTwo(){
    calc.text.value+='2';
}
function btnThree(){
    calc.text.value+='3';
}
function btnFour(){
    calc.text.value+='4';
}
function btnFive(){
    calc.text.value+='5';
}
function btnSix(){
    calc.text.value+='6';
}
function btnSeven(){
    calc.text.value+='7';
}
function btnEight(){
    calc.text.value+='8';
}
function btnNine(){
    calc.text.value+='9';
}
function btnZero(){
    calc.text.value+='0';
}

// Operator function

function btnPlus(){
    calc.text.value+='+';
}
function btnMinus(){
    calc.text.value+='-';
}
function btnProduct(){
    calc.text.value+='*';
}
function btnDivide(){
    calc.text.value+='/';
}






function myResult() {
    calc.text.value=eval(calc.text.value);
    
}