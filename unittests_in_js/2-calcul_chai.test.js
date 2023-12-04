const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('first argument is SUM', () => {
    it('rounds to nearest integer the second argument: a', () => {
      expect(calculateNumber('SUM', 3.7, 1)).to.equal(5);
      expect(calculateNumber('SUM', 4, 0.9)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 4)).to.equal(6);
      expect(calculateNumber('SUM', 0.5, 4)).to.equal(5);
    });

    it('rounds to nearest integer the third argument: b', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 4, 0.9)).to.equal(5);
      expect(calculateNumber('SUM', 4, 1.5)).to.equal(6);
      expect(calculateNumber('SUM', 4, 0.5)).to.equal(5);
    });

    it('rounds integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1.0, 4)).to.equal(5);
      expect(calculateNumber('SUM', 3, 3.0)).to.equal(6);
    });

    it('rounds second and third parameter', () => {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      expect(calculateNumber('SUM', 3.7, 1.2)).to.equal(5);
    });
  });

  describe('first argument is SUBTRACT', () => {
    it('rounds to nearest integer the second argument: a', () => {
      expect(calculateNumber('SUBTRACT', 3.7, 1)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 4, 0.9)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 1.5, 4)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 0.5, 4)).to.equal(-3);
    });

    it('rounds to nearest integer the third argument: b', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 4, 0.9)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 4, 1.5)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 4, 0.5)).to.equal(3);
    });

    it('rounds integers', () => {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 1.0, 4)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 3, 3.0)).to.equal(0);
    });

    it('rounds second and third parameter', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
      expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
    });
  });

  describe('first argument is DIVIDE', () => {
    it('rounds to nearest integer the second argument: a', () => {
      expect(calculateNumber('DIVIDE', 2.0, 2)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.7, 2)).to.equal(1.5);
      expect(calculateNumber('DIVIDE', 2.2, 2)).to.equal(1);
      expect(calculateNumber('DIVIDE', 2.5, 2)).to.equal(1.5);
    });

    it('rounds to nearest integer the third argument: b', () => {
      expect(calculateNumber('DIVIDE', 6, 2.0)).to.equal(3);
      expect(calculateNumber('DIVIDE', 6, 2.2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 6, 2.7)).to.equal(2);
      expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', 6, 0.5)).to.equal(6);
    });

    it('rounds second and third parameter', () => {
      expect(calculateNumber('DIVIDE', 12.2, 2.1)).to.equal(6);
      expect(calculateNumber('DIVIDE', 12.5, 3.6)).to.equal(3.25);
      expect(calculateNumber('DIVIDE', 12.0, 3.3)).to.equal(4);
    });

    it('returns Error if b or round b is equal to 0', () => {
      expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 6, 0.0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 6, 0.4)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 6, 0.1)).to.equal('Error');
    });
  });
});
