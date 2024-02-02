// login page js
function login (){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email=='1234@gmail.com' && password=='1234'){
        window.location.href='bank.html';
    } else {
        alert('please provide valid email and password')
    }
}

// js code for calculation

// let deposit = document.getElementById("deposit")
// let withdraw = document.getElementById("withdraw")
// let totalbalance = document.getElementById("totalbalance")
// let depositInput = document.getElementById("depositInput")
// let withdrawInput = document.getElementById("withdrawInput")
// function depositButton (){
//     let depositInput = document.getElementById("depositInput").value
//     let deposit = document.getElementById("deposit").innerText=depositInput
//     let a = parseInt(totalbalance)+parseInt(deposit)
//     totalbalance.innerText = a
    
// }
// function withdrawButton (){
//     let withdrawInput = document.getElementById("withdrawInput").value
//     let withdraw = document.getElementById("withdraw").innerText=withdrawInput
//     let b = parseInt(totalbalance)+parseInt(withdraw)
//     totalbalance.innerText = b
// }

let depositDisplay = document.getElementById("deposit");
let withdrawDisplay = document.getElementById("withdraw"); 
let totalBalanceDisplay = document.getElementById("totalbalance");
let depositInput = document.getElementById("depositInput");
let withdrawInput = document.getElementById("withdrawInput");

function depositButton() {
    let depositAmount = parseFloat(depositInput.value);
    let currentDeposit = parseFloat(depositDisplay.innerText.replace("$", ""));
    let currentBalance = parseFloat(totalBalanceDisplay.innerText.replace("$", ""));
    depositDisplay.innerText = "$" + (currentDeposit + depositAmount).toFixed(2);
    totalBalanceDisplay.innerText = "$" + (currentBalance + depositAmount).toFixed(2);
    depositInput.value = "";
}

function withdrawButton() {
    let withdrawAmount = parseFloat(withdrawInput.value);
    let currentWithdraw = parseFloat(withdrawDisplay.innerText.replace("$", ""));
    let currentBalance = parseFloat(totalBalanceDisplay.innerText.replace("$", ""));

    withdrawDisplay.innerText = "$" + (currentWithdraw + withdrawAmount).toFixed(2);
    totalBalanceDisplay.innerText = "$" + (currentBalance - withdrawAmount).toFixed(2);
    withdrawInput.value = "";
}




