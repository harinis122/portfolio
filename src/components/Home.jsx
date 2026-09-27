import { useState } from 'react';
import { profile } from '../content';

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return <section id="home" aria-labelledby="home-heading" className="entrance grid items-center gap-12 pt-14 pb-24 desktop:min-h-[725px] desktop:grid-cols-[1.45fr_1fr] desktop:gap-14 desktop:pt-[113px] desktop:pb-[158px]">
    <div className="relative desktop:pr-8 desktop:after:absolute desktop:after:top-1/2 desktop:after:right-0 desktop:after:h-[220px] desktop:after:w-px desktop:after:-translate-y-1/2 desktop:after:bg-line">
      <h1 id="home-heading" className="text-[40px] leading-tight font-bold tracking-[-1px] sm:text-5xl">Hi, I'm {profile.firstName}</h1>
      <p className="mt-6 max-w-[365px] text-lg leading-[1.65] text-muted">I'm a <strong className="font-medium text-ink">software and AI engineer</strong> studying computer science at UC Irvine, focused on building practical projects for real-world problems!</p>
      <button type="button" aria-expanded={expanded} aria-controls="extended-bio" onClick={() => setExpanded(!expanded)} className="text-link mt-6 min-h-11 text-sm">{expanded ? 'Show less' : 'Read more'}</button>
      <p id="extended-bio" hidden={!expanded} className="mt-3 max-w-[400px] text-sm leading-7 text-muted">{profile.bio}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a href={`mailto:${profile.email}`} className="flex min-h-11 items-center gap-2 hover:text-accent-dark"><SocialIcon type="email" />{profile.email}</a>
        {['linkedin', 'github', 'devpost'].map(type => {
          const label = { linkedin: 'LinkedIn', github: 'GitHub', devpost: 'Devpost' }[type];
          return profile[type] ? (
            <a key={type} href={profile[type]} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center gap-2 hover:text-accent-dark">
              <SocialIcon type={type} />{label}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span key={type} aria-disabled="true" title="Link not provided yet" className="flex min-h-11 items-center gap-2 hover:text-accent-dark">
              <SocialIcon type={type} />{label}<span className="sr-only"> — link not provided yet</span>
            </span>
          );
        })}
      </div>
    </div>
    {profile.portrait ? (
      <img src={profile.portrait} alt={`${profile.name} portrait`} className="h-auto w-full self-start object-cover aspect-4/5 max-w-[363px] justify-self-center rounded-[14px]" />
    ) : (
      <div role="img" aria-label={`${profile.name} portrait — placeholder`} className="flex items-center justify-center bg-soft aspect-4/5 w-full self-start max-w-[363px] justify-self-center rounded-[14px]">
        <span className="text-[7px] tracking-wide text-ink/70">PHOTO</span>
      </div>
    )}
  </section>;
}

function SocialIcon({ type }) {
  const paths = {
    email: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="m3 5 9 8 9-8" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
    github: <><path d="M9 19c-5 1-5-3-7-3m14 5v-4c0-1-.4-2-1-2 4-.5 6-2 6-6 0-1-.4-2-1-3 .2-1 .2-2-.2-3-2 0-3 1-4 1-2-.5-4-.5-6 0-1 0-2-1-4-1-.4 1-.4 2-.2 3-.6 1-1 2-1 3 0 4 2 5.5 6 6-.6 0-1 1-1 2v4" /></>,
    devpost: <><path d="M4 5h13l5 7-5 7H4z" /><path d="M9 8h2a4 4 0 0 1 0 8H9z" /></>,
  };
  return <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{paths[type]}</svg>;
}
