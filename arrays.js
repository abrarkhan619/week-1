//// Example ////
// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// console.log(coffeeOrder);
// console.log("Old order: ", coffeeOrder)
// coffeeOrder[1] = "Harry - random" // replaces item 2 with this
// console.log("New order: ", coffeeOrder)
// console.log(coffeeOrder.length) // works out number of items
// console.log(coffeeOrder[1].length) // works out length of item number 2
// coffeeOrder.push("Donna - espresso") // .push adds item to end of list
// coffeeOrder.pop(); // removes last item in the list
// .map


//// Activity ///
// let favouriteSongs = [
//     "Song 1",
//     "Song 2",
//     "Song 3"
// ];

// console.log(favouriteSongs);
// console.log(favouriteSongs[2]);

//// Activity 1 ///
// let favouriteSites = [
//     "facebook",
//     "twitter",
//     "instagram"
// ]

// console.log(favouriteSites);
// favouriteSites.push("tumblr", "tiktok");
// favouriteSites.pop();
// console.log(favouriteSites);

//// Activity 2 /////
// let favouriteSports = [
//     "football",
//     "cricket",
//     "badminton",
//     "swimming"
// ]

// let newSports = favouriteSports.map(sport => sport + "!") // .map method used to create a new array
// console.log(newSports)

// favouriteSports.shift() // removes first element of the array
// favouriteSports.unshift("boxing", "ufc") // adds items to start of the array
// favouriteSports.slice(1,2); // .slice takes out a portion of array but DOESN'T permanently update it
// console.log(favouriteSports.slice(1, 3)); .slice only updates it at that moment in the code
// favouriteSports.splice(2, 0, "formula 1") // inserts at index 2
// favouriteSports.splice(3, 2, "hockey", "golf") // replaces 2 items at index 3
// console.log(favouriteSports);

//// Challenege 2 ///
// Arrays can be created using 2 different methods. Using array literals as we have been doing above
// or using arracy consturctors as you can see below
// let favouriteSports = new Array (
//     "football",
//     "cricket",
//     "badminton",
//     "swimming"
// )
// console.log (favouriteSports)

///// Challenege 3 /// using .map to create a new array from old array
// let randomNumbers = [1, 2, 3, 4];
// let newNumbers = randomNumbers.map(num => num * 2);
// console.log(newNumbers);

