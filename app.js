const express = require ('express')
const apps = express()
// const { db } = require ('./models')
const db = require('./models')

db.db.authenticate().
then (() => {
  console.log('connected to the database')
})


const port = 3000

const connect = async () => {
  await db.User.sync();
  await db.Page.sync();

  apps.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
  });
}

connect();
