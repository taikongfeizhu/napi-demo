const { plus100, sub100 } = require('./index')

console.assert(plus100(0) === 100, 'Simple test failed')
console.assert(sub100(100) === 0, 'Simple test failed')

console.info('Simple test passed')
