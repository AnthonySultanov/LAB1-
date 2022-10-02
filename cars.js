class vehicle{

carmake;
carmodel;
caryear;


//constructor with 3 arguments
constructor(carmake,carmodel,caryear)
{
    this.carmake=carmake;
    this.carmodel=carmodel;
    this.caryear=caryear;
}

//this is the method called information which writes the info into console
information()
{
    console.log(`The car was made by ${this.carmake} The model is ${this.carmodel} and the year is ${this.caryear}`);
}

}
//this is the object
let car1 = new vehicle("Ford","Mustang",1969);
car1.information();
//this is a class called cars
class cars extends vehicle{
//constructor with 4 arguments
    constructor(carmake,carmodel,caryear,doors)
    {
        super(carmake,carmodel,caryear);
        this.doors = doors;
    }
//this writes the number of doors to console
    information()
    {
        super.information();
        console.log(`car has ${this.doors} doors`);
    }
}
//this is the object
let car2 = new cars("Ford","Mustang",1969,2);
car2.information();


