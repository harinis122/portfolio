// Replace null URLs with your real links. Missing destinations render as text.
export const profile = {
  name: 'Harini Suresh',
  firstName: 'Harini',
  email: 'harinisuresh122@gmail.com',
  bio: 'Currently, I\'m working on OnTask, a macOS productivity app and RouteBite, an AI-powered restauraunt finder, both intended to solve needs I’ve personally encountered. Outside of programming, I like to bake, watch time travel movies, listen to tech and science podcasts, and dance!',
  portrait: '/files/portrait.png',
  resume: '/files/resume.pdf',
  linkedin: 'https://www.linkedin.com/in/harinis122/',
  github: 'https://github.com/harinis122',
  devpost: 'https://devpost.com/harinis122',
};

// Original draft content. Add verified metadata, details, screenshots, and URLs.
export const projects = [
  {
    id: 'ontask', title: 'OnTask', meta: 'MacOS Menu-Bar Focus & Accountability App', description: 'Helps you stay focused by keeping your current task visible, tracking your time, and checking in on your progress!',
    details: 'I built OnTask after wanting a way to stay intentional about what I was working on, especially with emails, notifications, and other distractions competing for attention. It helps keep the current task at the top of your mind, and I’ve since used feedback from a few users to shape the next version with new features and refinements!',
    tags: ['Swift', 'SwiftUI', 'AppKit'], platform: 'GitHub', url: 'https://github.com/harinis122/on-task', image: '/files/ontask_pic.png',
  },
  {
    id: 'luminatetrends', title: 'Luminate Trends', meta: 'Trend-Analysis Tool | top-4 projects at Hack the Coast', description: 'Helps hackathon sponsor Prince of Peace evaluate which product opportunities are worth pursuing!',
    details: 'My team placed in the top 4, which led to an extended demo and follow-up with the sponsor. We worked directly with Prince of Peace to understand what they cared about, then built a scoring system around factors like market opportunity, regulatory feasibility, implementation effort, and brand fit. I focused mainly on the backend and built the modular scoring engine that ranked the trends.',
    tags: ['Python', 'Streamlit'], platform: 'GitHub', url: 'https://github.com/harinis122/luminate-trends', image: '/files/luminatetrends_pic.png',
  },
  {
    id: 'routebite', title: 'RouteBite', meta: 'AI-powered restaurant finder', description: 'Helps you find nearby restaurants when travelling, optimized to fit your preferences!',
    details: 'In progress',
    tags: ['Python', 'FastAPI', 'React', 'Tailwind CSS','Vite'], platform: 'GitHub', url: 'https://github.com/harinis122/routebite', image: '/files/placeholder_project.png',
  },
];
