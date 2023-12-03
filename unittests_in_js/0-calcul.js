module.exports = function calculateNumber(a, b) {
    const aNumberCast = Number(a);
    const bNumberCast = Number(b);
    
    if (Number.isNaN(aNumberCast) || Number.isNaN(bNumberCast))
      throw TypeError('The provided parameter(s) must be numbers');
    
      return Math.round(aNumberCast) + Math.round(bNumberCast);
    };