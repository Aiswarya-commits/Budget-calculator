let totalBudget = 0;
let totalExpense = 0;
let expenses = [];

function setBudget() {
  const budgetInput = document.getElementById("budgetInput").value;
  totalBudget = parseInt(budgetInput);
  updateDisplay();
}

function addExpense() {
  const expenseDetails = document.getElementById("expenseDetails").value;
  const expenseAmount = parseInt(document.getElementById("expenseAmount").value);

  if (expenseDetails && expenseAmount) {
    expenses.push({ detail: expenseDetails, amount: expenseAmount });
    totalExpense += expenseAmount;
    updateDisplay();
    displayExpenses();
  }
}

function updateDisplay() {
  document.getElementById("totalBudget").textContent = `$${totalBudget}`;
  document.getElementById("totalExpense").textContent = `$${totalExpense}`;
  document.getElementById("balanceAmount").textContent = `$${totalBudget - totalExpense}`;
}

function displayExpenses() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";
  expenses.forEach((expense, index) => {
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `
      <span>${expense.detail}: $${expense.amount}</span>
      <button onclick="editExpense(${index})">Edit</button>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(expenseItem);
  });
}

function editExpense(index) {
  const newAmount = prompt("Enter new amount:", expenses[index].amount);
  if (newAmount !== null) {
    totalExpense -= expenses[index].amount;
    expenses[index].amount = parseInt(newAmount);
    totalExpense += expenses[index].amount;
    updateDisplay();
    displayExpenses();
  }
}

function deleteExpense(index) {
  totalExpense -= expenses[index].amount;
  expenses.splice(index, 1);
  updateDisplay();
  displayExpenses();
}

function clearAll() {
  totalBudget = 0;
  totalExpense = 0;
  expenses = [];
  updateDisplay();
  displayExpenses();
}
window.onload = function() {
    const loginForm = document.querySelector('form');
    loginForm.onsubmit = function(event) {
        event.preventDefault();
        window.location.href = "start.html"; 
    };
};
