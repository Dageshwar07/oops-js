class User{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }


 static compareByAge(user1,user2){
   return user1.age - user2.age

}
}
const u1 = new User('dagesh',24)
const u2 = new User('pratik',23)

const user =[u1,u2]
user.sort(User.compareByAge)
console.log(user)