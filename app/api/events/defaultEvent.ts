// test-event.ts
export const defaultEvent = {
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


export const defaultEvents = [
  {
    title: "React Conf 2025",
    image: "/images/event1.png",
    slug: "react-conf-2025",
    location: "Las Vegas, Nevada",
    date: "May 14-15, 2025",
    time: "9:00 AM",
    description: "Join the global React community for two days of cutting-edge talks, workshops, and networking with React core team members and industry experts.",
    overview: "The premier conference for React developers featuring the latest updates, best practices, and future of React ecosystem.",
    venue: "Caesars Forum Conference Center",
    mode: "in-person",
    audience: "Developers, Tech Leads, Architects",
    agenda: ["Keynote: React Future", "Concurrent Features Deep Dive", "State Management Workshop", "Networking Reception"],
    organizer: "Meta Open Source",
    tags: ["react", "frontend", "javascript", "web"]
  },
  {
    title: "Next.js Conf 2025",
    image: "/images/event2.png",
    slug: "nextjs-conf-2025",
    location: "San Francisco, California",
    date: "June 18-19, 2025",
    time: "10:00 AM",
    description: "The official Next.js conference showcasing the latest features, case studies, and roadmap from the Vercel team and community.",
    overview: "Learn about server components, React 19 integration, and production best practices from Next.js core contributors.",
    venue: "Moscone Center",
    mode: "hybrid",
    audience: "Full-stack Developers, CTOs",
    agenda: ["Next.js 15 Launch", "App Router Masterclass", "Performance Optimization", "E-commerce Case Studies"],
    organizer: "Vercel",
    tags: ["nextjs", "react", "fullstack", "vercel"]
  },
  {
    title: "Node Summit 2025",
    image: "/images/event3.png",
    slug: "node-summit-2025",
    location: "Portland, Oregon",
    date: "July 22-23, 2025",
    time: "8:30 AM",
    description: "The largest Node.js conference focusing on backend development, microservices, and scalable architecture.",
    overview: "Explore Node.js 22 features, Deno integration, and enterprise backend patterns.",
    venue: "Oregon Convention Center",
    mode: "in-person",
    audience: "Backend Engineers, DevOps",
    agenda: ["Node.js 22 Release", "Microservices Patterns", "Database Performance", "Security Best Practices"],
    organizer: "Node.js Foundation",
    tags: ["nodejs", "backend", "javascript", "server"]
  },
  {
    title: "Web Summit Europe 2025",
    image: "/images/event4.png",
    slug: "web-summit-europe-2025",
    location: "Lisbon, Portugal",
    date: "November 3-5, 2025",
    time: "9:00 AM",
    description: "One of the world's largest tech conferences with startups, investors, and tech leaders from across the globe.",
    overview: "Three days of keynotes, workshops, and networking covering web technologies, AI, and digital innovation.",
    venue: "Altice Arena",
    mode: "in-person",
    audience: "Entrepreneurs, Investors, Tech Professionals",
    agenda: ["AI in Web Development", "Startup Pitch Competition", "VC Networking", "Future of Web Technologies"],
    organizer: "Web Summit",
    tags: ["web", "tech", "startup", "innovation"]
  },
  {
    title: "TypeScript Conference 2025",
    image: "/images/event5.png",
    slug: "typescript-conf-2025",
    location: "Austin, Texas",
    date: "August 12-13, 2025",
    time: "9:00 AM",
    description: "Deep dive into TypeScript 6.0 features, advanced types, and enterprise TypeScript adoption strategies.",
    overview: "Learn from TypeScript team members and experts about type safety at scale.",
    venue: "Austin Convention Center",
    mode: "in-person",
    audience: "TypeScript Developers, Enterprise Teams",
    agenda: ["TypeScript 6.0 Features", "Advanced Generic Patterns", "Migration Strategies", "Tooling Ecosystem"],
    organizer: "Microsoft",
    tags: ["typescript", "javascript", "programming", "microsoft"]
  },
  {
    title: "JavaScript Jam Hackathon",
    image: "/images/event6.png",
    slug: "js-jam-hackathon-2025",
    location: "New York, New York",
    date: "September 27-28, 2025",
    time: "11:00 AM",
    description: "48-hour hackathon focusing on innovative JavaScript projects with prizes, mentorship, and networking.",
    overview: "Build and deploy JavaScript applications with guidance from industry mentors and judges.",
    venue: "New York Tech Hub",
    mode: "in-person",
    audience: "Students, Junior Developers, Hackers",
    agenda: ["Team Formation", "Coding Sprint", "Mentor Sessions", "Project Demos", "Awards Ceremony"],
    organizer: "JavaScript NYC Community",
    tags: ["javascript", "hackathon", "coding", "community"]
  }
];



export const similiarEvents = [
  {
    title: "New React Conf 2025",
    image: "/images/event5.png",
    slug: "new-react-conf-2025",
    location: "Las Vegas, Nevada",
    date: "May 14-15, 2025",
    time: "9:00 AM",
    description: "Join the global React community for two days of cutting-edge talks, workshops, and networking with React core team members and industry experts.",
    overview: "The premier conference for React developers featuring the latest updates, best practices, and future of React ecosystem.",
    venue: "Caesars Forum Conference Center",
    mode: "in-person",
    audience: "Developers, Tech Leads, Architects",
    agenda: ["Keynote: React Future", "Concurrent Features Deep Dive", "State Management Workshop", "Networking Reception"],
    organizer: "Meta Open Source",
    tags: ["react", "frontend", "javascript", "web"]
  },
    {
    title: "React Conf 2026",
    image: "/images/event4.png",
    slug: "react-conf-2026",
    location: "Las Vegas, Nevada",
    date: "May 14-15, 2025",
    time: "9:00 AM",
    description: "Join the global React community for two days of cutting-edge talks, workshops, and networking with React core team members and industry experts.",
    overview: "The premier conference for React developers featuring the latest updates, best practices, and future of React ecosystem.",
    venue: "Caesars Forum Conference Center",
    mode: "in-person",
    audience: "Developers, Tech Leads, Architects",
    agenda: ["Keynote: React Future", "Concurrent Features Deep Dive", "State Management Workshop", "Networking Reception"],
    organizer: "Meta Open Source",
    tags: ["react", "frontend", "javascript", "web"]
  }
]