// Ability to make their own descisions 
// Two worlds one has rocket fuel component the other plastic agolates 
// Build a program to conquer rocket fuel or agolates 
// Programming -- Sapatonia has aglet sets 
//                  Omacron Beta has Rocket Fuel 
// 1. Wash yourself in good information ... 
// 2. Exprimentation -- word with the information 
// 3. Bounded Abstract Solving skills -- Word Problems 
//    Practice solving lots of problems 
//    Some are too abstract 
//    Be more motivated and work harder 
// Take Patrick to moms house 
const rocketFuelReserves = 2000;
const agletSets = 2500;

let targetOfConquest;
let resourceConstraint; 
// if Statement is an Expression -- unit of code that does something 
// {BLOCK statement}<-- single statement 
// Expressions resolve to a vlue 
// is (expression) statement 
// if (expression) statement else statement 
// if (expression)
//     statement 
// else 
//      statement -- needs to resolve to a true or false 
//  (this is true) conditional truthy -- value interpereted as true 
//  Memorize whats falsy // null, undefined, o, NaN, '', false             
if (rocketFuelReserves < agletSets) {
   resourceConstraint = "rocket fuel";
} else {
   resourceConstraint = "aglet";
} 

if (resourceConstraint === "rocket fuel") {
  targetOfConquest = "Omacron Beta";
} else {
  targetOfConquest = "Sapatonia";
}
//
// JS is Easy Part 6: Functions
//
// 
// 
