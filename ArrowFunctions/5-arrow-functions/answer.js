// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!

describe('arrow functions', function() {

  it('are shorter to write', function() {
    const func = () => {
      return 'I am func';
    };
    assert.equal(func(), 'I am func');
  });

  it('a single expression, without curly braces returns too', function() {
    const func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });

  it('one parameter can be written without parens', () => {
    const func = param => param - 1;
    assert.equal(func(25), 24);
  });

  it('many params require parens', () => {
    const func = (param, param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });

  it('body needs parens to return an object', () => {
    const func = () => ({iAm: 'an object'});
    assert.deepEqual(func(), {iAm: 'an object'});
  });

});
