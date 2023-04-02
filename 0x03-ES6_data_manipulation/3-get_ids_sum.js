export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((accumulator, list) => accumulator + list.id, 0);
}
