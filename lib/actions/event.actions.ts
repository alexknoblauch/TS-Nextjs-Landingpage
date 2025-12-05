import Event from "../models/event"

export async function getSimilarEventBySlug(slug: string){
    try{
        const event = Event.findOne({ slug })
        const otherEvents = Event.find({_id: {$ne: event._id, tags: {$in: event.tags} }})

    }catch(e){
        console.log(e)
    }
}