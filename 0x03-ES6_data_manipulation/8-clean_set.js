export default function cleanSet(set, startString) {
  if (startString !== undefined && startString.length !== 0 && typeof startString === 'string') {
    const selected = [...set].filter((value) => (value !== undefined ? value.startsWith(startString) : ''));
    let finalStr = '';
    for (const str of selected) {
      const trucStr = str.replace(startString, '');
      finalStr += `${trucStr}-`;
    }
    return finalStr.slice(0, -1);
  }

  return '';
}
