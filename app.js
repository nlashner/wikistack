const express = require ('express')
const { db } = require ('./models')

db.authenitcate().
then (() => {
  console.log('connected to the database')
})
