const saveToLocalStorage = (expense) => {
    let expenses = getLocalStorage();

    if (!expenses.includes(expense)) {
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
    localStorage.setItem("Budget", budget)
}

const getBudgetLocalStorage = () => {
    let budgetData = localStorage.getItem("Budget");

    if (budgetData == null) {
        return [];
    }

    return JSON.parse(budgetData);
}

const removeFromLocalStorage = (expense) => {
    let expenses = getLocalStorage();

    let namedIndex = expenses.indexOf(expense);

    expenses.splice(namedIndex, 1);

    localStorage.setItem("Expenses", JSON.stringify(expenses));

}

export { saveToLocalStorage, getLocalStorage, saveBudgetToLocalStorage, getBudgetLocalStorage, removeFromLocalStorage };
