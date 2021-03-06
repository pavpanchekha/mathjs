var assert = require('assert'),
    error = require('../../../lib/error/index'),
    math = require('../../../index'),
    factorial = math.factorial;

describe('factorial', function() {

  it('should calculate the factorial of a number', function() {
    assert.equal(factorial(0), 1);
    assert.equal(factorial(1), 1);
    assert.equal(factorial(2), 2);
    assert.equal(factorial(3), 6);
    assert.equal(factorial(4), 24);
    assert.equal(factorial(5), 120);
  });

  it('should calculate the factorial of a bignumber', function() {
    assert.deepEqual(factorial(math.bignumber(0)), math.bignumber(1));
    assert.deepEqual(factorial(math.bignumber(1)), math.bignumber(1));
    assert.deepEqual(factorial(math.bignumber(2)), math.bignumber(2));
    assert.deepEqual(factorial(math.bignumber(3)), math.bignumber(6));
    assert.deepEqual(factorial(math.bignumber(4)), math.bignumber(24));
    assert.deepEqual(factorial(math.bignumber(5)), math.bignumber(120));
    assert.deepEqual(factorial(math.bignumber(20)), math.bignumber('2432902008176640000'));
  });

  it('should calculate the factorial of a boolean', function() {
    assert.equal(factorial(true), 1);
    assert.equal(factorial(false), 1);
  });

  it('should calculate the factorial of each element in a matrix', function() {
    assert.deepEqual(factorial(math.matrix([0,1,2,3,4,5])), math.matrix([1,1,2,6,24,120]));
  });

  it('should calculate the factorial of each element in an array', function() {
    assert.deepEqual(factorial([0,1,2,3,4,5]), [1,1,2,6,24,120]);
  });

  it('should throw an error if called with negative number', function() {
    assert.throws(function() { factorial(-1); });
  });

  it('should throw an error if called with non-integer number', function() {  
    assert.throws(function() { factorial(1.5); });
  });

  it('should throw an error if called with non-integer bignumber', function() {
    assert.throws(function() { factorial(math.bignumber(1.5)); });
  });

  it('should throw en error if called with invalid number of arguments', function() {
    assert.throws(function() { factorial(); });
    assert.throws(function() { factorial(1,3); });
  });

  it('should throw en error if called with invalid type of argument', function() {
    assert.throws(function() { factorial(new Date()); });
    assert.throws(function() { factorial('a string'); });
  });


});
