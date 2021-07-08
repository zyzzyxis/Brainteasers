// https://www.codewars.com/kata/5a1a9e5032b8b98477000004
// 7kyu

// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.


// solution

function evenLast(n) {
  let x = []
  if (n.length == 0){
    return 0
  }
  
  for (let i = 0 ; i < n.length; i++){
    if (i % 2 == 0) {
      x.push(n[i])
    } 
  }
  
  return x.reduce((a, b) => a + b, 0) * (n[n.length - 1])
}