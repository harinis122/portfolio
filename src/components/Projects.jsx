import { projects } from '../content';
import { ExternalLink, PlaceholderImage, SectionHeading, Tags } from './Shared';

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

export default function Projects({ onOpen }) {
  return <section id="projects" aria-label="Projects" className="pt-12 pb-20 desktop:pt-[95px] desktop:pb-[100px]">
    <SectionHeading eyebrow="selected work" title="Projects" />
    <p className="mt-7 max-w-[510px] leading-[1.65] text-muted">A handful of things I've built, from a productivity app to restaurant discovery and meal recommendations.</p>
    <div className="mt-12 border-b border-line desktop:-mx-5">{projects.map(project => <ProjectRow key={project.id} project={project} onOpen={onOpen} />)}</div>
  </section>;
}
