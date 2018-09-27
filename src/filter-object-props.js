'use strict'

export default function (columns) {
  if (!Array.isArray(columns)) {
    return false
  }
  return function (x) {
    const obj = {}
    columns.forEach(y => { obj[y] = x[y] })
    return obj
  }
}
