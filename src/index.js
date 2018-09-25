'use strict'
/* global localStorage, FileReader, Vue */

import csv2speedArray from './batchspeed-to-speed.js'
import Plotly from 'plotly.js-cartesian-dist'

const storeKey = 'plotlyStore1'
const csvParseOptions = {cast: true, columns: true}
const layout = {barmode: 'overlay'}
let colors = ['red', 'green', 'blue']

function updateGraph () {
  let data = JSON.parse(localStorage.getItem(storeKey))
  let graphObjs = data.map(x => {
    return {
      x,
      type: 'histogram',
      opacity: 0.5,
      marker: {
        color: colors.shift()
      },
      xbins: {
        end: 100,
        size: 5,
        start: 0
      }
    }
  })
  Plotly.newPlot('myGraphDiv', graphObjs, layout)
}

function importData () {
  let data = [...document.getElementsByClassName('graphdatainput')]
  .filter(x => x.files.length > 0)
  data.map(x => {
    let reader = new FileReader()
    reader.readAsText(x.files[0])
    reader.onload = function (ev) {
      let csv = ev.target.result
      let data = csv2speedArray(csv, csvParseOptions)
      // If our store isn't an array it may be an old version and se should clear it
      if (!Array.isArray(JSON.parse(localStorage.getItem(storeKey)))) {
        console.info(`Clearing old store`, JSON.parse(localStorage.getItem(storeKey)))
        localStorage.removeItem(storeKey)
        localStorage.setItem(storeKey, JSON.stringify([]))
        console.info(`Setting blank store`, JSON.parse(localStorage.getItem(storeKey)))
      }
      let newStoreData = JSON.stringify(JSON.parse(localStorage.getItem(storeKey)).concat([data]))
      localStorage.setItem(storeKey, newStoreData)
    }
  })
  return data
}

const inputHandler = {
  setUp (elem) {
    this.elem = elem
    this.setUpEvents()
  },
  setUpEvents () {
    this.elem.addEventListener('change', this.onChange.bind(this))
  },
  onChange () {
    importData()
    updateGraph()
  }
}

// Start app
document.addEventListener('DOMContentLoaded', function () {
  const inputElem = document.getElementsByClassName('graphdatainput')[0]
  const myPlot = Object.create(inputHandler).setUp(inputElem)
})

new Vue({
  el: '#editor',
  computed: {
    data () {
      return JSON.parse(localStorage.getItem(storeKey))
    }
  }
})

document.querySelectorAll('.clear-data')[0].addEventListener('click', () => {
  localStorage.removeItem(storeKey)
})

updateGraph()
