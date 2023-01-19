function BankAccount(customerName, balance = 0){
    this.customerName = customerName
    this.accountNumber = Date.now();
    this.balance = balance;


// this.deposit = function(amount){
//     // this.balance = this.balance+amount;
//     this.balance += amount;

// }


// this.withdraw = (amount)=>{
//    this.balance -= amount;

// }


}
const dageshAccount = new BankAccount("dageshwar")
const johnAccount= new BankAccount("john" ,6000)


BankAccount.prototype.deposit = function(amount){
    this.balance+=amount;
}
BankAccount.prototype.withdraw = function(amount){
    this.balance-=amount;
}
dageshAccount.deposit(1000)
console.log(dageshAccount)
dageshAccount.withdraw(500)
johnAccount.deposit(1000)
console.log(johnAccount)

