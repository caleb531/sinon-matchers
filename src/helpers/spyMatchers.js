import path from 'path';

/**
 * A hack to get around the Package entry points used by jest
 */
let spyMatchers;
try {
  spyMatchers = require(`${path.dirname(
  require.resolve('expect')
)}/spyMatchers.js`).default;
} catch (error) {
  spyMatchers = {};
}

export default spyMatchers;
