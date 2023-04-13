export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  reportWithIterator.forEach((value, index) => {
    if (index < reportWithIterator.length - 1) {
      names += `${value} | `;
    } else {
      names += value;
    }
  });
  return names;
}
