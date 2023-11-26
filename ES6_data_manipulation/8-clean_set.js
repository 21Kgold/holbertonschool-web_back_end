function cleanSet(set, startString) {
  const slicePosition = startString.length;
  let newString = '';

  if (startString !== '' && typeof (startString) === 'string') {
    set.forEach((element) => {
      const match = element.slice(0, slicePosition);
      if (match === startString) {
        const substring = element.slice(slicePosition);
        if (substring.slice(substring.length - 1) === '-') {
            substring = substring.slice(0, -1)
        }
        newString = `${newString + substring}-`;
      }
    });
    newString = newString.slice(0, -1);
  }

  return newString;
}

export default cleanSet;
