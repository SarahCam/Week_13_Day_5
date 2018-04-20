
// ###Unit Tests
//
// You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.
//
// All of these functions should be tested thoroughly:

var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //   - calculator.add()
  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  //   - calculator.subtract()
  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(2, calculator.runningTotal);
  })

  //   - calculator.multiply()
  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(8, calculator.runningTotal);
  })
  //   - calculator.divide()
  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(4, calculator.runningTotal);
  })
  //   - calculator.numberClick()
  it('can click on a number', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    assert.equal(8, calculator.runningTotal);
  })
  //   - calculator.operatorClick()
  it('can click on an operator', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.operatorClick("/");
    assert.equal(8, calculator.runningTotal);
    assert.equal("/", calculator.previousOperator);
  })
  //   - calculator.clearClick()
  it('can click on clear button', function(){
    calculator.clearClick();
    calculator.numberClick(8);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

});
