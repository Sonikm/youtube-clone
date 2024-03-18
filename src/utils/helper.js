import { characters, nameList } from "./constants";

export const generateRandomNames = (len) =>
  nameList[Math.floor(Math.random() * len) + 1];

export const generateRandomNumbers = (len) =>
  Math.floor(Math.random() * len) + 1;

export const generateRandomText = () => {
  var text = "";
  for (let i= 0; i <= 20; i++) {
    text += characters.charAt(generateRandomNumbers(characters.length));
  }
  return text;
};


//Function to check the number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
     return false;
    }
  }
  return true;
 }

 //Function to find the nth prime number
export function findNthPrime(n) {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
     count++;
    }
    num++;
  }
  return num - 1;
 }