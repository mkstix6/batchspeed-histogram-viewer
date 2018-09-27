'use strict'

import test from 'ava'
import filterObjectProps from './filter-object-props.js'

const testObj = [
  {
    name: 'orange',
    color: 'orange'
  },
  {
    name: 'banana',
    color: 'yellow'
  }
]

test('simple 01', t => {
  t.deepEqual(testObj.map(filterObjectProps(['name'])), [{name: 'orange'}, {name: 'banana'}])
})

test('simple 02', t => {
  t.deepEqual(testObj.map(filterObjectProps(['color'])), [{color: 'orange'}, {color: 'yellow'}])
})

test('Must pass in array', t => {
  t.false(filterObjectProps('someString'))
})

test('Must pass in array not string', t => {
  t.throws(() => { testObj.map(filterObjectProps('someString')) })
})

test('Must pass in array not object', t => {
  t.throws(() => { testObj.map(filterObjectProps({})) })
})
