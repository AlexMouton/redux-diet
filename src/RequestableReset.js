ActionTypeReset = require('./ActionTypeReset.js')

export const RequestableReset = (key, init) =>
  ActionTypeReset([`clear ${key}`, `set ${key} error`], init)
