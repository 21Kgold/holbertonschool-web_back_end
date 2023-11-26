function getStudentsByLocation(arrayOfObjects, city) {
  return arrayOfObjects.filter((obj) => obj.location === city);
}

export default getStudentsByLocation;
