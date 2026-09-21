import { useState } from 'react';
import { profile } from '../content';
import { ExternalLink, PlaceholderImage, SocialIcon } from './Shared';

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  return <section id="home" aria-labelledby="home-heading" className="entrance grid items-center gap-12 pt-14 pb-24 desktop:min-h-[725px] desktop:grid-cols-[1.45fr_1fr] desktop:gap-14 desktop:pt-[113px] desktop:pb-[158px]">
    <div className="relative desktop:pr-8 desktop:after:absolute desktop:after:top-1/2 desktop:after:right-0 desktop:after:h-[220px] desktop:after:w-px desktop:after:-translate-y-1/2 desktop:after:bg-line">
      <h1 id="home-heading" className="text-[40px] leading-tight font-bold tracking-[-1px] sm:text-5xl">Hi, I'm {profile.firstName}</h1>
      <p className="mt-6 max-w-[365px] text-lg leading-[1.65] text-muted">I'm a <strong className="font-medium text-ink">software and AI engineer</strong> studying computer science at UC Irvine, focused on building systems that stay reliable once real data hits them.</p>
      <button type="button" aria-expanded={expanded} aria-controls="extended-bio" onClick={() => setExpanded(!expanded)} className="text-link mt-6 min-h-11 text-sm">{expanded ? 'Show less' : 'Read more'}</button>
      <p id="extended-bio" hidden={!expanded} className="mt-3 max-w-[400px] text-sm leading-7 text-muted">{profile.bio}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
        <a href={`mailto:${profile.email}`} className="flex min-h-11 items-center gap-2 hover:text-accent-dark"><SocialIcon type="email" />{profile.email}</a>
        {['linkedin', 'github', 'devpost'].map(type => <ExternalLink key={type} href={profile[type]} className="flex min-h-11 items-center gap-2 hover:text-accent-dark"><SocialIcon type={type} />{{ linkedin: 'LinkedIn', github: 'GitHub', devpost: 'Devpost' }[type]}</ExternalLink>)}
      </div>
    </div>
    <PlaceholderImage src={profile.portrait} alt={`${profile.name} portrait`} label="PHOTO" className="aspect-4/5 w-full max-w-[363px] justify-self-center rounded-[14px]" />
  </section>;
}
