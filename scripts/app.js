import { saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localstorage.js";

let injectBudgetHere = document.getElementById('injectBudgetHere');
let injectExpensesHere = document.getElementById('injectExpensesHere');
let updateBudgetInput = document.getElementById('updateBudget');
let updateBudgetBtn = document.getElementById('updateBudgetBtn');
let addExpenseNameInput = document.getElementById('addExpenseName');
let addExpenseAmountInput = document.getElementById('addExpenseAmount');
let addExpenseBtn = document.getElementById('addExpenseBtn');
let editExpenseNameInput = document.getElementById('editExpenseName');
let editExpenseBtn = document.getElementById('editExpenseBtn');

