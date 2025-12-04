// test-event.ts
const defaultEvent = {
  title: "Tech Conference 2024",
  slug: "tech-conference-2024", // Wird automatisch von slugify generiert
  description: "The biggest tech conference of the year featuring latest innovations in web development",
  overview: "Join us for a day of exciting talks, workshops and networking with industry experts",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500",
  venue: "Tech Convention Center",
  location: "Berlin, Germany", 
  date: "2024-12-15",
  time: "09:00",
  mode: "in-person",
  audience: "Developers, Designers, Product Managers",
  agenda: [
    "09:00 - Registration & Coffee",
    "10:00 - Keynote: Future of Web Development", 
    "11:30 - React 18 Workshop",
    "13:00 - Lunch Break",
    "14:30 - Next.js Deep Dive",
    "16:00 - Networking Session"
  ],
  organizer: "Tech Events GmbH",
  tags: ["technology", "conference", "web-development", "react", "nextjs"]
};

export default defaultEvent;