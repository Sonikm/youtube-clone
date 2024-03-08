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
