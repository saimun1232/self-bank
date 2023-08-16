// add event handler with the withdraw button
// step -1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('Withdraw-input');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount=parseFloat(newWithdrawAmountString);

const withdrawTotalElement = document.getElementById('Withdraw-amount');
const previousWithdrawTotalstring= withdrawTotalElement.innerText;
const previousWithdrawTotal =parseFloat(previousWithdrawTotalstring);
const currentWihdrawTotal= previousWithdrawTotal+newWithdrawAmount;
withdrawTotalElement.innerText=currentWihdrawTotal;
// withdrawTotalElement.innerText=newWithdrawAmount;

const blanceTotalElement=document.getElementById('Blance-total');
const previousblanceTotalString=blanceTotalElement.innerText;
const previousblanceTotal=parseFloat(previousblanceTotalString);

const currentBalanceTotal=previousblanceTotal-newWithdrawAmount;

blanceTotalElement.innerText=currentBalanceTotal;

withdrawField.value='';
})