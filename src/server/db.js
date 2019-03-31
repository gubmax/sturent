import mongoose from 'mongoose'

import { DB } from '../etc/config.json'

export function setUpConnection() {
  mongoose.connect(`mongodb://${DB.HOST}:${DB.PORT}/${DB.NAME}`, { useNewUrlParser: true })
}
