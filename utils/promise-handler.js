module.exports = promise => promise
  .then(res => [null, res])
  .catch(err => [err, null]);