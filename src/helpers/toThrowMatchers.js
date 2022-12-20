import path from 'path';

/**
 * A hack to get around the Package entry points used by jest
 */
let toThrowMatchers;
try {
  toThrowMatchers = require(`${path.dirname(
    require.resolve('expect')
  )}/toThrowMatchers.js`).default;
} catch (error) {
  toThrowMatchers = {};
}

export default toThrowMatchers;
