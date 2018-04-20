
// ###Unit Tests
//
// You need to write unit tests to ensure that the majority of functions in the calculator operate correctly. The test framework to be used is Mocha. The file to write in is in `/tests/unit/calculator_spec.js`.
//
// All of these functions should be tested thoroughly:
//
//   - calculator.add()
//   - calculator.subtract()
//   - calculator.multiply()
//   - calculator.divide()
//   - calculator.numberClick()
//   - calculator.operatorClick()
//   - calculator.clearClick()

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

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

});
