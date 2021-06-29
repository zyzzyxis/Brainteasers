
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 8kyu

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(o, x, y)
{ 
  return eval( x + o.valueOf() + y )
}

// eval can run mathmatical equations, needed to turn o from a string to an operation. used .valueOf() to change it.
