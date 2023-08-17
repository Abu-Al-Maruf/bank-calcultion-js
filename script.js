// 1 get the input value using function
function getInputValue(input){
    const inputId = document.getElementById(input);
    const inputIdValue = parseFloat(inputId.value);
    inputId.value = '';
    return inputIdValue;
}
// 3 get the Deposit value using function

function getDepositValue(deposit){
    const depositId = document.getElementById(deposit);
    const depositIdValue = parseFloat(depositId.innerText);
    return depositIdValue;
}


// 6 set the deposit value input value and deposit value together
function setDepositValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




document.getElementById('deposit-btn').addEventListener('click', function(){

    // 2 get the deposit input value when click the deposit button
    const newInputValue = getInputValue('deposit-new');

    // 4 get the deposit value when click the deposit button
    const newDepositValue = getDepositValue('deposit-added');
    // 5 deposit value and input deposit value added together

    const newDepositAddedValue = newDepositValue + newInputValue;

    // 7 set the deposit value using function
    setDepositValue('deposit-added', newDepositAddedValue)

    // 8 get balance total and added new deposit value

     const balanceTotal = getDepositValue('balance');
     const newBalanceTotal = balanceTotal + newDepositAddedValue;
     setDepositValue('balance', newBalanceTotal);
    
    
    
    


    
})

