/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((list) => list.location === city).map((student) => {
    const grade = newGrades.find((grade) => grade.studentId === student.id);
    if (grade) {
      student.grade = grade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
