/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('array removal utility', () => {
  describe('complement', () => {
    it('takes a function and returns a function', () => {
      const result = complement(() => {});
      expect(typeof result).toBe('function');
    });

    it('returns a function that itself returns the logical opposite of the input function', () => {
      function returnFalse() {
        return false;
      }
      const returnTrue = complement(returnFalse);
      expect(returnTrue()).toBe(true);
    });

    it('returns a function that itself returns the logical opposite of the input function', () => {
      function isPositive(n) {
        return n > 0;
      }
      const isNotPositive = complement(isPositive);
      expect(isNotPositive(10)).toBe(false);
      expect(isNotPositive(-10)).toBe(true);
      expect(isNotPositive(0)).toBe(true);
    });
  });

  describe('remove', () => {
    it('is a function', () => {
      expect(typeof remove).toEqual('function');
    });

    it('takes an array and a function and returns an array', () => {
      const result = remove([], () => {});
      expect(Array.isArray(result)).toEqual(true);
    });

    let inputArr;

    function isNegative(n) {
      return n < 0;
    }

    function greaterThanTen(num) {
      return num > 10;
    }

    beforeEach(() => {
      inputArr = [4, -10, 0, 6, -3, -20, 15, 8, 25];
    });

    it('remove invokes the function argument (2nd arg) on every element in the inputArr (first arg) and adds the logical opposite to the result array', () => {
      // isNegative returns `true` for all negative numbers, but the remove function takes the logical opposite (all the false values) and adds all positive integers to the array.
      let positiveNumsArray = remove(inputArr, isNegative);
      let lessThanTenArray = remove(inputArr, greaterThanTen);
      // greaterThanTen returns `true` for all numbers greater than 10, but the remove function takes
      // the logical opposite (all the false values) and adds all numbers 10 or less to the array returned.

      expect(positiveNumsArray).toEqual([4, 0, 6, 15, 8, 25]);
      expect(lessThanTenArray).toEqual([4, -10, 0, 6, -3, -20, 8]);
    });

    it('does not modify the original', () => {
      result = remove(inputArr, isNegative);
      expect(inputArr).toEqual([4, -10, 0, 6, -3, -20, 15, 8, 25]);
    });

    it('makes use of the complement function', () => {
      spyOn(window, 'complement').and.callThrough();
      remove(inputArr, greaterThanTen);
      remove(inputArr, isNegative);
      expect(complement.calls.count()).toEqual(2);
    });

    // use Array.prototype.forEach instead of a for loop.
    it('uses Array.prototype.forEach instead of a for loop', () => {
      spyOn(Array.prototype, 'forEach').and.callThrough();
      remove(inputArr, greaterThanTen);
      remove(inputArr, isNegative);
      expect(Array.prototype.forEach.calls.count()).toEqual(2);
    });
  });
});
