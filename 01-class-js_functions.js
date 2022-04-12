// Class code examples

// Declaration with parameters
function greetStudent(firstName, lastName) {
    console.log(`¡Hola ${firstName} ${lastName}!`)
    return "I can finally return now!";
}

// Invokation with arguments
greetStudent("Miguel", "Delgado");
greetStudent("Iñigo", "M");
greetStudent("Inés", "García");
greetStudent("Sara");
// console.log("return value form my function", greetStudent("Sara"));

// set a DEFAULT parameter value in case of it not being passed
function greetStudent2(firstName="Student", lastName="") {
    console.log(`¡Hola ${firstName} ${lastName}!`)
}

greetStudent2();
greetStudent2("Marco");
greetStudent2("Marco", "Santo");

function isMultiple(number1, number2){
 /* const rest = number1 % number2  // a number: the remainder of the divison
    const result = remainder === 0    // a boolean: th e result of the === comparison

    return result;
 */
    return (number1 % number2 === 0 )// I want to return a boolean that tells m if they are multiples
}

/**
 * Create a function doTheMath(num1, sign, num2)
 * that will return the result of the mathematical operations of num1 operator num2.
 * Allowed operators (signs) are +, -, *, /, %, **.
 * Hint: you can use the switch statement.
 */

function doTheMath(num1, sign, num2){
    switch(sign){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if(num2 === 0){
                 return "Division by zero not allowed";
            } else {
            return num1 / num2;
            }
        case '%':
            return num1 % num2;
        case '**':
           return  num1 ** num2;
        default:
            return "The sign is not valid";
    }
}

console.log("let's do the math: ", doTheMath(2, '/', 3));