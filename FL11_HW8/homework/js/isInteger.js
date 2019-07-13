const isInteger = (x) => {
  let check = (Math.floor(x) === x);
  return check;
}

isInteger(5.1);
