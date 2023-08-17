// step-1 add click event to the deposit button

const depositBtn = document.getElementById('deposit-btn');

depositBtn.addEventListener('click', function(){

    // step-2 get the deposit input value and convert into number type
    const depositNew = document.getElementById('deposit-new');
    const depositNewValue = parseFloat(depositNew.value);

    // step-3 clear the input field after click 
    depositNew.value = '';

     // step-4 get the deposit added value and convert into number type
     const depositAdded = document.getElementById('deposit-added');
     const depositAddedValue = parseFloat(depositAdded.innerText);
     
    //  step-5 added the new deposit value to the exist deposit value
    depositAdded.innerText = depositAddedValue + depositNewValue; 

    // step-6 get the total balance and add the deposit value with the exist balance
    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);

    balance.innerText = balanceValue + depositNewValue;
    
})


// withdraw button 
// withdraw button 
// withdraw button 
// step-1 add click event to the withdraw button

const withdrawBtn = document.getElementById('withdraw-btn');

withdrawBtn.addEventListener('click', function(){

    // step-2 get the withdraw input value and convert into number type
    const withdrawNew = document.getElementById('withdraw-new');
    const withdrawNewValue = parseFloat(withdrawNew.value);

    // step-3 clear the input field after click 
    withdrawNew.value = '';

     // step-4 get the withdraw added value and convert into number type
     const withdrawAdded = document.getElementById('withdraw-added');
     const withdrawAddedValue = parseFloat(withdrawAdded.innerText);
     
    //  step-5 added the new withdraw value to the exist withdraw value
    withdrawAdded.innerText = withdrawAddedValue + withdrawNewValue; 

    // step-6 get the total balance and add the withdraw value with the exist balance
    const balance = document.getElementById('balance');
    const balanceValue = parseFloat(balance.innerText);

    balance.innerText = balanceValue - withdrawNewValue;
    
})