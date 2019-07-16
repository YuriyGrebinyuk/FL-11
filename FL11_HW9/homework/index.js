// Your code goes here
// Task 0
const getNumbers = (string) => {
  let arr = [...string];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    parseInt(arr[i], 10) ? result.push(+arr[i]) : '';
  }
  return result;
}


// Task 1
const findTypes = (...args) => {
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    let key = typeof args[i];
    obj[key] ? obj[key] +=1 : obj[key] = 1;
  }
  return obj;
}


// Task 2
const executeforEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
}


// Task 3
const mapArray = (arr, cb) => {
  let result = [];
  executeforEach(arr, el => {
    result.push(cb(el));
  });
  return result;
}


// Task 4
const filterArray = (arr, cb) => {
  const result = [];
  executeforEach(arr, el => {
    if (cb(el)) {
      result.push(el);
    }
  });
  return result;
}


// Task 5
const showFormattedDate = (date) => {
  const monthFormatter = new Intl.DateTimeFormat('en-us', { month: 'short' });
  let month = monthFormatter.format(date);
  let day = date.getDate();
  let year = date.getFullYear();
  const time = `Date: ${month} ${day} ${year}`;
  return time;
}


// Task 6
const canConvertToDate = (date) => {
  let check = new Date(date) !== 'Invalid Date' && !isNaN(new Date(date));
  return check;
}


// Task 7
const daysBetween = (firstDate, secondDate) => {
  const hours = 24;
  const minutes = 60;
  const seconds = 60;
  const milliseconds = 1000;
  let check = Math.round((secondDate - firstDate) / (hours * minutes * seconds * milliseconds));
  return check;
}


// Task 8
let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
]

const getAmountOfAdultPeople = (data) => {
  const userAge = 18;
  let count = 0;
  let currentYear = new Date().getFullYear();

  filterArray(data, function(person) {
    let birthdayYear = new Date(person.birthday).getFullYear();
    let ageCheck = currentYear - birthdayYear > userAge;
    ageCheck ? count++ : '';
  });
  return count;
}


// Task 9
const keys = (obj) => {
  let objectKeys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objectKeys.push(key);
    }
  }
  return objectKeys;
}


// Task 10
const values = (obj) => {
  let keyValues = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyValues.push(obj[key]);
    }
  }
  return keyValues;
}
