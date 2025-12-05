/**
 * Components
 */
import EventCard from "./components/EventCard";
import About from "./about/page";
import ButtonExplore from './components/ButtonExplore'
/**
 * Node Modules
 */
import Image from "next/image";
/**
 * Custom Modules
 */
import {clientConfig}  from '../config/index'
import { EventDetails } from "@/lib/models/event";
import { events } from "@/lib/constants";
import { getEvents } from "@/lib/actions/getEvents";


export default async function Home() {

  const DBevents = await getEvents() as EventDetails[]

  


  return <section className="flex flex-col items-center">
      <h1 className="w-[50%] text-center">The Hub for Events you should not miss </h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in One Place</p>

      <ButtonExplore />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {DBevents && DBevents.length > 0 && DBevents.map((event: EventDetails) => (          // externe Array checks
            <li key={event.title} style={{ listStyleType: 'none' }}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>


    </section> 
  ;
}
