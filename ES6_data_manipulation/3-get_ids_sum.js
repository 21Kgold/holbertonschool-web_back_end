function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((total, obj) => total + obj.id, 0);
}

export default getStudentIdsSum;
