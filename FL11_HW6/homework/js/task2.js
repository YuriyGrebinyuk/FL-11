// Your code goes here
let a, b, c;
a = +prompt('Enter A-side length');
b = +prompt('Enter B-side length');
c = +prompt('Enter C-side length');

if (a + b > c && b + c > a && a + c > b) {
  if (a === b && b === c && a === c) {
    console.log('Equivalent triangle');
  } else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle');
  } else {
    console.log('Normal triangle');
  }
} else {
  console.log('Triangle doesn’t exist');
}
