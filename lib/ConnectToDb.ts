import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.NEXT_PUBLIC_MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI ERROR');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function ConnectToDB() {
  console.log(MONGODB_URI);
  
  if (cached.conn) {
    console.log('Already connected to MongoDB');
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('MongoDB connected');
      return mongoose
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default ConnectToDB;
