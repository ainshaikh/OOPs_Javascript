// function BankAccount(customerName, balance=0){
//     this.customerName=customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();

    
// }

// function CurrentAccount (customerName, balance=0){
//     this.customerName=customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
// }

// function SavingAccount (customerName, balance=0){
//     this.customerName=customerName;
//     this.balance = balance;
//     this.accountNumber = Date.now();
// }

// const ainAccount = new BankAccount("Ahnaf Shaikh", 1000);
// const lailaAccount = new BankAccount('Afrin Shaikh');


// BankAccount.prototype.deposit = function(amount) {
//     this.balance += amount;
// }

// BankAccount.prototype.withdraw = function(amount){
//     this.balance -= amount;
// }

// CurrentAccount.prototype.businessLoan = function(amount){
//     console.log('Taken Business Loan' + balance);
// }

// SavingAccount.prototype.personalLoan = function(amount){
//     console.log('Taken personal loan' + balance);
// }

// ainAccount.deposit(1990);
// console.log(ainAccount);

// const ahnafAccount = new SavingAccount('ain', 2000);
// ahnafAccount.personalLoan(10000);
// console.log(ahnafAccount);



class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName, balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance -= amount;
    }
}

class SavingAccount extends BankAccount{   // extends key copies all parents property and methods

    transactionLimit = 50000;

    constructor(customerName,balance=0){
        
        super(customerName,balance)   // super keys copies the data of parents  constructor


    }

    PersonalLoan(amount){
        console.log("Taken Personal Loan Amount" +this.balance);
    }
}

class CurrentAccount extends BankAccount{

    transactionLimit = 100000;

    constructor(customerName,balance=0){

        super(customerName, balance)
    }

    BusinessLoan(amount){
        console.log("Taken Business Loan Amount" +balance);
    }
}

const ainSavingAc = new SavingAccount("Ain", 2000);
// ainSavingAc.deposit(1000);
console.log(ainSavingAc);

// const ainCurrentAc = new CurrentAccount("Ain", 3000);
// console.log(ainCurrentAc);