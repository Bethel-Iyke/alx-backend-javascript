export default function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((list) => list.location === city);
}
