import mongoose from 'mongoose';

const MONGODB_CONNECTIONSTRING = process.env.MONGODB_CONNECTIONSTRING;

export async function connectToDatabase() {
  if (!MONGODB_CONNECTIONSTRING) {
    throw new Error('Please define MONGODB_CONNECTIONSTRING in .env.local');
  }

  try {
    await mongoose.connect(MONGODB_CONNECTIONSTRING);

    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);

    throw error;
  }
}