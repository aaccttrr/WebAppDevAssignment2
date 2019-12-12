import './db'
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import loadBooks from './bookData';
import router from './api/books';

dotenv.config();

const app = express();

const port = 8080;

app.use('/api/books', router)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(port, () => {
    console.info(`Server running at ${port}`);
  });

if(process.env.seedDb){
    loadBooks();
}