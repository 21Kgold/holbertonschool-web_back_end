export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const toAppend = appendString + value;
    newArray.push(toAppend);
  }

  return newArray;
}
