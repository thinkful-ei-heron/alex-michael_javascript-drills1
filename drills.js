'use strict';
function getYearOfBirth(age) {
  if (age < 0){
    throw new Error('Age can not be negative');
  }
  const yearOfBirth = 2019 - age;
  return yearOfBirth;
}
function createGreeting(name, age) {
  if(name === undefined || age === undefined){
    throw new Error('Arguments not valid');
  }
  if(typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  if(typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm ${age} years old.  I was born in ${yob}.`;
}
try {
  const greeting1 = createGreeting();
  console.log(greeting1);
} catch(e) {
  console.log(e);
}