document.getElementById('deposite-button').addEventListener('click', function(){
    // Get the Value from the Deposite input field
    const depositeAmountField = document.getElementById('deposite-amount');
    const depositeAmountString = depositeAmountField.value;
    const depositeAmount = parseFloat(depositeAmountString);
    

    //Get the Current Deposite Amount
    const currentDepositeAmount = document.getElementById('deposite-total');
    const previousDepositeAmountString = currentDepositeAmount.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountString);
    

    // Calculate the deposite value
    const totalDepositeAmount = depositeAmount + previousDepositeAmount;
    currentDepositeAmount.innerText = totalDepositeAmount;

    // Get the Total Balance
    const currentTotal = document.getElementById('total-amount');
    const previousTotalAmountString = currentTotal.innerText;
    const previousTotalAmount = parseFloat(previousTotalAmountString);
    
    

    // Update Total Amount
    const totalAmount = depositeAmount + previousTotalAmount;
    currentTotal.innerText = totalAmount;



    // Clear the input field
    depositeAmountField.value = '';
})