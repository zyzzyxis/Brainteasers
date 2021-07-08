// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
// 8kyu


// create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples
// basic_op('+', 4, 7)         # Output: 11
// basic_op('-', 15, 18)       # Output: -3



// solution
function basicOp(o, x, y)
{ 
  return eval( x + o.valueOf() + y )
}