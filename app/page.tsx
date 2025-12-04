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
import { IEvent } from "@/lib/models/event";


export default async function Home() {

  const res = await fetch(`${clientConfig.NEXT_PUBLIC_BASE_URL}/api/events`)
  const data  = await res.json() 
  const events = data as IEvent[]


  return <section className="flex flex-col items-center">
      <h1 className="w-[50%] text-center">The Hub for Events you should not miss </h1>
      <p className="text-center mt-5">Hackathons, Meetups and Conferences, All in One Place</p>

      <ButtonExplore />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event: IEvent) => (
            <li key={event.title}>
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>


    </section> 
  ;
}
