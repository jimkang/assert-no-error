var test = require('tape');
var assertNoError = require('../index');

test('Basic test', basicTest);

function basicTest(t) {
  t.plan(3);

  function mockAssertTrue(error) {
    t.pass('The assertFn was called.');
    if (!error) {
      return true;
    }
    else {
      return false;
    }
  }

  function mockLog(message, stack) {
    t.ok(message, 'A message was passed to the log.');
    t.ok(stack, 'A stack was passed to the log.');
  }

  assertNoError(
    mockAssertTrue,
    new Error('This error should be reported.'),
    'This should be logged!',
    mockLog
  );
}
