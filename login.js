// step1-addevent handler added with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
// step2- get the email address inside the email input field
// always remember to use .value to get text from an input feild.
const emailField = document.getElementById('event-handler');
const email = emailField.value;
// step3- get password
// 3-a- set id on the html element
// 3-b- get the element
// 3-c- get the value from the element
const passwordField = document.getElementById('password-handler');
const password = passwordField.value;
// do not verify email password on the client site
// step4- verify email and password
if(email==='whitedevil369@gmail.com' && password ==='devil'){
window.location.href='index2.html'
}
else{
    alert('Please Enter Your valid Information');
}
})