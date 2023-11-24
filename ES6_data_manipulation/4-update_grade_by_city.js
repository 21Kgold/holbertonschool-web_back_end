function updateStudentGradeByCity(students, locationString, studentsGrades) {
  const newStudents = students.filter((student) => student.location === locationString);
  return newStudents.map((student) => {
    const match = studentsGrades.find((studentGrade) => student.id === studentGrade.studentId);
    const newStudent = student;
    if (match) {
      newStudent.grade = match.grade;
    } else {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  });
}

export default updateStudentGradeByCity;
