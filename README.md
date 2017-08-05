# async_wrapper
A wrapper for mocha jasmin test framework , help test the async await function in es2017 / es7
```
var assert = require('assert');
const _a = require('./index.js')


function aFunPass() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('aloha')
    }, 100);

  })
}
function aFunFail() {
  new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('fail')
    }, 100);
  })
}

describe('Test Async Wrapper', () => {
  it('test async pass works', _a(async () => {
    let pass = await aFunPass()
    assert.equal(pass, 'aloha1')
  }));
  it('test async fail works', _a(async () => {
    let fail = await aFunFail()
    assert.ok(fail === 'fail')
  }));
});
```
