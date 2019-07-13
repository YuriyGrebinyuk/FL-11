const reverseNumber = (number) => {
  let reversed = 0;
  while (number !== 0) {
    reversed = (reversed * 10) + (number % 10);
    number = (number - (number % 10)) / 10;
  }
  return reversed;
}

reverseNumber(-456);
