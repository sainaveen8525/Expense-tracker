# Expense Tracker

A small web-based Expense Tracker to add, list, and remove transactions and view current balance, total income, and total expense. Data persists in the browser using LocalStorage.

## Features

- Add income and expense transactions
- Remove transactions
- Shows current balance, total income, and total expense
- Persists transactions in `localStorage`

## Files

- `index.html` — UI markup
- `style.css` — styles
- `script.js` — application logic (add/remove, totals, persistence)

## Usage

1. Open `index.html` in your browser.
2. Add a description and amount. Use a negative amount for expenses (e.g. `-1500`) or positive for income (`25000`).
3. Click "Add Transaction" to add it. Click the `x` button on any transaction to remove it.

## Development

No build tools required — just open the files directly. To run a simple static server (optional):

```powershell
# from project root
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

## Notes

- Transactions are saved to browser `localStorage` under the `transactions` key.
- Currency formatting uses en-IN locale and displays the ₹ symbol.

If you'd like, I can also add tests, improve accessibility, or wire up a small backend to sync data across devices.

## Live Demo

Try the hosted demo: https://expense-tracker-naveen.vercel.app/