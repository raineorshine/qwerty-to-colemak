const test = require('ava')
const { toQwerty, toColemak } = require('./index')

test('toQwerty', t => {
  t.is(toQwerty('d'), 's')
  t.is(toQwerty('s'), 'r')
  t.is(toQwerty('f'), 't')
})

test('toColemak', t => {
  t.is(toColemak('s'), 'd')
  t.is(toColemak('r'), 's')
  t.is(toColemak('t'), 'f')
})
