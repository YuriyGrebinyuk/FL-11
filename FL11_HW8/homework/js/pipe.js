const addOne = (x) => {
  return x + 1;
}

const pipe = (number, ...args) => {
  let result = number;
  for (let arg of args) {
    result = arg(result);
  }
  return result;
}

pipe(1, addOne, addOne);
