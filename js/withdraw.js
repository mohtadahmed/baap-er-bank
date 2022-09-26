document.getElementById('withdraw-button').addEventListener('click', function(){
    // Get the Value from the Withdraw input field
    const withdrawAmountField = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    

    // Get the Current Withdraw Amount
    const currentWithdrawAmount = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = currentWithdrawAmount.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    

    // Calculate the Total Withdraw Amount
    const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    // currentWithdrawAmount.innerText = totalWithdrawAmount;


    // Get the Current Total Balance
    const currentTotal = document.getElementById('total-amount');
    const previousTotalAmountString = currentTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    

    // Update the Total Balance
    // const totalBalance = previousTotalAmount - withdrawAmount;
    // currentTotal.innerText = totalBalance;

    // Clear the input field
    withdrawAmountField.value = '';


    if(withdrawAmount <= previousTotalAmount){
        // Update the Total Balance
        const totalBalance = previousTotalAmount - withdrawAmount;
        currentTotal.innerText = totalBalance;
        // Calculate the Total Withdraw Amount
        currentWithdrawAmount.innerText = totalWithdrawAmount;
    }
    else{
        alert('go and income some money')
    }
    
})