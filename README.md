# sinon-matchers

sinon-matchers is a collection of assertions for using the mocking library
Sinon.js with most any testing framework that supports `expect.extend`
(e.g. Jest, Playwright, and Vitest).

This project was created as a fork of the excellent
[jest-sinon](https://github.com/djkf/jest-sinon) package because, while it
worked seamlessly with Jest, was not compatible with testing frameworks like
Playwright due to Playwright's lack of a global `expect` object. Therefore, this
package exists to expose jest-sinon's matchers in a way that's agnostic to the
testing framework you use.

### Example

```js
const bar = () => {};
const foo = sinon.spy();

foo(bar);

// instead of:
expect(foo.calledWith(bar)).toBeTruthy;

// we can write:
expect(foo).toHaveBeenCalledWith(bar);
```

The assertions: `toHaveBeenCalledTimes`, `toThrow`, `toReturnWith`, `toHaveBeenCalled` and `toHaveBeenCalledWith` clash with the in-built `Jest` mocking framework. `sinon-matchers` will try and detect which type of spy is being used and use the correct assertion. You should be able to use both mocking libraries in parallel.

```js
const foo = sinon.spy();

foo();

expect(foo).toHaveBeenCalled(); // true
```

## Why?

There are a number of reasons why you might want to use `Sinon.js` instead of (or as well as) the in-built mocking assertions. Some of the use cases include:

- Developer preference/familiarity to Sinon.js
- Migrating a code base from Mocha/Chai/Sinon to Jest
- To be _difficult_

Ultimately, it usually comes down to your own preferences and needs.

## Installation

With npm:

```
npm install --save-dev sinon-matchers
```

With yarn:

```
yarn add -D sinon-matchers
```

## Setup

### Jest 24+

Add `sinon-matchers` to your Jest `setupFilesAfterEnv` configuration.

```js
// jest.config.js
export default {
  // ...
  setupFilesAfterEnv: './testSetup.js'
};
```

```js
// testSetup.js
const matchers = require('sinon-matchers');
expect.extend(matchers);
```

### Jest 23 or below

```js
// jest.config.js
export default {
  // ...
  setupTestFrameworkScriptFile: './testSetup.js'
};
```

```js
// testSetup.js
const matchers = require('sinon-matchers');

expect.extend(matchers);
```

### Playwright

```js
// test/global-setup.js
import { expect } from '@playwright/test';
import matchers from 'sinon-matchers';

expect.extend(matchers);
```

### Vitest

```js
// vite.config.js
export default {
  // ...
  test: {
    setupFiles: ['test/setupTests.ts']
  }
};
```

```js
// test/setupTests.js
import { expect } from 'vitest';
import matchers from 'sinon-matchers';

expect.extend(matchers);
```

## Usage

`sinon-matchers` adds a number of assertions to help test `Sinon.js` Spies, Mocks and Stubs. Below is a list of currently implemented assertions.

#### `.toHaveBeenAlwaysCalledOn(obj)`

> Also under the alias: `.toBeAlwaysCalledOn()`

#### `.toHaveBeenAlwaysCalledWith(args1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWith()`

#### `.toHaveBeenAlwaysCalledWithExactly(args1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWithExactly()`

#### `.toHaveBeenAlwaysCalledWithMatch(arg1, arg2, ...)`

> Also under the alias: `.toBeAlwaysCalledWithMatch()`

#### `.toHaveBeenAlwaysCalledWithNew()`

> Also under the alias: `.toBeAlwaysCalledWithNew()`

#### `.toHaveBeenCalled()`

> Also under the alias: `.toBeCalled()`

#### `.toHaveBeenCalledAfter(anotherSpy)`

> Also under the alias: `.toBeCalledAfter()`

#### `.toHaveBeenCalledBefore(anotherSpy)`

> Also under the alias: `.toBeCalledBefore()`

#### `.toHaveBeenCalledImmediatelyAfter(anotherSpy)`

> Also under the alias: `.toBeCalledImmediatelyAfter()`

#### `.toHaveBeenCalledImmediatelyBefore(anotherSpy)`

> Also under the alias: `.toBeCalledImmediatelyBefore()`

#### `.toHaveBeenCalledOn(obj)`

> Also under the alias: `.toBeCalledOn()`

#### `.toHaveBeenCalledOnce()`

> Also under the alias: `.toBeCalledOnce()`

#### `.toHaveBeenCalledOnceWith(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledOnceWith()`

#### `.toHaveBeenCalledOnceWithExactly(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledOnceWithExactly()`

#### `.toHaveBeenCalledThrice()`

> Also under the alias: `.toBeCalledThrice()`

#### `.toHaveBeenCalledTwice()`

> Also under the alias: `.toBeCalledTwice()`

#### `.toHaveBeenCalledWith(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWith()`

#### `.toHaveBeenCalledWithExactly(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWithExactly()`

#### `.toHaveBeenCalledWithMatch(arg1, arg2, ...)`

> Also under the alias: `.toBeCalledWithMatch()`

#### `.toHaveBeenCalledWithNew()`

> Also under the alias: `.toBeCalledWithNew()`

#### `.toHaveCallCount(number)`

> Also under the alias: `.toHaveBeenCalledTimes()` and `.toBeCalledTimes()`

#### `.toHaveReturnedWith(obj)`

> Also under the alias: `.toReturnWith()`, `.toHaveReturned()` and `.toReturn()`

#### `.toHaveAlwaysReturnedWith(obj)`

> Also under the alias: `.toAlwaysReturnWith()`

#### `.toHaveThrown(error?)`

> Also under the alias: `.toHaveThrownError()`, `.toThrow()`, and `.toThrowError()`

#### `.toHaveAlwaysThrown(error?)`

> Also under the alias: `.toHaveAlwaysThrownError()`, `.toAlwaysThrow()` and `.toAlwaysThrowError()`

For more information about what these do, you can visit [Sinon.js](https://sinonjs.org/).

## Contributing

Pull requests for new features, bug fixes, and suggestions are welcome!
