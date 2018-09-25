'use strict'

export default function (columns) {
  return function (x) {
    try {
      const obj = {}
      columns.forEach(y => { obj[y] = x[y] })
      return obj
    } catch (err) {
      console.log(`Couldn't filter object: ${err}`)
      return false
    }
  }
}
