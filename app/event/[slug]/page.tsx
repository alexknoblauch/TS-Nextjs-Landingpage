import {clientConfig} from '../../../config/index'
import { notFound } from "next/navigation"
import Image from "next/image"
import BookEvent from "@/app/components/BookEvent"

const EventDetailItem = ({icon, alt, label}: {icon:string, alt:string, label:string}) => (
    <div className="flex-row-gap-2 items-center">
        <Image src={icon} alt={alt} width={17} height={17}/>
        <p>{label}</p>
    </div>
)

const EventAgenda = ({ agendaItems }: {agendaItems: string[]}) => {
    return <div className="agenda">
        <h2>Agenda</h2>
        <ul>
            {agendaItems.map(item => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    </div>
}

const EventTags = function({tags}: {tags: string[]}) {
    return <div className="flex flex-row gap-1-5 flex-wrap">
        {tags.map(tag => (
           <div className="pill" key={tag}>{tag}</div> 
        ))}
    </div>
}

const bookings = 10

export default async function EventPage({params}: {params: Promise<{ slug: string }>}) {

    const { slug } = await params
    const sanitizedSlug = slug.toLocaleLowerCase().trim()
    const req = await fetch(`${clientConfig.NEXT_PUBLIC_BASE_URL}/api/events/${sanitizedSlug}`)
    const { event: {description, image, overview, date, time, mode, agenda, location, audience, tags, organizer}} = await req.json()               

    if(!description) return notFound();                    //neues Feature für Detailpage fetch fail 

    return (
    <section id='event'>
        <div className="header">
            <h1>Event Description</h1>
            <p>{description}</p>
        </div>

        <div className="details">

            <div className="content">
                <Image src={image} alt='Event Banner' width={800} height={800} className='banner'/>

                <section className="flex-col-gap-2">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                </section>

                <section>
                    <h2>Event Details</h2>
                    <EventDetailItem icon="/icons/calendar.svg" alt="calendar" label={date} />
                    <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
                    <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
                    <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
                    <EventDetailItem icon="/icons/audience.svg" alt="audience" label={audience} />
                </section>

                <EventAgenda agendaItems={agenda} />

                <section>
                    <h2>About the Organizer</h2>
                    <p>{organizer}</p>
                </section>

                <EventTags tags={tags} />

            </div>

            <aside className="booking">
                <div className="signup-card">
                    <h2>Book Your Spot</h2>
                        {bookings > 0 ? <p className="text-sm">
                            Join {bookings} people who have already booked their spot!
                            </p> : 
                            <p>Be the first who book this Event</p>
                        }
                        <BookEvent />
                </div>
            </aside>
        </div>
    </section>
    )
}