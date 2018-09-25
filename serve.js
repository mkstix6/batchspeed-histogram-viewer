// const http = require('http')
// const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.listen(port)




// http.createServer(function (request, response) {
//   fs.readFile('index.html', function (err, data) {
//     response.writeHead(200, {'Content-Type': 'text/html'})
//     response.write(`
//       <!doctype html>
//       <html>
//       <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1">
//         <title>Graph render</title>
//         <style>
//           *{
//             font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
//             font-weight: 200;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Let's get a graph going</h1>
//         <div id="myDiv"></div>
//         <script src="dist/bundle.js"></script>
//       </body>
//       </html>
//     `)
//     response.end()
//   })
// }).listen(3000)


