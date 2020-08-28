let myAccount = {
    name: 'Manthan Gupta',
    expense: 0,
    income: 0
}

let addExpense = function (account, expense) {
    account.expense += expense
}

let addIncome = function (account, income) {
    account.income += income
}

let resetAccount = function (account) {
    account.expense = 0
    account.income = 0
}

let getSummary = function (account) {
    return `Account for ${account.name} has $${account.income - account.expense}. $${account.income} in income and $${account.expense} as expense.`
}

addIncome(myAccount,2000)
addExpense(myAccount,2.5)
addExpense(myAccount,160)
console.log(getSummary(myAccount))

resetAccount(myAccount)
console.log(getSummary(myAccount))