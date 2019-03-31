import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

import { SERVER_PORT, API_PREFIX } from '../etc/config.json'
import api from './api'
import serverRenderer from './bundle/bundle.node'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

app.use(API_PREFIX, api)

app.get('/neighbors/filters', (req, res) => {
  res.redirect('/neighbors')
})
app.get('/sidebar', (req, res) => {
  res.redirect('/')
})

app.get('*', serverRenderer)

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${SERVER_PORT}`)
})
