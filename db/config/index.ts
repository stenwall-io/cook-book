import {config} from 'dotenv';
import mongoose from 'mongoose';

config();

const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to database.');
  })
  .catch(err => {
    console.log('Cannot connect to database.', err);
    process.exit();
  });
