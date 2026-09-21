import { useEffect, useRef } from 'react';
import { ExternalLink, PlaceholderImage, Tags } from './Shared';

export default function ProjectModal({ project, onClose }) {
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
