require('dotenv').config()
const express = require('express')
const app = express()
const catsDatabase = require('./data/cats.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to all the cats. Meow.')
})

// app.get('/cats', (req, res) => {
//   // Did the client send a query string in the HTTP Request?
//   //  and is that query string called 'breed'?
//   //  if so, then use a function that filters for cats and breeds
//   //  if not, then use a function that only filters for cats
//   let foundCats = []
//   if (req.query.breed) {
//     foundCats = catsDatabase.filter(
//       item => item.type === 'cat' && item.breed === req.query.breed
//     )
//   } else {
//     foundCats = catsDatabase.filter(item => item.type === 'cat')
//   }
//   res.status(200).send(foundCats)
//   //res.status(200).send(req.query)
// })

// app.get('/cats', (req, res) => {
//   // Did the client send a query string in the HTTP Request?
//   //  and is that query string called 'breed'?
//   //  if so, then use a function that filters for cats and breeds
//   //  if not, then use a function that only filters for cats

//   const filterCatsFn = req.query.breed
//     ? item => item.type === 'cat' && item.breed === req.query.breed
//     : item => item.type === 'cat'

//   res.status(200).send(catsDatabase.filter(filterCatsFn))
// })

app.get('/cats', (req, res) =>
  res
    .status(200)
    .send(
      catsDatabase.filter(
        req.query.breed
          ? item => item.type === 'cat' && item.breed === req.query.breed
          : item => item.type === 'cat'
      )
    )
)

// get a cat from the collection of cats
app.get('/cats/:catId', (req, res) => {
  function findCatById(item) {
    return item.id === req.params.catId
  }

  res.status(200).send(catsDatabase.find(findCatById))
})

app.get('/breeds', (req, res) =>
  res.status(200).send(catsDatabase.filter(item => item.type === 'breed'))
)

app.listen(
  process.env.PORT || 5555,
  process.env.HOST || '127.0.0.1',

  () => console.log('Im up and listening on http://127.0.0.1:5555')
)

console.log(`The host name is: ${process.env.HOST}`)
