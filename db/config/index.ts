import { config } from 'dotenv';
import mongoose from 'mongoose';


import models from "@models/index"

config();

const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  initial();
  console.log('TUTA');
  return cached.conn
}

const initial = async () => {
  await models.Recipe.create({
    name: 'Testrecept',    
  });
}

export default dbConnect
