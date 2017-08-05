
module.exports = function (asyncFun) {
  return (done) => {
    asyncFun().then(done, e => done(e))
  }
}