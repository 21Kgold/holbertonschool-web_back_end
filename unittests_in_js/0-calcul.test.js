// 0-calcul.test.js
const assert = require('assert').strict;
const mocha = require('mocha');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function () {
  it('Round to nearest the sum of two integers', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Round to nearest the sum of one integer and one decimal', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('Round to nearest the sum of two decimals', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('Round to nearest even the sum of midpoint decimal', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Add more test cases as needed
});