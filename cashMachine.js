// check balance
// withdraw cash
// receipt
// change pin
// receipt
// cancel

let userBalance = 25;
let userPin = 1234;
let accountNumber = 987654321;
let userInput;
let newPin;

// alert("Hello")

const checkPin = () => {
    userInput = prompt("Please enter your pin:")
    console.log(userInput)
    if (userInput == userPin) {
        optionsFunction(1)
    } else {
        console.log("Please enter the correct pin")
    }
}

const optionsFunction = () => {
    userInput = prompt("Please choose an option: \n1: Check balance \n2: Withdraw cash \n3: Deposit \n4: Change pin \n5: Cancel")
    console.log(userInput)
    ////// Switch statement //////
    switch (true) {
        case isNaN(userInput):
            alert(`${userInput} is not a valid option. Please choose a valid option.`)
            optionsFunction();
        case userInput == 1:
            checkBalance();
            break;
        case userInput == 2:
            withdrawCash();
            break;
        case userInput == 3:
            deposit();
            break;
        case userInput == 4:
            changePin();
            break;
        case userInput == 5:
            cancel();
            break;
    }
    //////// Same as above but if else//////
    // if (userInput == 1) {
    //     checkBalance();
    // } else if (userInput == 2) {
    //     withdrawCash();
    // } else if (userInput == 3) {
    //     deposit();
    // } else if (userInput == 4) {
    //     cancel();
    // }
}

const checkBalance = () => {
    alert(`Your balance is £${userBalance}`)
    optionsFunction();
}

const withdrawCash = () => {
    userInput = prompt(`How much do you want to withdraw?`);
    if (isNaN(userInput)) {
        alert(`${userInput} is not valid amount. Please enter a valid amount.`)
        withdrawCash();
    } else if (userInput <= userBalance) {
        userBalance -= parseInt(userInput);
        alert(`You have successfully withdrawn £${userInput}. Your new balance is £${userBalance}`)
    }
    else {
        alert("Not enough, try again")
        withdrawCash();
    }

    userInput = prompt(`Would you like to do anything else? \n1: Go back to options \n2: Exit`);
    if (userInput == 1) {
        optionsFunction();
    } else if (userInput == 2) {
        cancel();
    }
}

const deposit = () => {
    userInput = prompt("How much do you want to deposit?");
    userBalance += parseInt(userInput);
    alert(`You have successfully deposited £${userInput}. Your new balance is £${userBalance}`)

    userInput = prompt(`Would you like to do anything else? \n1: Go back to options \n2: Exit`);
    if (userInput == 1) {
        optionsFunction();
    } else if (userInput == 2) {
        cancel();
    }
}

// Work on changing pin
const changePin = () => {
    userInput = prompt("Please enter your new pin?");
    if (userInput == userPin) {
        alert("You cannot use the same pin. Please try again using a new pin.");
        changePin();
    } else if (isNaN(userInput)){
        alert(`${userInput} is not number. Please enter a valid pin.`)
        changePin();
    } else if (userInput.length != 4){
        alert(`${userInput} is not a correct pin. Please enter a pin with 4 numbers`)
        changePin();
    } else {
        alert(`Pin successfully changed to ${userInput}`)
    }

    userInput = prompt(`Would you like to do anything else? \n1: Go back to options \n2: Exit`);
    if (userInput == 1) {
        optionsFunction();
    } else if (userInput == 2) {
        cancel();
    }
}

const cancel = () => {
    console.log(`Cancel`)
}

checkPin(1234);
//optionsPage(3);