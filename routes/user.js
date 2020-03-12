const app = require('express')
const router = express.Router()

app.get('/', (res, req, next) => {
  res.redirect('/wiki')
})

app.get('/123', (res, req, next) => {
  res.send()
})

app.post('/', (res, req, next) => {
  res.send()
})

app.put('/123', (res, req, next) => {
  res.send()
})

app.delete('/123', (res, req, next) => {
  res.send()
})






module.exports = {
  router
}
