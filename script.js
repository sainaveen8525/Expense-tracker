const balance = document.querySelector('.your-balance');
const income = document.querySelector('.income');
const expense = document.querySelector('.expense');
const inputText = document.querySelector('.description');
const inputAmount = document.querySelector('.amount');
const transactionList = document.querySelector('.list');
const form = document.querySelector('#transaction');

const sampleData = [
  { id: 1, text: 'Salary', amount: 25000 },
  { id: 2, text: 'EMI', amount: -20000 },
  { id: 3, text: 'Freelance', amount: 5000 }
];

let transactions = JSON.parse(localStorage.getItem('transactions')) || sampleData;

function generateID() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `${transaction.text} <span class="amount">${sign}₹${Math.abs(
    transaction.amount
  ).toLocaleString('en-IN')}</span><button class="delete" onclick="removeTransaction(${transaction.id})">x</button>`;
  transactionList.appendChild(item);
}

function updateValues() {
  const amounts = transactions.map((t) => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  const inc = amounts.filter((a) => a > 0).reduce((acc, a) => acc + a, 0);
  const exp = amounts.filter((a) => a < 0).reduce((acc, a) => acc + a, 0);

  balance.textContent = `₹${total.toLocaleString('en-IN')}`;
  income.textContent = `₹${inc.toLocaleString('en-IN')}`;
  expense.textContent = `₹${Math.abs(exp).toLocaleString('en-IN')}`;
}

function init() {
  transactionList.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function removeTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  init();
}

function handleSubmit(e) {
  e.preventDefault();
  const text = inputText.value.trim();
  const amount = +inputAmount.value.trim();

  if (text === '' || isNaN(amount) || amount === 0) {
    alert('Please enter a valid description and non-zero amount');
    return;
  }

  const transaction = { id: generateID(), text, amount };
  transactions.push(transaction);
  init();

  inputText.value = '';
  inputAmount.value = '';
}

window.removeTransaction = removeTransaction;
form.addEventListener('submit', handleSubmit);

window.addEventListener('load', init);