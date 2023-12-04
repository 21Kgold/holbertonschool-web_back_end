// 1-calcul.test.js
const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('first argument is SUM', () => {
    it('rounds to nearest integer the second argument: a', () => {
      assert.strictEqual(calculateNumber('SUM', 3.7, 1), 5);
      assert.strictEqual(calculateNumber('SUM', 4, 0.9), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 4), 6);
      assert.strictEqual(calculateNumber('SUM', 0.5, 4), 5);
    });

    it('rounds to nearest integer the third argument: b', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 4, 0.9), 5);
      assert.strictEqual(calculateNumber('SUM', 4, 1.5), 6);
      assert.strictEqual(calculateNumber('SUM', 4, 0.5), 5);
    });

    it('rounds integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1.0, 4), 5);
      assert.strictEqual(calculateNumber('SUM', 3, 3.0), 6);
    });

    it('rounds second and third parameter', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
      assert.strictEqual(calculateNumber('SUM', 3.7, 1.2), 5);
    });
  });

  describe('first argument is SUBTRACT', () => {
    it('rounds to nearest integer the second argument: a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 0.9), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 4), -3);
    });

    it('rounds to nearest integer the third argument: b', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 0.9), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 1.5), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', 4, 0.5), 3);
    });

    it('rounds integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 4), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 3.0), 0);
    });

    it('rounds second and third parameter', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
    });
  });

  describe('first argument is DIVIDE', () => {
    it('rounds to nearest integer the second argument: a', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.7, 2), 1.5);
      assert.strictEqual(calculateNumber('DIVIDE', 2.2, 2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2), 1.5);
    });

    it('rounds to nearest integer the third argument: b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.0), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.2), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.7), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.5), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0.5), 6);
    });

    it('rounds second and third parameter', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 12.2, 2.1), 6);
      assert.strictEqual(calculateNumber('DIVIDE', 12.5, 3.6), 3.25);
      assert.strictEqual(calculateNumber('DIVIDE', 12.0, 3.3), 4);
    });

    it('returns Error if b or round b is equal to 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0.0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0.1), 'Error');
    });
  });
});
