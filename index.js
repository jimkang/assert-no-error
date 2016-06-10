function assertNoError(assertTrueFn, error, message, log) {
  var logFn = log;
  if (!logFn) {
    logFn = console.log;
  }

  assertTrueFn(!error, message);

  if (error && error.stack) {
    logFn(error, error.stack);
  }
  else if (error) {
    logFn(error);
  }
}

module.exports = assertNoError;
