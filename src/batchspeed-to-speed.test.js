'use strict'

import test from 'ava'
import csv2speedArray from './batchspeed-to-speed.js'

const csvParseOptions = {cast: true, columns: true}
const csv = `url,speed,total,status,strategy,css,js,html,image,details
http://www.wisteria.co.uk/about/,86,1603999,done,desktop,355925,1116110,20337,111627,"8,Eliminate render-blocking JS & CSS,2.82,Reduce server response time,1.7897,Minify JavaScript,1.3923611111111112,Leverage browser caching,0.49620000000000003,Minify CSS,0.0925,Minify HTML"
http://www.wisteria.co.uk/about/,52,1607475,done,mobile,357809,1116110,21600,111956,"24,Eliminate render-blocking JS & CSS,24,Reduce server response time,1,Minify JavaScript,1,Leverage browser caching"`
const malformedCSV = `url,speed
'yo'`

test('Speeds array from CSV', t => {
  t.deepEqual(csv2speedArray(csv, csvParseOptions), [86, 52])
})

test('Malformed CSV fails', t => {
  t.falsy(csv2speedArray(malformedCSV, csvParseOptions))
})
