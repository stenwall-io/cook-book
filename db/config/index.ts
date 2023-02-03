import mongoose from 'mongoose';

const options: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .set('strictQuery', false)
      .connect(process.env.MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log('Connected to database');
        return mongoose;
      })
      .catch((e) => {
        console.log('Error connecting to database', e);
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export async function dbDisconnect() {
  if (cached.conn) {
    await cached.conn.close();
    cached.conn = null;
  }
}

export default dbConnect;
