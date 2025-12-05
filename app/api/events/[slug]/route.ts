/**
 * Custom Modules
 */
import { connectToDatabase } from "@/lib/mongoose";
/**
 * Types
 */
import { NextRequest, NextResponse } from "next/server";
import Event, { IEvent } from "@/lib/models/event";

interface RouteParams {
    params: Promise<{ slug: string }>;
}

export async function GET(req: NextRequest, { params }: RouteParams ): Promise<NextResponse> {
    try {
        await connectToDatabase()

        const {slug} = await params

        if(!slug || typeof slug !== 'string' || slug === ''){
            return NextResponse.json(
                {message: 'Slug invalid'},
                {status: 400})
        }
        
        const event: IEvent | null = await Event.findOne({ 'slug': slug }).lean();

        if(!event){
            return NextResponse.json({
            message: 'Event not found'},
            {status: 404}) 
        }

        return NextResponse.json({
            message: 'Event successfully retreived',
            event},
            {status: 200})

    } catch(e){
        console.log('Event fetch failed')
        //WINSTON
        return NextResponse.json({message: 'Event fetch failed'}, {status: 500})
    }
}