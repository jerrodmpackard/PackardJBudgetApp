import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let injectBudgetHere = document.getElementById('injectBudgetHere');
let injectExpensesHere = document.getElementById('injectExpensesHere');
let updateBudgetInput = document.getElementById('updateBudgetInput');
let updateBudgetBtn = document.getElementById('updateBudgetBtn');
let addExpenseNameInput = document.getElementById('addExpenseNameInput');
let addExpenseAmountInput = document.getElementById('addExpenseAmountInput');
let addExpenseBtn = document.getElementById('addExpenseBtn');
let editExpenseNameInput = document.getElementById('editExpenseNameInput');
let editExpenseBtn = document.getElementById('editExpenseBtn');

// updateBudgetBtn.addEventListener('click', () => {
//     saveToLocalStorage(updateBudgetInput.value);
//     updateBudgetInput.value = '';

//     displayValues();
// });


addExpenseBtn.addEventListener('click', () => {

    let newExpense = {
        expenseName: addExpenseNameInput.value,
        expenseAmount: addExpenseAmountInput.value
    }

    saveToLocalStorage(newExpense);

    displayValues();
});

const displayValues = () => {
    let expenses = getLocalStorage();

    injectExpensesHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');
    tableHeaders.className = ''

    let nameHeader = document.createElement('th');
    nameHeader.textContent = 'Expense Name';
    nameHeader.className = 'border'

    let amountHeader = document.createElement('th');
    amountHeader.textContent = 'Amount';
    amountHeader.className = 'border';

    injectExpensesHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(nameHeader);
    tableHeaders.append(amountHeader);

    expenses.map(expense => {

        let row = document.createElement('tr');

        let expenseName = document.createElement('td');
        expenseName.textContent = expense.expenseName;
        expenseName.className = 'border';

        let expenseAmount = document.createElement('td');
        expenseAmount.textContent = expense.expenseAmount;
        expenseAmount.className = 'border';

        table.append(row);
        row.append(expenseName);
        row.append(expenseAmount);

    });

}

displayValues();

editExpenseBtn.addEventListener('click', () => {
    removeFromLocalStorage(editExpenseNameInput.value);

    displayValues();
});