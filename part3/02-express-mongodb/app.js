import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import methodOverride from 'method-override';
import taskRouter from './router/task.router.js';

const app = express();
app.use(express.json());
dotenv.config();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('./public', express.static('/public'));
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));
app.use('/',taskRouter)

// Please fill up .env.example and rename it to .env
mongoose.connect(process.env.db_url);


app.listen(3000, () => {
  console.log('localhost:3000');
});
