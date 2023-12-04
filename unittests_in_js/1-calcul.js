module.exports = function calculateNumber(type, a, b) {
  const aNumber = Math.round(a);
  const bNumber = Math.round(b);

  if (type === 'DIVIDE' && bNumber === 0) { return 'Error'; }
  if (type === 'SUBTRACT') { return aNumber - bNumber; }
  if (type === 'DIVIDE') { return aNumber / bNumber; }
  return aNumber + bNumber;
};
