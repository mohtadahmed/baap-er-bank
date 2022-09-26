document.getElementById('deposite-button').addEventListener('click', function(){
    // Get the Value from the Deposite input field
    const depositeAmountField = document.getElementById('deposite-amount');
    const givenDepositeAmount = depositeAmountField.value;
    

    //Get the Current Deposite Amount
    const currentDepositeAmount = document.getElementById('deposite-total');
    const depositeAmountValue = currentDepositeAmount.innerText;
    currentDepositeAmount.innerText = givenDepositeAmount;
    
})