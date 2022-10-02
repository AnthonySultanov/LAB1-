class bmi {
userheight;
userweight;

//constructor with 2 arguments
constructor(userheight,userweight)
{
    this.userheight=userheight;
    this.userweight=userweight;
}
//this is the method called calculatebmi which does the calculation for the users bmi
calculateBMI()
{

//this is the formula which is given
    let bmi = this.userweight/(this.userheight**2);
    //and this give the calculation for the formula
    return bmi;

}

}
let user1 = new bmi(30,150);
console.log(user1.calculateBMI());