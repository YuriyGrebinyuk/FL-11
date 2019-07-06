// Your code goes here
let a1, a2, b1, b2, c1, c2, midX, midY, midCheck;
const divider = 2;
a1 = +prompt('Enter coordinates for point A1');
a2 = +prompt('Enter coordinates for point A2');
b1 = +prompt('Enter coordinates for point B1');
b2 = +prompt('Enter coordinates for point B2');
c1 = +prompt('Enter coordinates for point C1');
c2 = +prompt('Enter coordinates for point C2');
midX = (a1 + b1) / divider;
midY = (a2 + b2) / divider;
midCheck = midX === c1 && midY === c2;
console.log(midCheck);
