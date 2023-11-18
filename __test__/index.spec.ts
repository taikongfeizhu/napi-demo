import test from 'ava'

import { plus100, sub100 } from '../index'

test('plus100 from native code', (t) => {
  const fixture = 42
  t.is(plus100(fixture), fixture + 100)
})

test('sub100 from native code', (t) => {
  const fixture = 200
  t.is(sub100(fixture), fixture - 100)
})
