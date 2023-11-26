function updateUniqueItems(map) {
  const updatedMap = map;
  if (map instanceof Map) {
    updatedMap.forEach((value, key) => {
      if (value === 1) {
        updatedMap.set(key, 100);
      }
    });
  } else {
    throw new Error('Cannot process');
  }
  return updatedMap;
}

export default updateUniqueItems;
