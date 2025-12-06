import Event from "../models/event"

export async function getSimilarEventBySlug(slug: string){
    try{
        const event = await Event.findOne({ slug })
        const similarEvents = await Event.find({_id: {$ne: event._id}, tags: {$in: event.tags}}).lean()
        return similarEvents

    }catch(e){
        console.log(e)
        return []
    }
}