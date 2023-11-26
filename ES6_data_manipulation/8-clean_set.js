function cleanSet(set, startString) {
  let newString = '';

  if (startString !== '' && typeof (startString) === 'string' && arguments.length === 2) {
    const slicePosition = startString.length;
    set.forEach((element) => {
      if (typeof (element) === 'string') {
        const match = element.slice(0, slicePosition);
        if (match === startString) {
          const substring = element.slice(slicePosition);
          newString = `${newString + substring}-`;
        }
      }
    });
    newString = newString.slice(0, -1);
  }

  return newString;
}

export default cleanSet;
