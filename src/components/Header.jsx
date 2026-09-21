import { useEffect, useState } from 'react';
import { profile } from '../content';
import { ExternalLink } from './Shared';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const updateSection = () => {
      const sections = ['home', 'projects', 'contact'];
      const marker = window.innerHeight * 0.4;
      let current = 'home';
      sections.forEach(id => { if (document.getElementById(id).getBoundingClientRect().top <= marker) current = id; });
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) current = 'contact';
      setActiveSection(current);
    };
    updateSection();
    window.addEventListener('scroll', updateSection, { passive: true });
    window.addEventListener('resize', updateSection);
    return () => { window.removeEventListener('scroll', updateSection); window.removeEventListener('resize', updateSection); };
  }, []);
  return <header className="sticky top-0 z-20 border-b border-accent bg-soft">
    <nav aria-label="Main navigation" className="flex min-h-[75px] flex-wrap items-center justify-between gap-x-5 gap-y-1 px-5 py-3 sm:px-8 desktop:px-12">
      <a href="#home" className="font-heading text-base font-medium">{profile.name}</a>
      <div className="flex items-center gap-4 text-[17px] sm:gap-9 sm:text-sm">
        {['home', 'projects', 'contact'].map(id => <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} className={`flex min-h-11 items-center border-b transition-colors hover:border-accent ${activeSection === id ? 'border-accent' : 'border-transparent'}`}>{id[0].toUpperCase() + id.slice(1)}</a>)}
        <ExternalLink href={profile.resume} className="rounded-lg bg-resume px-4 py-2 transition-colors hover:bg-[#D7DBF2] sm:px-5">Resume</ExternalLink>
      </div>
    </nav>
  </header>;
}
