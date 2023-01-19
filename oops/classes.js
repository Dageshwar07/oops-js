// const BankAccount = class{

class BankAccount{
    customerName;
    accountNumber;
    balance = 0;

constructor(customerName, balance=0){

    this.customerName = customerName;
    this.accountNumber = Date.now()
    this.balance = balance;
}
deposit(amount){
    this.balance+=amount;
}
withdraw=function(amount){
    this.balance-=amount;
}

}

const dageshAccount = new BankAccount("dagesh",2000)
dageshAccount.deposit(1000);
dageshAccount.withdraw(3000)
console.log( dageshAccount)

// const f = function(){

// }
// function f(){

// }
