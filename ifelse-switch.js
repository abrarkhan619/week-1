
// let age = 18;
// let country = "uk";

// if (age >= 18 && country == "UK"){
//     console.log("Yes I can serve you")
// } else {
//     console.log("You aren't old enough")
// }

// if (true || false) {
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// Switch case
// let topping = "chicken";

// switch(topping){
//     case "chicken":
//     case "cheese":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "meat":
//         console.log(`I don't mind having ${topping} on my pizza.`);
//         break;
//     default:
//         console.log(`${topping} should not be on my pizza.`)
// }

//Challenge 1
// let password = "hello"

// if (password.length < 8) {
//     console.log("Password is too short")
// } else {
//     console.log(password)
// }

//Challenege 2
// let num = 10

// // if ((num % 3 == 0) || (num % 5 == 0)){
//     console.log("This number is divisible by 3 or 5");
// } else {
//     console.log("Not divisible by 3 or 5");
// }

// let num = 1;
// switch (true){
//     case num % 3 == 0:
//     case num % 5 == 0:
//         console.log("This number is divisible by 3 or 5");
//         break;
//     default:
//         console.log("Not divisible by 3 or 5");
// }

// //Challenge 3
// let num = 15;

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("fizz buzz");
// }
// else if (num % 5 == 0){
//     console.log("buzz");
// }
// else if (num % 3 == 0){
//     console.log("fizz");
// }
// else {
//     console.log(num);
// }

//Challenege 4
// let num = 1002
// let stringNum = num.toString();

// const numReverse = stringNum.split('').reverse().join('');

// if (num == numReverse){
//     console.log("This is a palindrome");
// } else {
//     console.log("Not a palindrome")
// }

//Challenge 5
// let time = 18;
// let placeOfWork = "Picadilly";
// let townOfHome = "Cheethamhill";

// switch (true) {
//     case time < 8:
//         console.log(`I'm at ${townOfHome}`);
//         break;
//     case time >= 8 && time < 9:
//         console.log(`I'm commuting`);
//         break;
//     case time >= 9 && time < 17:
//         console.log(`I'm at ${placeOfWork}`);
//         break;
//     default:
//         console.log(`I'm at ${townOfHome}`)
// }

// //Challenge 6 - needs finishing completing

// let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh";

// for (let i = text.length; i > -1; i--) {
//     console.log(text[i])
//     if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
//         console.log("Last vowel found at index", i)
//         break
//     }
// }

// console.log("The index of the last vowel in the string is" + text.lastIndexOf(vowel))

//Random Challenege

// let age = 70;

// if (age < 18){
//     console.log("Ticket price: £8")
// } else if (age >= 18 && age < 60) {
//     console.log("Ticket price: £10.95")
// } else {
//     console.log("cket price: £7.50")
// }

// switch (true) {
//     case age < 18:
//         console.log("Ticket price: £8")
//         break;
//     case age >= 18 && age < 60:
//         console.log("Ticket price: £10.95")
//         break;
//     default:
//         console.log("Ticket price: £7.50")
// }