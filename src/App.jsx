import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { ExternalLink } from './components/Shared';
import { profile } from './content';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return <>
    <a href="#main" className="sr-only fixed top-3 left-3 z-50 rounded bg-white p-3 focus:not-sr-only">Skip to content</a>
    <Header />
    <main id="main" className="mx-auto w-full max-w-[1100px] px-6 desktop:px-12">
      <Home />
      <Projects onOpen={setSelectedProject} />
      <Contact />
    </main>
    <footer className="border-t border-line px-6 py-8 text-center text-xs leading-7 text-muted">© {new Date().getFullYear()} {profile.name} · <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink> · <ExternalLink href={profile.github}>GitHub</ExternalLink></footer>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>;
}
