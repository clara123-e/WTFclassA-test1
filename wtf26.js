// <!-- Class Work: Simple Banking System (No Functions or Classes)
// Create 3 accounts as objects.
// Each account should have: name, balance, and currency.
// Deposit money into the first account.
// Add any amount and update the balance.
// Withdraw money from the second account.
// If the balance is not enough, print "Insufficient funds for withdrawal".
// Transfer money from the third account to the first account.
// If the transfer is possible, update both balances.
// Otherwise, print "Transfer failed".
// Compare balances:
// Print out which account has the highest balance.
// Print "Two accounts are equal" if any two balances are the same.
// Account status check:
// If balance > 0 → print "Active"
// If balance === 0 → print "Empty"
// If balance < 0 → print "Overdrawn"
// 🎯 Bonus Challenge
// Add a 4th account.
// Transfer money from the richest account to the poorest account.
// Show all balances before and after the transfer. -->

const user1 = {
    name: "Bitrebel",
    balance: 500000,
    currency: "NGN"
};

const user2 = { 
    name: "Diana",
    balance: 60000,
    currency: "NGN"
};

const user3 = {
    name: "Nafisat",
    balance: 700000,
    currency: "NGN"
};

// <!-- deposit into user1 account -->
const depositAmount = 100000;
user1.balance = user1.balance + depositAmount;
console.log(user1.balance, "new balance");
