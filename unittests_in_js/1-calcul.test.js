// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('round to nearest the sum of two integers', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
  });

  it('round to nearest the sum of one integer and one decimal', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('round to nearest the sum of one decimal and one integer', () => {
    assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
  });

  it('round to nearest the sum of two decimals case2', () => {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
  });

  it('round to nearest even the sum of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });

  it('round to nearest the sum of two decimals case3', () => {
    assert.strictEqual(calculateNumber('SUM', 3.7, 1.2), 5);
  });

  it('round to nearest the sum of one integer and one decimal', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 0.9), 5);
  });

  it('round to nearest even the sum of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 1.5), 6);
  });

  it('round to nearest the sum of midpoint decimal case2', () => {
    assert.strictEqual(calculateNumber('SUM', 4, 0.5), 5);
  });

  it('round to nearest even the subtract of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 4, 0.5), 3);
  });

  it('round to nearest and divide of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });

  it('round to nearest even the divide of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0.5), 4);
  });

  it('round to nearest even the divide of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.2, 0.5), 1);
  });

  it('round to nearest even the divide of midpoint decimal', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4, 0), 'Error');
  });
});
