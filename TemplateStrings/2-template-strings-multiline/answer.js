// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!

describe('template string, can contain multiline content', function() {

  it('a normal string can`t span across multiple lines', function() {
    const normalString = 'line1\n' +
                       'line2';
    assert.equal(normalString, 'line1\nline2');
  });

  it('wrapped in backticks it can span over multiple lines', function() {
    const templateString = `line1
line2`;
    assert.equal(templateString, 'line1\nline2');
  });

  it('even over more than two lines', function() {
    const multiline = `line 1
                     line 2
                     line 3
                     line 4`;
    assert.equal(multiline.split('\n').length, 4);
  });

  describe('and expressions inside work too', function() {

    const x = 42;

    it('like simple variables', function() {
      const multiline = `line 1
          ${x}`;
      assert.equal(multiline, 'line 1\n          42');
    });

    it('also here spaces matter', function() {
      const multiline = `
${x}`;
      assert.equal(multiline, '\n42');
    });

  });

});
