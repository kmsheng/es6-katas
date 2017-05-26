// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!

class LexicallyBound {

  getFunction() {
    return () => {
      return this;
    }
  }

  getArgumentsFunction() {
    return () => arguments;
  }

}

describe('arrow functions have lexical `this`, no dynamic `this`', () => {

  it('bound at definition time, use `=>` ', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();

    assert.strictEqual(fn(), bound);
  });

  it('can NOT bind a different context', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();
    const anotherObj = {};
    const expected = bound;

    assert.strictEqual(fn.call(anotherObj), expected);
  });

  it('`arguments` doesnt work inside arrow functions', function() {
    const bound = new LexicallyBound();
    const fn = bound.getArgumentsFunction();

    assert.equal(fn(1, 2).length, 0);
  });

});
