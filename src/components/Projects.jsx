import { projects } from '../content';
import { useEffect, useRef, useState } from 'react';

function ProjectRow({ project, onOpen }) {
  return <article className="group relative grid gap-6 border-t border-line py-7 desktop:min-h-[290px] transition-colors hover:bg-white focus-within:bg-white desktop:grid-cols-[220px_1fr] desktop:gap-10 desktop:px-5">
    <div className="relative self-start">
      <PlaceholderImage src={project.image} alt={`${project.title} project screenshot`} className="aspect-4/3 w-full rounded" />
      <span aria-hidden="true" className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-ink text-white opacity-100 transition-opacity desktop:opacity-0 desktop:group-hover:opacity-100 desktop:group-focus-within:opacity-100">↗</span>
    </div>
    <div className="desktop:pr-[140px]">
      <h3 className="text-xl font-medium"><button onClick={() => onOpen(project)} aria-haspopup="dialog" className="text-left after:absolute after:inset-0">{project.title}<span className="sr-only"> — open project details</span></button></h3>
      <p className="mt-2 font-mono text-xs text-muted">{project.meta}</p>
      <p className="mt-5 mb-4 text-[15px] leading-[1.65] text-muted">{project.description}</p>
      <Tags tags={project.tags} />
      <div className="relative z-10 mt-4 inline-block text-sm" onClick={event => event.stopPropagation()}>
        <ExternalLink href={project.url} className={project.url ? 'text-link inline-flex min-h-8 items-center' : 'text-muted'}>{project.url ? `View on ${project.platform}` : `${project.platform} link coming soon`}</ExternalLink>
      </div>
    </div>
  </article>;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return <>
  <section id="projects" aria-label="Projects" className="pt-12 pb-20 desktop:pt-[95px] desktop:pb-[100px]">
    <p className="mb-3 font-mono text-xs text-accent">selected work</p>
    <h2 className="text-[32px] leading-tight font-semibold">Projects</h2>
    <div className="mt-12 border-b border-line desktop:-mx-5">{projects.map(project => <ProjectRow key={project.id} project={project} onOpen={setSelectedProject} />)}</div>
  </section>
  {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </>;
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);
  function handleKeyDown(event) {
    if (event.key !== 'Tab') return;
    const elements = [...dialogRef.current.querySelectorAll('button, a[href]')];
    const first = elements[0];
    const last = elements[elements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  return <dialog onKeyDown={handleKeyDown} ref={dialogRef} aria-labelledby="project-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => { if (event.target === event.currentTarget) onClose(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-[640px] overflow-y-auto rounded-xl border-0 bg-white p-0 text-ink shadow-xl">
    <div className="relative">
      <PlaceholderImage src={project.image} alt={`${project.title} project screenshot`} className="aspect-video w-full" />
      <button autoFocus onClick={onClose} aria-label="Close project details" className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white text-2xl transition-colors hover:bg-ink hover:text-white">×</button>
      <div className="p-6 sm:p-8">
        <h2 id="project-title" className="text-3xl font-semibold">{project.title}</h2>
        <p className="mt-2 font-mono text-xs text-muted">{project.meta}</p>
        <p className="mt-6 leading-7 text-muted">{project.description}</p>
        <p className="mt-3 mb-6 leading-7 text-muted">{project.details}</p>
        <Tags tags={project.tags} />
        <div className="mt-6 text-sm"><ExternalLink href={project.url} className={project.url ? 'text-link' : 'text-muted'}>{project.url ? 'View project' : 'Project URL has not been added yet.'}</ExternalLink></div>
      </div>
    </div>
  </dialog>;
}

function PlaceholderImage({ src, alt, label = 'PROJECT IMAGE', className = '' }) {
  return src ? <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} />
    : <div role="img" aria-label={`${alt} — placeholder`} className={`flex items-center justify-center bg-soft ${className}`}><span className="text-[7px] tracking-wide text-ink/70">{label}</span></div>;
}

function Tags({ tags }) {
  return <ul aria-label="Technologies" className="flex flex-wrap gap-2">{tags.map(tag => <li key={tag} className="rounded-xs border border-soft bg-soft px-2.5 py-1.5 font-mono text-xs text-ink">{tag}</li>)}</ul>;
}

function ExternalLink({ href, children, className = '' }) {
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span className="sr-only"> (opens in a new tab)</span></a>
    : <span className={className} aria-disabled="true" title="Link not provided yet">{children}<span className="sr-only"> — link not provided yet</span></span>;
}
