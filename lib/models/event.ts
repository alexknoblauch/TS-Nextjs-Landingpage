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
  description: z.string(),
  overview: z.string(),
  image: z.string(),
  venue: z.string(),
  location: z.string(),
  date: z.string(),
  time: z.string(),
  mode: z.string(),
  audience: z.string(),
  agenda: z.array(z.string()),
  organizer: z.string(),
  tags: z.array(z.string())
});

export type IEvent = z.infer<typeof eventZodSchema> & Document;


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
  timestamps: true 
});

eventSchema.pre('save', function(next){
    if(this.isModified('title')) {
        const title = this.title
        this.slug = slugify(title)
    }
    // @ts-ignore
    next()
})

eventSchema.index({ slug: 1 }); 
eventSchema.index({ date: 1 }); 

export default model<IEvent>('Event', eventSchema);