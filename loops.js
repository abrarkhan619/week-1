///// 1 /////
// const sandwichOrder = (topping1, topping2, topping3, topping4, topping5) => {
//     return (`Your toppings are: ${topping1}, ${topping2}, ${topping3}, ${topping4}, ${topping5}`);
// }
// console.log(sandwichOrder("chicken", "cheese", "tuna", "sweetcorn", "onions"));

///// 2 ////
// let randomValues = [1, 2, 3]
// console.log(randomValues)
// randomValues.unshift(-1, 0);
// console.log(randomValues)

///// 3 /////
// let str = ""

// for (let i = 0; i < 6; i++)

//// Activity /////
// let favFilms = ["film1", "film2", "film3", "film4", "film5"]
// favFilms.push("film6", "film7")
// console.log(favFilms)

// for (let i=0; i<favFilms.length; i++) {
//     console.log(favFilms[i])
// }

// // For loops run a finite or limited number of times

// //// while loops//////
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Heart";

// while (currentCard != "Spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random() * 4)];
// }

// console.log(currentCard);

///// Avtivity //////
// let films = ["film1", "film2", "Ghostbusters", "film4"];

// for (let i=0; i<films.length; i++){
//     console.log(films[i])
// }

// const filmCheck = () => {
//     if (films[2] == "Ghostbusters"){
//         console.log("yey it's ghostbusters")
//     } else {
//         console.log("booo, we want ghostbusters")
//     }
// }

// filmCheck();

///// Challenege 1 /////
// let arrayNumbers = []

// for (let i=1; i<1000; i++){
//     if (i % 3 == 0 || i % 5 == 0){
//         arrayNumbers.push(i) // pushes new array into empty arrayNumbers
//     }
// }

// const reducer = (accumulator, currentValue) => accumulator + currentValue; // Sum of the new arrayNumbers
// console.log(arrayNumbers.reduce(reducer));

///// Challenege 2 ////////
// let word = "hi"
// let text = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
// console.log("First occurence of the word 'hi' is at index " + text.indexOf("hi") + " and index of the kast occurence is at " + text.lastIndexOf("hi"));

///// Challenge 3 //////
// let text = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
// for (let i=0; i<text.length; i++){
//     console.log(text[i])
// }

///// Challenge 4 /////
// let text = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh";
// let prevChar = [] // stores only 1 character in this array
// var numberOfHi = 0

// for (let i = 0; i < text.length; i++) {
//     if (text[i] == "i" && prevChar == "h") {
//         console.log(`hi is at index ` + [i])
//         numberOfHi++
//     }
//     prevChar.pop(); // removes previous chracter from array
//     prevChar.push(text[i]) // pushes new character into array
// }
// console.log(`Hi appears ${numberOfHi} times`)


///// Activity new ////
// let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// let timeOfDay = 0800;
// let currentDay = "Saturday";

// while (dayOfWeek.indexOf(currentDay) <= 4 && timeOfDay >= 0000 && timeOfDay < 0801){ // best method
// while ((currentDay != "Saturday" && currentDay != "Sunday") && timeOfDay >= 0000 && timeOfDay < 0801) { // This works
// while ((currentDay != "Saturday" || currentDay != "Sunday") && timeOfDay >= 0000 && timeOfDay < 0801) {
// while ((currentDay == "Monday" || currentDay == "Tuesday" || currentDay == "Wednesday" || currentDay == "Thursday" || currentDay == "Friday") && timeOfDay >= 0000 && timeOfDay < 0801){ //this works

// while (currentDay != "Saturday" && timeOfDay >= 0000 && timeOfDay < 0801) {
    // console.log(currentDay);
    // currentDay = dayOfWeek[Math.floor(Math.random()*7)]
    // console.log(currentDay);
// }

// console.log("It's Weekend, heating all day")

