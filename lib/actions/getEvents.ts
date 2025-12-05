'use server';

import  Event  from '@/lib/models/event';
import { connectToDatabase } from '../mongoose';

export async function getEvents() {
  try {
    await connectToDatabase();
    const events = await Event.find({}).lean();
    return JSON.parse(JSON.stringify(events));
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}