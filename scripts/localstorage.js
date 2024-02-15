const saveToLocalStorage = (expense) => {
    let expenses = getLocalStorage();

    if (!expenses.includes(expense.expenseName)) {
        expenses.push(expense);
    }

    localStorage.setItem("Expenses", JSON.stringify(expenses));

}

const saveBudgetToLocalStorage = (budget) => {
    let totalBudget = getLocalStorage();

    localStorage.setItem("Budget", )
}

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Expenses");

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);

}

const removeFromLocalStorage = (expense) => {
    let expenses = getLocalStorage();

    let namedIndex = expenses.indexOf(expense);

    expenses.splice(namedIndex, 1);

    localStorage.setItem("Expenses", JSON.stringify(expenses));

}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage};
