import express from 'express';
import path from 'path';
import { } from 'dotenv/config';
import router from './router.js';
import connection from './database/connection.js';

const app = express()

app.set('PORT', process.env.PORT || 3000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(router)

connection()
  .then(() => {
    app.listen(app.get('PORT'), () => {
      console.log(`Server is Running on http://localhost:${app.get('PORT')}`);
    })
  })
  .catch((err) => console.log(err))

