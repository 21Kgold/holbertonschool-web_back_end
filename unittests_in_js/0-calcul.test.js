// 0-calcul.test.js
const assert = require('assert');
const mocha = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('Round to nearest the sum of two integers', () =>  {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Round to nearest the sum of one integer and one decimal', () =>  {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Round to nearest the sum of one decimal and one integer', () =>  {
    assert.strictEqual(calculateNumber(3.7, 1), 5);
  });

  it('Round to nearest the sum of two decimals', () =>  {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Round to nearest even the sum of midpoint decimal', () =>  {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('Round to nearest the sum of two decimals', () =>  {
    assert.strictEqual(calculateNumber(3.7, 1.2), 5);
  });

  it('Round to nearest the sum of one integer and one decimal', () =>  {
    assert.strictEqual(calculateNumber(4, 0.9), 5);
  });

  it('Round to nearest even the sum of midpoint decimal', () =>  {
    assert.strictEqual(calculateNumber(4, 1.5), 6);
  });

  it('Round to nearest even the sum of midpoint decimal', () =>  {
    assert.strictEqual(calculateNumber(4, 0.5), 5);
  });
});