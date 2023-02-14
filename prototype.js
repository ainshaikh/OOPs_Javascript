function BankAccount(customerName, balance = 0){
    this.customerName = customerName;
    this.BankAccount = Date.now();
    this.balance = balance;

    // this.deposit = (amount) =>{
    //     this.balance += amount;
    // }

    // this.withdraw = (amount){
    //     this.balance -= amount;
    // }


}

const ainAccount = new BankAccount('ain', 60);
const afreenAccount = new BankAccount('afreen');

BankAccount.prototype.deposit = function (amount) { // using prototype
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}
ainAccount.deposit(40);
afreenAccount.withdraw(2000);
console.log(ainAccount,afreenAccount);