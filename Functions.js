// Functions

// Basics
function HelloWorld() {
  console.log("Hello World");
}

HelloWorld();

// Return Function
function sum(num1, num2) {
  let total = `${num1} + ${num2} = ${num1 + num2}`;
  return total;
}

console.log(sum(1, 3));

// Parameters
function person(FirstName, LastName) {
  console.log(`${FirstName} ${LastName}`);
}

person("Joshua", "Pautanes");

// Nested Function
function math(userNum1, userNum2) {
  function add(num1, num2) {
    console.log(num1 + num2);
  }

  add(userNum1, userNum2);
}

math(2, 2);

// Function inside object
let math = {
  sum(num1, num2) {
    return console.log(num1 + num2);
  },
  sub(num1, num2) {
    return console.log(num1 - num2);
  },
};

math.sum(1, 2);

// Arrow Function
let add = (num1, num2) => {
  console.log(num1 + num2);
};

let subtract = (num1, num2) => {
  console.log(num1 - num2);
};

add(1, 2);
subtract(2, 2);

// Calling Other Function
let hello = (userName) => {
  return "Hello " + userName;
};

let greet = (inputName) => {
  console.log(hello(inputName));
};

greet("Joshua");

// Function calling Function
let calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let checkPassed = (grade1, grade2, grade3) => {
  let totalGrade = calcAverage(grade1, grade2, grade3);

  if (totalGrade >= 75) {
    console.log(`You Passed Grade: ${totalGrade}`);
  } else [console.log(`You Failed Grade: ${totalGrade}`)];
};

checkPassed(80, 85, 100);
