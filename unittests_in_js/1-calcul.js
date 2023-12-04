module.exports = function calculateNumber(type, a, b) {
  const aNumber = Number(a);
  const bNumber = Number(b);
  const typeString = String(type);

  if (Number.isNaN(aNumber) || Number.isNaN(bNumber)) { throw TypeError(`The provided parameter(s) ${a} ${b} must be numbers`); }
  if (typeof typeString !== 'string') { throw TypeError(`The provided parameter ${type} must be string`); }
  if (typeString === 'DIVIDE' && bNumber === 0) { return 'Error'; }
  if (typeString === 'SUBTRACT') { return Math.round(aNumber) - Math.round(bNumber); }
  if (typeString === 'DIVIDE') { return Math.round(aNumber) / Math.round(bNumber); }
  return Math.round(aNumber) + Math.round(bNumber);
};
