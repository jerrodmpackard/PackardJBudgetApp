const saveToLocalStorage = (expense) => {
    let expenses = getLocalStorage();
    console.log(expenses);
    console.log(expense.expenseName);

    let includes;

    expenses.map(item => {
        if (item.includes(expense.expenseName)) {
            includes = true;
        }
    })

    if (!includes) {
        expenses.push(expense);
    }

    localStorage.setItem("Expenses", JSON.stringify(expenses));

}


const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Expenses");

    if (localStorageData == null) {
        return [];
    }

    return JSON.parse(localStorageData);

}

const saveBudgetToLocalStorage = (budget) => {
    let totalBudget = getBudgetLocalStorage();

    localStorage.setItem("Budget", totalBudget)
}

const getBudgetLocalStorage = () => {
    let budgetData = localStorage.getItem("Budget");

    if (budgetData == null) {
        return [];
    }

    return budgetData;
}

const removeFromLocalStorage = (expense) => {
    let expenses = getLocalStorage();

    let namedIndex = expenses.indexOf(expense);

    expenses.splice(namedIndex, 1);

    localStorage.setItem("Expenses", JSON.stringify(expenses));

}

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
