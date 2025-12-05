/**
 * Node Modules
 */
import mongoose, { Schema, model, Document } from "mongoose";
import { z } from 'zod'
import  slugify  from "slugify";

/**
 * Zod Schema für Validation
 */

export const eventZodSchema = z.object({
  title: z.string(),
  slug: z.string(),
  image: z.string(),
  location: z.string(),
  date: z.string(),
  time: z.string(),
  description: z.string().optional(),
  overview: z.string().optional(),
  venue: z.string().optional(),
  mode: z.string().optional(),
  audience: z.string().optional(),
  agenda: z.array(z.string()).optional(),
  organizer: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type IEvent = z.infer<typeof eventZodSchema> & Document;     // Document ist für Mongoose __v _id ect.
export type EventDetails = z.infer<typeof eventZodSchema> 


/**
 * Mongoose Schema
 */
const eventSchema = new Schema<IEvent>({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    required: true
  },
  audience: {
    type: String,
    required: true
  },
  agenda: [{
    type: String
  }],
  organizer: {
    type: String,
    required: true
  },
  tags: [{
    type: String
  }]
}, {
  timestamps: true,
  collection: 'events'
});

eventSchema.pre('save', function(){
    if(this.isModified('title')) {
        const title = this.title
        this.slug = slugify(title)
    }
})

eventSchema.index({ date: 1 }); 
 
const Event = mongoose.models.Event || model<IEvent>('Event', eventSchema);

export default Event 