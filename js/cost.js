function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const amount = parseFloat(inputText);
    // clear input value
    inputField.value = '';
    return amount;
};

document.getElementById('calculate-button').addEventListener('click', function () {
    // get food value
    const foodAmount = getInputValue('food-input');

    // get rent value
    const rentAmount = getInputValue('rent-input');

    // get clothes value
    const clothesAmount = getInputValue('clothes-input');

    // get expenses value
    const totalExpenses = document.getElementById('total-expense');
    const totalExpensesText = totalExpenses.innerText;
    const totalExpensesAmount = parseFloat(totalExpensesText);
    totalExpenses.innerText = clothesAmount + rentAmount + foodAmount;

    // get income value
    const incomeAmount = getInputValue('income-input');

    // get total balance
    const totalAmount = document.getElementById('balace');
    const totalAmountText = totalAmount.innerText;
    const totalBalace = parseFloat(totalAmountText);

    totalAmount.innerText = incomeAmount - totalExpenses.innerText;
});

document.getElementById('save-button').addEventListener('click', function () {
    const saveInput = document.getElementById('save-input');
    const saveInputText = saveInput.value;
    const saveAmount = parseFloat(saveInputText);
    console.log(saveAmount);

    // saving amount
    const saving = document.getElementById('saving-amount');
    const savingText = saving.innerText;
    const savingAmount = parseFloat(savingText);
    console.log(savingAmount);

    // clear saving field
    saveInput.value = '';
})