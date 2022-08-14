console.clear();

var num1 = 10;
var num2 = 20;
var num3 = 30;
var sum = num1 + num2 + num3;

console.log(typeof num1);

console.log(num1);

console.log(sum);

//camel case )Recommended for JS
var firstName; //first letter will be small case

var firstName; //Pascal case

var first_Name; //snake case

// Rules to name variables

var myVariable, myVariable$; //variable can include with letters, digits, _, and $
//variable cannot start with digit but $ and _ can be

//variable that used in case sensitive
var x, X;

var var1;

var n1 = 10;
var dividebyzero = n1 / 0;
console.log(dividebyzero);

var mulByString = n1 * "A";
console.log(mulByString);

var num1 = "10.678"; //typeof(num1) = string
console.log(typeof num1);

// convert string to integer "parseInt()"
console.log(parseInt(num1));

console.log(typeof parseFloat(num1));

console.log(parseFloat(num1));

var n1 = 10;
var n2 = 20;

console.log(n1.toString() + n2.toString()); //1020

var myFirstString = ' I love to study "Javascript"';

var mySecondString = "We will learn together 'JavaScript'";

console.log(myFirstString);
console.log(mySecondString);

var myThirdString = 'This is my "testing" string';
console.log(myThirdString);
