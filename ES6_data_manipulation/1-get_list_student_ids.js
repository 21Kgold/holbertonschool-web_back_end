function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    return arrayOfObjects.map((obj) => obj.id);
  }
  return [];
}

export default getListStudentIds;
