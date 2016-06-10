assert-no-error
==================

Handles asserting that there is no error in a test so you don't have to paste something like this into everything.

A really common need in a test is:

    - Asserting that no error passed to a callback.
    - Logging that error if there is one so it can be debugged.

e.g.

    function checkCallback(error, thing) {
      t.ok(!error, 'No error from callback.');

      if (error && error.stack) {
        console.log(error, error.stack);
      }
      else if (error) {
        console.log(error);
      }

      ...
    }

This does both in a really simple way. I've had to paste this into multiple projects, so I'm packaging it finally.

Installation
------------

    npm install assert-no-error

Usage
-----

    var assertNoError = require('assert-no-error');
    var test = require('tape');

    function checkCallback(error, thing) {
      assertNoError(t.ok, error, 'No error from callback.');
      // Rest of test checks...
    }

You can also supply an optional fourth argument, a log function that takes at least two parameters (the error message and error stack). If you don't specify it, it'll just use console.log.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2016 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
