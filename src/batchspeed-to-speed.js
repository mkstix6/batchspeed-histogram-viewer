'use strict'

import parse from 'csv-parse/lib/sync'
import filterObjectProps from './filter-object-props.js'

const onlyTheSpeedProp = filterObjectProps(['speed'])

export default function (csv, csvParseOptions) {
  try {
    return parse(csv, csvParseOptions)
    .map(onlyTheSpeedProp)
    .map(x => x.speed)
    .filter(x => Number.isInteger(x))
  } catch (err) {
    console.log(`Couldn't format CSV: ${err}`)
    return false
  }
}
