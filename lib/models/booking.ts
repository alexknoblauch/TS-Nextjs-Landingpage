/**
 * Node Modules
 */
import mongoose, {model, Schema} from "mongoose";
import {z} from 'zod'

/**
 * Models
 */
import Event from './event'

const bookingZodSchema = z.object({
    eventId: z.string().refine((val) => 
        mongoose.Types.ObjectId.isValid(val), 
        "Invalid ObjectId"
    ), 
    email: z.string().email(),
})

export type IBooking = z.infer<typeof bookingZodSchema>;

const bookingSchema = new Schema<IBooking>({
    eventId: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    }
} as any, {                     // löst ObjectId + Zod problem
    timestamps: true
});

bookingSchema.pre('save', async function(next){
    if(this.isModified('eventId')){
        try{

            const isExistingEvent = await Event.findById(this.eventId)
            if(!isExistingEvent){
                //@ts-ignore
                return next(new Error('Event does not exist'));
            }
        } catch(err){
            //@ts-ignore
            return next(err as Error)
        }
    }
    //@ts-ignore
    next()
})

bookingSchema.index({ eventId: 1 }); 
bookingSchema.index({ email: 1 });   
bookingSchema.index({ eventId: 1, email: 1 }, { unique: true }); 

export default model('Booking', bookingSchema)