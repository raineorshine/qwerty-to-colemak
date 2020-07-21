const qwerty = 'qwertyuiopasdfghjkl;zxcvbnmQWERTYUIOPASDFGHJKL:ZXCVBNM'
const colemak = 'qwksfoil;radgethynupzxcvbjmQWKSFOIL;RADGETHYNUPZXCVBJM'

/** A curried object getter. */
const get = o => k => o[k]

/** Converts two parallel strings to an object with O(1) single char conversions. */
const toConversionTable = (a, b) =>
  a.split('').reduce(
    (accum, char) => ({
      ...accum,
      [char]: b[a.indexOf(char)]
    }), {}
  )

const toQwertyLookup = toConversionTable(colemak, qwerty)
const toColemakLookup = toConversionTable(qwerty, colemak)

const toQwerty = get(toQwertyLookup)
const toColemak = get(toColemakLookup)

module.exports = { toQwerty, toColemak }
