// --- 1. Define four accounts (objects) ---
const user1 = { name: "Bitrebel", balance: 500000, currency: "NGN", type: "Savings" };
const user2 = { name: "Diana",   balance: 60000,  currency: "NGN", type: "Checking" };
const user3 = { name: "Nafisat", balance: 1000,   currency: "USD", type: "Savings" };
const user4 = { name: "Chinedu", balance: 200,    currency: "EUR", type: "Checking" };

// --- 2. Deposit function ---
function deposit(account, amount) {
  // add the amount to the account balance
  account.balance = account.balance + amount;
  console.log(`${account.name} deposited ${amount} ${account.currency}. New balance: ${account.balance}`);
}

// --- 3. Withdrawal function ---
function withdraw(account, amount) {
  if (account.balance >= amount) {
    account.balance = account.balance - amount;
    console.log(`${account.name} withdrew ${amount} ${account.currency}. New balance: ${account.balance}`);
  } else {
    console.log(`Withdrawal denied for ${account.name}: insufficient funds`);
  }
}

// --- 4. Transfer function (same-currency only) ---
function transfer(fromAccount, toAccount, amount) {
  if (fromAcc.currency !== toAcc.currency) {
    console.log("Transfer failed: currency mismatch");
    return; // stop here if currencies differ
  }
  if (fromAccount.balance >= amount) {
    fromAccount.balance -= amount;
    toAccount.balance += amount;
    console.log(`Transfer successful: ${amount} ${fromAccount.currency} from ${fromAccount.name} to ${toAccount.name}`);
  } else {
    console.log(`Transfer failed: ${fromAccount.name} has insufficient funds`);
  }
}

// --- 5. Transfer with conversion (bonus) ---
function transferWithConversion(fromAccount, toAccount, amount, rate) {
  // 'rate' means: 1 unit of fromAcc.currency = rate units of toAcc.currency
  if (fromAcc.currency === "EUR" && toAcc.currency === "USD") {
    // convert EUR -> USD using rate
    if (fromAcc.balance >= amount) {
      const converted = amount * rate;
      fromAcc.balance -= amount;
      toAcc.balance += converted;
      console.log(`Converted transfer: ${amount} ${fromAccount.currency} -> ${converted.toFixed(2)} ${toAccount.currency} from ${fromAccount.name} to ${toAccount.name}`);
    } else {
      console.log(`Transfer failed: ${fromAccount.name} has insufficient funds`);
    }
  } else {
    // if not this specific pair, fall back to normal transfer (which checks currency equality)
    transfer(fromAccount, toAccount, amount);
  }
}

// --- 6. Monthly maintenance: interest for Savings, fee for Checking ---
function monthlyMaintenance(account) {
  if (account.type === "Savings") {
    const interest = account.balance * 0.02; // 2%
    account.balance += interest;
    console.log(`${account.name}'s Savings earned interest: +${interest.toFixed(2)}. New balance: ${account.balance.toFixed(2)}`);
  } else if (account.type === "Checking") {
    const fee = 50;
    account.balance -= fee;
    console.log(`${account.name}'s Checking deducted fee: -${fee}. New balance: ${account.balance}`);
  }
}

// --- 7. Account status helper ---
function getStatus(account) {
  if (account.balance > 0) return "Active";
  if (account.balance === 0) return "Empty";
  return "Overdrawn";
}

// --- 8. Simulation of operations ---
// Deposits (add different amounts to two accounts)
deposit(user1, 100000); // user1 gets +100000
deposit(user2, 5000);   // user2 gets +5000

// Withdrawals (attempt two withdrawals)
withdraw(user2, 10000);     // should succeed or fail depending on balance
withdraw(user3, 2000);      // likely to fail (insufficient USD funds)

// Transfers
transfer(user1, user2, 50000); // NGN -> NGN (same currency) should work
transfer(user4, user3, 50);    // EUR -> USD (different) should print mismatch

// Bonus: convert EUR -> USD using a rate (1 EUR = 1.1 USD)
transferWithConversion(user4, user3, 50, 1.1);

// Monthly maintenance for all accounts
const accounts = [user1, user2, user3, user4];
accounts.forEach(account => monthlyMaintenance(acc));

// Find highest and lowest balances
const highest = accounts.reduce((a, b) => (a.balance > b.balance ? a : b));
const lowest  = accounts.reduce((a, b) => (a.balance < b.balance ? a : b));

console.log(`\nHighest balance: ${highest.name} with ${highest.balance.toFixed(2)} ${highest.currency}`);
console.log(`Lowest balance: ${lowest.name} with ${lowest.balance.toFixed(2)} ${lowest.currency}`);

// Final summary
console.log("\n--- Final Account Summary ---");
accounts.forEach(acc => {
  console.log(`${account.name} | ${account.type} | Balance: ${account.balance.toFixed(2)} ${account.currency} | Status: ${getStatus(account)}`);
});

