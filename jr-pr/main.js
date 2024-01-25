const decreasteBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");

let count = 0;


increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}

//Random num generator

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randomNum
}


//If statements

let time = 10;

if(time != 12){
    console.log("good morning");
} console.log("good afternoon");

//Checked property

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = 'You are suscribed';
    } 
    else{
        subResult.textContent = 'You are NOT suscribed';
    }
   
}
