class BankAccount{
    customerName;
    accountNumber;
    #balance = 0; // private property

    constructor(customerName, balance = 0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
        
    }

    deposit(amount){
        this.#balance += amount;
    }

    withdraw(amount){
        this.#balance -= amount;
    }

    set balance(amount){  //get a predefined method
        if(isNaN(amount)){
            throw new Error("Incorrect Input");
        }
        this.#balance = amount;
    }
    get balance(){  //set a predefined method in js
        return this.#balance;
    }
}

class SavingAccount extends BankAccount {

    transactionLimit = 50000;


    constructor(customerName,balance=0){
        super(customerName,balance)
    }


   

    personalLoan(amount){
        console.log("Taken Personal Loan Amount" +balance);
    }
    


}


class CurrentAccount extends BankAccount{

    transactionLimit = 100000;

    constructor(customerName,balance=0){

        super(customerName, balance)
    }

    #calculateInterest(amount){
        console.log("Calculating Interest....");
    }


    BusinessLoan(amount){
        this.#calculateInterest(amount);
        console.log("Taken Business Loan Amount...." + amount);
    }
}

const afreenAccount = new CurrentAccount("Afreen Shaikh", 10000)
// console.log(afreenAccount);
// afreenAccount.#balance = "hello";
// afreenAccount.setBalance(4000);
// afreenAccount.balance = 1234500;
afreenAccount.BusinessLoan(20120)
console.log(afreenAccount.balance);