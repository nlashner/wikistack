const express = require ('express')
const app = express()
const wikiRouter = require('./routes/wiki')
const userRouter = require('./routes/user')
const db = require('./models')

db.db.authenticate().
then (() => {
  console.log('connected to the database')
})

app.use('/wiki', wikiRouter)
// app.use('/user', userRouter)

const port = 3000

const connect = async () => {
  await db.User.sync();
  await db.Page.sync();

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
}

connect();
