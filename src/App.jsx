import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { profile } from './content';

export default function App() {
  return <>
    <a href="#main" className="sr-only fixed top-3 left-3 z-50 rounded bg-white p-3 focus:not-sr-only">Skip to content</a>
    <Header />
    <main id="main" className="mx-auto w-full max-w-[1100px] px-6 desktop:px-12">
      <Home />
      <Projects />
      <Contact />
    </main>
    <footer className="border-t border-line px-6 py-8 text-center text-xs leading-7 text-muted">
      © {new Date().getFullYear()} {profile.name}
      {['linkedin', 'github'].map(type => (
        <span key={type}>
          {' · '}
          {profile[type] ? (
            <a href={profile[type]} target="_blank" rel="noopener noreferrer">
              {type === 'linkedin' ? 'LinkedIn' : 'GitHub'}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <span aria-disabled="true" title="Link not provided yet">
              {type === 'linkedin' ? 'LinkedIn' : 'GitHub'}<span className="sr-only"> — link not provided yet</span>
            </span>
          )}
        </span>
      ))}
    </footer>
  </>;
}
