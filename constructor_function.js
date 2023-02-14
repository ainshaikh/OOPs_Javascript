function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function(amount){
        this.balance += amount;
    };

    this.withdraw = (amount)=>{
        this.balance -=amount;
    };
}
const accounts = [];

// const ainAccount = new BankAccount('Afreen Shaikh', 5000);
// const afreenAccount = new BankAccount('ain');   
// console.log(ainAccount,afreenAccount);
// console.log(ainAccount.balance);

// ainAccount.deposit(20000);
// console.log(ainAccount);
// ainAccount.withdraw(234);
// console.log(ainAccount);

const accountForm = document.querySelector('#accountForm');
const accountName = document.querySelector('#accountName');
const initialBalance = document.querySelector('#initialBalance');

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const balance = document.querySelector('#balance');

accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = new BankAccount(accountName.value, +initialBalance.value);

    accounts.push(account);
    console.log(accounts);


   
});

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const account = accounts.find((account) => account.accountNumber === +accountNumber.value);
    account.deposit(+amount.value);
    console.log(accounts);
})

