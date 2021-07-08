//https://www.codewars.com/kata/5266876b8f4bf2da9b000362
//6 kyu



//solution

function likes(n) {
  if (n == false){
    return 'no one likes this'
  }else if( n.length == 1) {
    return `${n[0]} likes this`
  }else if( n.length == 2) {
    return `${n[0]} and ${n[1]} like this`
  }else if( n.length == 3) {
    return `${n[0]}, ${n[1]} and ${n[2]} like this`
  }else if( n.length > 3) {
    let x = n.length - 2
    return `${n[0]}, ${n[1]} and ${x} others like this`
  }
}
