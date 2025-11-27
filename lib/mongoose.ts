import mongoose from 'mongoose';

const MONGODB_CONNECTIONSTRING = process.env.MONGODB_CONNECTIONSTRING;

// Ganz einfach - nur connect
export async function connectToDatabase() {
    if (!MONGODB_CONNECTIONSTRING) {
  throw new Error('Please define MONGODB_CONNECTIONSTRING in .env.local');
}
  try {
    await mongoose.connect(MONGODB_CONNECTIONSTRING, {
      dbName: 'tutorial-6h'
    });
    console.log('✅ Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}