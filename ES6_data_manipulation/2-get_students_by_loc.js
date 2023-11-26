function getStudentsByLocation(arrayOfObjects, city) {
    return arrayOfObjects.filter((obj) => {
        return obj.location === city
    });
}

export default getStudentsByLocation;
