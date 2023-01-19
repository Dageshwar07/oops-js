// ///////////inheritance with constructor function///////////

// function BankAccount(customerName, balance = 0){
//     this.customerName = customerName
//     this.accountNumber = Date.now();
//     this.balance = balance;

// }
// BankAccount.prototype.deposit = function(amount){
//     this.balance+=amount;
// }
// BankAccount.prototype.withdraw = function(amount){
//     this.balance-=amount;
// }

// function SavingAccount(customerName ,balance=0){
//     BankAccount.call(this,customerName,balance)
//     this.transactionLimit = 10000;

// }
// SavingAccount.prototype = Object.create(BankAccount.prototype)
//
//  SavingAccount.prototype.takeperloan = function(amount){
//         console.log('taking person loan'+this.amount)
//         }


// function currentAccount(customerName ,balance=0){
//     BankAccount.call(this,customerName,balance )

//     this.transactionLimit = 50000;

// }
// currentAccount.prototype =Object.create(BankAccount.prototype) 
// currentAccount.prototype.takeloan = function(amount){
// console.log('taking bussiness loan'+this.amount)
// }


// const dageshAccount = new SavingAccount("dageshwar")
// const johnAccount= new currentAccount("john" ,6000)


// dageshAccount.deposit(1000)
// console.log(dageshAccount)
// dageshAccount.withdraw(500)

// johnAccount.deposit(1000)
// console.log(johnAccount)
// johnAccount.withdraw(2000)
/////////////////////////////////////////////////////////////////////////

// //////inheritance with classes////////////////////////////
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
class CurrentAccount extends BankAccount{
    transactionLimit = 50000;
    constructor(customerName, balance=0)
    {
        super(customerName,balance)

    }
    takeloan = function(amount){
        console.log('taking bussiness loan'+amount)
        }
}

class SavingAccount extends BankAccount{
    transactionLimit = 10000;
    constructor(customerName, balance=0)
    {
        super(customerName,balance)

    } 
    takeperloan = function(amount){
        console.log('taking personal loan'+amount)
        }
}

const dageshAccount = new SavingAccount("dagesh",2000)
dageshAccount.takeperloan(400)

dageshAccount.deposit(1000);
console.log( dageshAccount)
dageshAccount.withdraw(2000)

