import mongoose from 'mongoose';

mongoose
  .connect(config.MONGODB_URI, options)
  .then(() => {
    console.log('Connected to database.');
    initial();
  })
  .catch(err => {
    console.log('Cannot connect to database.', err);
    process.exit();
  });
