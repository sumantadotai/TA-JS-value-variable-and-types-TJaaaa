// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:
  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let number = Number(prompt("Enter a number?"));
if (number % 4 === 0) {
  alert("The Number is even");
} else {
  alert("The Number is odd");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let number1 = Number(prompt("Enter a number?"));
let number2 = Number(prompt("Enter a number?"));
if (number1 > number2) {
  alert(`The ${number1} is greater`);
} else {
  alert(`The ${number2} is greater`);
}

// 3. Convert the above code using`?` terniary operator

number1 > number2
  ? alert(`The ${number1} is greater`)
  : alert(`The ${number2} is greater`);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("Enter a house name");
if (houseName === "stark") {
  alert("Winter is coming");
} else if (houseName === "lannister") {
  alert("A lannister always pays his debt");
} else {
  alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator
houseName === "stark"
  ? alert("Winter is coming")
  : houseName === "lannister"
  ? alert("A lannister always pays his debt")
  : alert("All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("Enter the Month Name");
switch (monthName) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    alert("number of days in the month is 31");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    alert("number of days in the month is 30");
    break;
  case "February":
    alert("number of days in the month is 28");
    break;
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt("Enter the salary"));
let tax;
switch (true) {
  case salary <= 20000:
    tax = (salary * 10) / 100;
    alert(`Your in-hand amount is ${salary - tax}`);
    break;
  case salary <= 40000:
    tax = (salary * 20) / 100;
    alert(`Your in-hand amount is ${salary - tax}`);
    break;
  case salary > 50000:
    tax = (salary * 30) / 100;
    alert(`Your in-hand amount is ${salary - tax}`);
    break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = Number(prompt("Enter the marks"));
//if..else
if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks < 100 && marks > 80) {
  alert("Grade A");
} else if (marks < 80 && marks > 50) {
  alert("Grade B");
} else if (marks < 50 && marks > 30) {
  alert("Grade C");
} else {
  alert("Grade D");
}
//switch
switch (marks) {
  case marks > 100:
    alert("Marks can't be greater than 100");
    break;
  case marks < 100 && marks > 80:
    alert("Grade A");
    break;
  case marks < 80 && marks > 50:
    alert("Grade B");
    break;
  case marks < 50 && marks > 30:
    alert("Grade C");
    break;
  default:
    alert("Grade D");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = Number(prompt("What is the weather like outside?"));
//if..else
if (weather === "sunny") {
  alert("Wear a T-shirt");
} else if (weather === "rainy") {
  alert("Don't forget to take your raincoat");
} else if (weather === "hot") {
  alert("Get a hanky");
} else if (weather === "freezing") {
  alert("Get your sweeter on");
} else {
  alert("Not a valid input");
}
//switch
switch (weather) {
  case weather === "sunny":
    alert("Wear a T-shirt");
    break;
  case weather === "rainy":
    alert("Don't forget to take your raincoat");
    break;
  case weather === "hot":
    alert("Get a hanky");
    break;
  case weather === "freezing":
    alert("Get your sweeter on");
    break;
  default:
    alert("Not a valid input");
    break;
}
