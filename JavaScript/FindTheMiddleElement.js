// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
// 7 kyu

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers (Haskell: a tuple).
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



// this was the initial solution I came up with, but I plan on updating this at a later date to be more streamlined. 
var gimme = function (a) {
  let z = Math.max(...a)
  let y = Math.min(...a)
  let f = a.find(e => e !== y && e !== z )
   return a.indexOf(f)
};