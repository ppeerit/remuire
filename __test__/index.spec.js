const remuire = require('../index')(module)
remuire.mock('./src/a', './__mock__/a')

const test = require('ava')

test('should return mocked module with mock', (t) => {
  const example = require('./src/example')
  t.deepEqual(example, {
    name: 'hello mock'
  })
})