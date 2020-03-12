const app = require('express')
const router = app.Router()
// const addPage = require('../views/addPage')
const { addPage } = require('../views')



app.get('/', (req, res, next) => {
  res.send('hello world')
})

app.post('/', (req, res, next) => {
  res.send('hello world')
})

app.get('/add', (req, res, next) => {
  res.send(addPage())
})



module.exports = {
  router
}
