// const BankAccount = class {   // this can also be written.
  class BankAccount{ // this is also can be written
  customerName;
  accountNumber;
  balance;

  constructor(customerName, balance = 0){
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance
  }

  deposit(amount){
    this.balance += amount;
  }

  withdarw(amount){
    this.balance -= amount;
  }

}

const ainAccount = new BankAccount("ain", 10000);
ainAccount.deposit(4000);
ainAccount.withdarw(5000);
console.log(ainAccount);



// hoisting - all the function and variables move on the top by default
// sayHello();
// function sayHello(){
//     console.log("Hi, How are you?");
// }
// sayHello();