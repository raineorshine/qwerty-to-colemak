# qwerty-to-colemak

Look up the COLEMAK key for a given QWERTY keyboard key press (or vice versa).

## Install

```sh
npm install qwerty-to-colemak
```

## Usage

```js
const { toQwerty, toColemak } = require('qwerty-to-colemak')
assert(toQwerty('s') === toColemak('d'))
```
