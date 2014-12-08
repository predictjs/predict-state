require('mocha-testcheck').install();
var assert = require('assert');

var { atom } = require('../lib/atom')

describe('Atom', () => {
  describe('atom', () => {
    it("returns an object conforming to the atom api", () => {
      var instance = atom({});
      
      assert(typeof instance.watch === "function")
      assert(typeof instance.swap  === "function")
      assert(typeof instance.reset === "function")
      assert(typeof instance.deref === "function")
    })
  })

  check.it('accepts an int and a string', [gen.int, gen.string], (x, y) => {
    assert(typeof x === 'number');
    assert(typeof y === 'string');
  });

});
