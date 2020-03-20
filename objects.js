////// Activity 1 /////
const person = {
    name: "John",
    age: 30,
    legs: 4,
    city: "London",
    pets: "horse",
    favSports: [
        "Football",
        "Cricket",
        "Boxing"
    ],

    legRemoval(){
        return (this.legs - 2);
    },

    sayHi(){
        if(this.name){
            return (`Hello, my name is ${this.name}`)
        }
    }

};
console.log(person.legRemoval()); // removes 2 legs from person calls the function
console.log(person.sayHi()) // calls Hi function

console.log(person.name)
console.log(person["name"]) // another way to do it

person.favSongs = ["song1", "song2", "song3"] // To add key and values to person object
person["favSongs"] = ["song1", "song2", "song3"] // Other method to add key and values
console.log(person.favSongs[2]) // calling index 2 from favSongs of person



//// Activity 2 ////
let day = "Saturday";
let alarm;

const alarmToSet = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

if (day == "Saturday" || day == "Sunday"){
    alarm = alarmToSet.weekendAlarm;
    console.log(alarmToSet.weekendAlarm);
} else {
    alarm = alarmToSet.weekdayAlarm;
    console.log(alarmToSet.weekdayAlarm);
}

// Below put above if else into a function
const alarmFuntion = (day) => {
    if (day == "Saturday" || day == "Sunday"){
        alarm = alarmToSet.weekendAlarm;
        console.log(alarmToSet.weekendAlarm);
    } else {
        alarm = alarmToSet.weekdayAlarm;
        console.log(alarmToSet.weekdayAlarm);
    }
}

alarmFuntion("Monday");
alarmFuntion("Saturday");
alarmFuntion("Sunday");


/////// Activity 3 //////
const pet = {
    name: "Smith",
    typeOfPet: "horse",
    age: 33,
    colour: "black",
    energy: 40,
    health: 100,
    hunger: 40,
    thirst: 20,
    toilet: false,

    eat(){
        if(this.hunger < 50){
            return(`${this.name} is eating.`);
            this.hunger = this.hunger + 20;
        } else {
            return(`${this.name} is not hungry`)
        }
    },
    drink(){
        if(this.thirst < 50){
            return(`${this.name} needs to drink.`)
        } else {
            return(`${this.name} is not thirsty.`)

        }
    },
    energyLevel(){
        if(this.energy < 20){
            return(`${this.name} needs to sleep.`);
        } else if (this.energy >= 20 && this.energy <= 80){
            return(`${this.name} wants to play.`);
        } else {
            return(`${this.name} needs to train.`)
        }
    },
    toilet(){
        if(this.toilet == true){
            return(`${this.name} needs to go toilet.`);
        } else {
            return(`${this.name} does not need to go toilet.`);
        }
    }
}
console.log(pet.eat());




/////// Activity 4 ////////
// const coffeeShop = {
//     branch: "Manchester",
//     drinks: ["coffee1: £2.50", "coffee2: £3", "coffee3: £5"],
//     food: 
// }