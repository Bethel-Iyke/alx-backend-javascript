export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const nameList = [];
  for (const names in employees) {
    if (names) {
      nameList.push(...employees[names]);
    }
  }
  return nameList;
}
