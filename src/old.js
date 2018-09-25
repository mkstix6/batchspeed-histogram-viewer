// const importantColumns = ['url', 'speed', 'strategy']

// Intended for use in Array.map
// function addColumn (key, val) {
//   return function (x) {
//     x[key] = val
//     return x
//   }
// }

// function prepBatchSpeedCSV (file, dataName) {
//   const csv = fs.readFileSync(file)
//   return parse(csv, csvParseOptions)
//   .map(filterObjectProps(importantColumns))
//   .map(addColumn('when', dataName))
// }

// const trace1 = {
//   x: x1,
//   type: 'histogram',
//   opacity: 0.5,
//   marker: {
//     color: 'green'
//   }
// }
// const trace2 = {
//   x: x2,
//   type: 'histogram',
//   opacity: 0.6,
//   marker: {
//     color: 'red'
//   }
// }

// Plotly.newPlot('myGraphDiv', {
//   x: [3, 4, 3, 6, 8, 9, 5, 3, 7, 3],
//   type: 'histogram',
//   opacity: 0.5,
//   marker: {
//     color: 'green'
//   }
// }, layout)

// var x1 = []
// var x2 = []
// for (var i = 1; i < 500; i++) {
//   let k = Math.random()
//   x1.push(Math.random() + 1)
//   x2.push(Math.random() + 1.1)
// }
// var trace1 = {
//   x: x1,
//   type: 'histogram',
//   opacity: 0.5,
//   marker: {
//     color: 'green'
//   }
// }
// var trace2 = {
//   x: x2,
//   type: 'histogram',
//   opacity: 0.6,
//   marker: {
//     color: 'red'
//   }
// }

// var data = [trace1, trace2]
// console.log({data})
// // var layout = {barmode: "overlay"};
// Plotly.newPlot('myDiv', data, layout)
