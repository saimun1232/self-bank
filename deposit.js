document.getElementById('btn-deposit').addEventListener('click',function(){
const depositField=document.getElementById('Deposit-input');
const newDepositAmountstring = depositField.value;
const newDepositAmount=parseFloat(newDepositAmountstring);
// step3- get the current deposit total
// for non input(element other than inpur, textarea) use innertext to get the text
const depositTotalElement = document.getElementById('deposit-amount');
const previousDepositTotalstring= depositTotalElement.innerText;
const previousDepositTotal =parseFloat(previousDepositTotalstring);
const currentDepositTotal= previousDepositTotal+newDepositAmount;
depositTotalElement.innerText= newDepositAmount;
depositTotalElement.innerText=currentDepositTotal;

// step-5get blance current total
const blanceTotalElement=document.getElementById('Blance-total');
const previousblanceTotalString=blanceTotalElement.innerText;
const previousblanceTotal=parseFloat(previousblanceTotalString);

// step-6- calsulate current total balance
const currentBalanceTotal=previousblanceTotal+newDepositAmount;
// set the blance total
blanceTotalElement.innerText=currentBalanceTotal;

// step7- depositfield value clear
depositField.value='';
})