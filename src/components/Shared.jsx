export function ExternalLink({ href, children, className = '' }) {
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span className="sr-only"> (opens in a new tab)</span></a>
    : <span className={className} aria-disabled="true" title="Link not provided yet">{children}<span className="sr-only"> — link not provided yet</span></span>;
}

export function PlaceholderImage({ src, alt, label = 'PROJECT IMAGE', className = '' }) {
  return src ? <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
    : <div role="img" aria-label={`${alt} — placeholder`} className={`flex items-center justify-center bg-soft ${className}`}><span className="text-[7px] tracking-wide text-ink/70">{label}</span></div>;
}

export function Tags({ tags }) {
  return <ul aria-label="Technologies" className="flex flex-wrap gap-2">{tags.map(tag => <li key={tag} className="rounded-xs border border-soft bg-soft px-2.5 py-1.5 font-mono text-xs text-ink">{tag}</li>)}</ul>;
}

export function SectionHeading({ eyebrow, title }) {
  return <><p className="mb-3 font-mono text-xs text-accent">{eyebrow}</p><h2 className="text-[32px] leading-tight font-semibold">{title}</h2></>;
}

export function SocialIcon({ type }) {
  const paths = {
    email: <><rect x="3" y="4" width="18" height="16" rx="1" /><path d="m3 5 9 8 9-8" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4" /></>,
    github: <><path d="M9 19c-5 1-5-3-7-3m14 5v-4c0-1-.4-2-1-2 4-.5 6-2 6-6 0-1-.4-2-1-3 .2-1 .2-2-.2-3-2 0-3 1-4 1-2-.5-4-.5-6 0-1 0-2-1-4-1-.4 1-.4 2-.2 3-.6 1-1 2-1 3 0 4 2 5.5 6 6-.6 0-1 1-1 2v4" /></>,
    devpost: <><path d="M4 5h13l5 7-5 7H4z" /><path d="M9 8h2a4 4 0 0 1 0 8H9z" /></>,
  };
  return <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{paths[type]}</svg>;
}
